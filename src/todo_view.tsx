import React from 'react';
import { TodoAdd, TodoList } from './todos';

export default class TodoView extends React.Component{
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