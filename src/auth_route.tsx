import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, withRouter } from "react-router-dom";
import { GlobalState, User } from "./entity";

interface IProps extends RouteComponentProps{
    user:User
}

class AuthRoute extends React.PureComponent<IProps>{
    render() {
        console.log("this.props:",this.props);
        if (this.props.user && this.props.user.isOnline) {
            return (<Route {...this.props}></Route>);
        } else {
            return (<Redirect to="/login"></Redirect>);
        }
    }
}

export default withRouter(connect((state: GlobalState) =>{
    return {
        user: state.user
    };
})(AuthRoute));
