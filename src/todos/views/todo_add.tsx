import React from 'react';
import { Button } from 'antd';
import { createAddTodoAction } from '../actions';
import {connect} from 'react-redux'

interface AddTodoProps{
    onAddTodo: () => void
}

export class TodoAdd extends React.PureComponent<AddTodoProps>{
    render() {
        return (
            <div>
                <label>内容:</label>
                <input style={{ width:'300px'}}></input>
                <Button onClick={this.props.onAddTodo}>添加</Button>
          </div>  
        );
    }
}