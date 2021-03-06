import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import TodoItem from './todoitem'
import { Todo, GlobalState } from '../../entity'
import { Enums } from "../../constants"
import {createToggleTodoAction,createRemoveTodoAction, createAddTodoAction } from "../actions"

interface TodosProps{
    todos: Array<Todo>
    onDelete: (id: number) => void
    onToggle: (id: number) => void
}

class TodoList extends React.PureComponent<TodosProps>{
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(p =>
                        (<TodoItem
                            key={p.id}
                            id={p.id}
                            content={p.content}
                            onChange={() => this.props.onToggle(p.id)}
                            onDelete={()=>this.props.onDelete(p.id)}
                        />))
                }
            </ul>
            
        )
    }
}

const getTodos = (todoList: Todo[], filter: Enums.FilterEnum) => {
    if (filter == Enums.FilterEnum.All) {
        return todoList;
    } else if (filter == Enums.FilterEnum.Completed) {
        return todoList.filter(p => p.completed);
    } else {
        return todoList.filter(p => !p.completed);
    }
}

const mapStateToProps = (state:GlobalState) => {
    return {
        todos:getTodos(state.todos,Enums.FilterEnum.All)
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        onDelete: (id: number) => dispatch(createRemoveTodoAction(id)),
        onToggle: (id: number) => dispatch(createToggleTodoAction(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


