import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';


class Login extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <p>用户名:龙</p>
                    <p>密码:***</p>
                </div>
                <Button onClick={this.onClickHandler}>登录</Button>
            </div>
        );
    }

    onClickHandler=()=>{
        this.props.history.push({pathname:"/",name:"Mr.Wang"});
    };
}

export default withRouter(Login);

