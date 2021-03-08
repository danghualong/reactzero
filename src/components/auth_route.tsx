import React from 'react';
import { Redirect, Route, RouteComponentProps, withRouter } from "react-router-dom";
import * as UserService from "../services/user_service";

class AuthRoute extends React.PureComponent<RouteComponentProps>{
    render() {
        const user = UserService.getUser();
        if (user && user.isOnline) {
            return (<Route {...this.props}></Route>);
        } else {
            return (<Redirect to="/login"></Redirect>);
        }
    }
}

export default withRouter(AuthRoute);
