import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

class Index extends React.Component<RouteComponentProps>{
    constructor(props:RouteComponentProps){
        super(props);
        console.log(props);
        console.log(this.props.location);
    }
    render() {
        return (
            <div>
                <div>
                    <label>当前登录用户:{this.props.location.name}</label>
                    <Link to="/login">退出</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Index);