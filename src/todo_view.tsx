import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { GlobalState,User } from './entity';
import { TodoAdd, TodoList } from './todos';
// import store from './store';


interface IProps extends RouteComponentProps{
    user:User
}

class TodoView extends React.PureComponent<IProps>{
    render() {
        return (
            <div>
                <p>TodoList</p>
                <TodoAdd/>
                <TodoList/>
            </div>
        );
    }
}



export default withRouter(connect((state: GlobalState) => {
    // console.log("TodoView::MapState:", state);
    return {
        user: state.user
    };
})(TodoView));