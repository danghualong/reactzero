import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import TodoItem from './todoitem'
import { Todo, GlobalState } from '../../entity'
import { Enums } from "../../constants"
import {createToggleTodoAction,createRemoveTodoAction, createAddTodoAction } from "../actions"
import { TodoAdd } from './todo_add';

interface TodosProps{
    todos: Array<Todo>
    onDelete: (id: number) => void
    onToggle: (id: number) => void
    onAddTodo: (item: Todo) => void
}

export class TodoList extends React.PureComponent<TodosProps>{
    render() {
        console.log("******", this.props.todos);
        return (
            <div>
                <label>TodoList</label>
                <TodoAdd onAddTodo={()=>this.props.onAddTodo({ id: 1, content:"kaishi", completed: false }) }/>
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
            </div>
            
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
        todos:getTodos(state.todos,state.filter)
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        onDelete: (id: number) => dispatch(createRemoveTodoAction(id)),
        onToggle: (id: number) => dispatch(createToggleTodoAction(id)),
        onAddTodo: (item: Todo) => {
            dispatch(createAddTodoAction(item));
        }
    }
}

export const TodoListComponent= connect(mapStateToProps, mapDispatchToProps)(TodoList);


