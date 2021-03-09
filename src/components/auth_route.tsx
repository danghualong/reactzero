import React from 'react';
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import * as UserService from "../services/user_service";

class AuthRoute extends React.PureComponent<RouteComponentProps>{
    requireLogin = () => {
        return this.props.requireLogin;
    }
    render() {
        const { history } = this.props;
        const user = UserService.getUser();
        if (user && user.isOnline) {
            // 登陆后,想跳转到登录页
            if (!this.requireLogin()) {
                history.push("/");
                return null;
            }
            return (<Route {...this.props}></Route>);
        } else {
            // 未登录，想进入业务页面
            if (this.requireLogin()) {
                history.push("/login");
                return null;
            }
            return (<Route {...this.props}></Route>);
        }
    }
}

export default withRouter(AuthRoute);
