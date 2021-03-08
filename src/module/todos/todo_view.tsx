import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import TodoAdd from './components/todo_add';
import TodoList from './components/todolist';
import { Provider } from 'react-redux';
import { store } from './store';

class TodoView extends React.PureComponent<RouteComponentProps>{
    render() {
        return (
            <Provider store={store}>
                <div>
                    <p>TodoList</p>
                    <TodoAdd/>
                    <TodoList/>
                </div>
            </Provider>
        );
    }
}



export default withRouter(TodoView);