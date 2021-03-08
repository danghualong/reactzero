import TRTC from 'trtc-js-sdk'
import React from 'react';
import { Button } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { genTestUserSig } from '../../../public/debug/GenerateTestUserSig'

interface State{
    userId: String,
    sdkAppId: String,
    userSig: String,
    roomId: String,
    client: any,
    localStream:any,
}

class Room extends React.Component<RouteComponentProps,State>{
    constructor(props: RouteComponentProps) {
        super(props);
        // this.HandleEnter=this.HandleEnter.bind(this);
        this.HandleExit = this.HandleExit.bind(this);
        const userId = parseInt(Math.random() * 1e8 + "") + "";
        const config = genTestUserSig(userId);
        this.state= {
            userId: userId,
            sdkAppId: config.sdkAppID,
            userSig: config.userSig,
            roomId: '302',
            client: null,
            localStream:null,
        };
    }
    componentDidMount() {
        console.log(this.state.roomId,this.state.userId, this.state.userSig);
        this.state.client = TRTC.createClient({
            mode: 'rtc',
            sdkAppId:this.state.sdkAppId,
            userId:this.state.userId,
            userSig:this.state.userSig
        }); 
        this.state.client.on('stream-added', e => {
                const remoteStream = e.stream;
                console.log('远端流增加: ' + remoteStream.getId());
                //订阅远端流
                this.state.client.subscribe(remoteStream);
        });
        this.state.client.on('stream-subscribed', e => {
            const remoteStream = e.stream;
            console.log('远端流订阅成功：' + remoteStream.getId());
            // 播放远端流
            remoteStream.play('remote_stream');
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Button onClick={this.HandleEnter}>进入</Button>
                    <Button onClick={this.HandleExit}>退出</Button>
                </div>
                <div id="local_stream" className="video_container">

                </div>
                <br/>
                <div id="remote_stream" className="video_container">

                </div>
            </div>
        );
    }
    HandleEnter = async () => {
        try {
            await this.state.client.join({ roomId: this.state.roomId });
            const localStream = TRTC.createStream({ userId: this.state.userId, audio: true, video: true });
            this.state.localStream = localStream;
            try {
                await localStream.initialize();
                try {
                    await this.state.client.publish(localStream);
                    localStream.play('local_stream');
                    console.log('本地流发布成功');
                } catch (publishErr) {
                    console.error('本地流发布失败 ' + publishErr);
                }
            } catch (initErr) {
                console.error('初始化本地流失败 ' + initErr);
            }
            
        } catch (joinErr) {
            console.error('进房失败 ' + joinErr);
        }
    };
    async HandleExit() {
        try {
            if (this.state.localStream) {
                await this.state.client.unpublish(this.state.localStream);
            }
            await this.state.client.leave();
            if (this.state.localStream) {
                this.state.localStream.close();
                this.state.localStream = null;
            }
            console.log("*************退房成功");
            // 退房成功，可再次调用client.join重新进房开启新的通话。
        } catch (error) {
            console.error('退房失败 ' + error);
        }
    }
}

export default withRouter(Room);