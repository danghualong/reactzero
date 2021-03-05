import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { GlobalState, User } from './entity';
import Room from './room'
import { connect } from 'react-redux'

interface IProps extends RouteComponentProps{
    user:User
}

class Index extends React.Component<IProps>{
    constructor(props:RouteComponentProps){
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <label>当前登录用户:{this.props.user.name}</label>
                    <Link to="/login">退出</Link>
                </div>
                <Room></Room>
            </div>
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        user:state.user,
    }
}

export default connect(mapStateToProps, null)(Index);

// export default withRouter(Index);