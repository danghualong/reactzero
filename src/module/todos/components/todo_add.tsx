import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button } from 'antd';
import { createAddTodoAction } from '../store';

interface AddTodoProps{
    onAddTodo: (content:string) => void
}

interface IState{
    content:string
}

class TodoAdd extends React.PureComponent<AddTodoProps, IState>{
    state:IState = {
        content:""
    }
    render() {
        return (
            <div>
                <label>内容:</label>
                <input onChange={this.onContentChanged} style={{ width:'300px'}}></input>
                <Button onClick={this.onSubmit}>添加</Button>
          </div>  
        );
    }
    onContentChanged = (e) => {
        this.setState({
            content: e.target.value,
        });
    };
    onSubmit = () => {
        if (!this.state.content) {
            return;
        }
        this.props.onAddTodo(this.state.content);
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        onAddTodo: (content:string) => {
            dispatch(createAddTodoAction(content));
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoAdd);
