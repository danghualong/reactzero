import React from 'react';
import { Button, Card, Space, Form, Input, Checkbox } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {createLoginUserAction} from './auth'

interface ILoginProps extends RouteComponentProps{
    onUserLogin: (id:number,name:string,token:string) => void
}

class Login extends React.PureComponent<ILoginProps, {}>{
    layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    tailLayout = {
        wrapperCol: { offset: 8, span: 16 }
    };
    form= null;
    constructor(props:any) {
        super(props);
        this.form = React.createRef();
    }

    componentDidMount() {
        
    }

    onReset = () => {
        this.form.current.resetFields();
    };

    render=()=> {
        return (
            <div className="xc-login">
                <Card size="default" className="xc-card">
                <Form 
                    ref={this.form}
                    {...this.layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}>
                            
                            <Form.Item    
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <Form.Item {...this.tailLayout}>
                                <Space size={8}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                                <Button htmlType="button" onClick={this.onReset}>
                                    重置
                                </Button>
                                </Space>
                                
                            </Form.Item>
                </Form>
                </Card>
                    </div>
        );
    }

    onFinish = (values: any) => {
        //保留token和当前用户信息
        this.props.onUserLogin(100, values["username"], "abc123");
        console.log("------",this.props);
        this.props.history.push({pathname:"/"});
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
}


const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        onUserLogin: (id:number,name:string,token:string) => {
            dispatch(createLoginUserAction({
                id,
                name,
                token,
                isOnline:true,
            }));
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);

// export default withRouter(Login);

