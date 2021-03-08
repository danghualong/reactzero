import React from 'react';
import { Button } from 'antd';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Room from './module/chat_room/room'
import { getUser, clear } from './services/user_service'


class Index extends React.PureComponent<RouteComponentProps>{
    render() {
        const user = getUser();
        return (
            <div>
                <div>
                    <label>当前登录用户:{user?user.name:"---"}</label>
                    <Button type="primary" onClick={this.onLogout}>退出</Button>
                    <Link to="/todo">todos</Link>
                </div>
                <Room></Room>
            </div>
        );
    }

    onLogout = () => {
        clear();
        this.props.history.replace("/login");
    };
}

export default withRouter(Index);
