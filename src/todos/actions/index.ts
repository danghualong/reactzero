import { ActionTypes,Constants } from "../../constants"
import {Todo} from "../../entity"

export interface AddTodoAction{
    type: ActionTypes.AddTodoActionType
    item:Todo
}

export interface RemoveTodoAction{
    type: ActionTypes.RemoveTodoActionType
    id:Number
}

export interface ToggleTodoAction{
    type: ActionTypes.ToggleTodoActionType
    id:Number
}
// 声明联合类型
export type AboutTodoAction = AddTodoAction | RemoveTodoAction | ToggleTodoAction;

// action 工厂函数
export function createAddTodoAction(item:Todo):AddTodoAction {
    return {
        type: Constants.ADD_TODO_ACTION,
        item
    };
}   
export function createRemoveTodoAction(id:Number):RemoveTodoAction {
    return {
        type: Constants.REMOVE_TODO_ACTION,
        id
    };
} 
export function createToggleTodoAction(id:Number):ToggleTodoAction {
    return {
        type: Constants.TOGGLE_TODO_ACTION,
        id
    };
} 