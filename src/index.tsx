import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { GlobalState, User } from './entity';
import Room from './room'
import { connect } from 'react-redux'


interface IProps extends RouteComponentProps{
    user:User
}

class Index extends React.PureComponent<IProps>{

    render() {
        // console.log("Index::Render:",store.getState());
        return (
            <div>
                <div>
                    <label>当前登录用户:{this.props.user.name}</label>
                    <Link to="/login">退出</Link>
                    <Link to="/todo">todos</Link>
                </div>
                <Room></Room>
            </div>
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    // console.log("Index::mapState:", state);
    return {
        user:state.user,
    }
}

export default withRouter(connect(mapStateToProps, null)(Index));
