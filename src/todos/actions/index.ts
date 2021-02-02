import { ActionTypes,Constants } from "../../constants"
import {Todo} from "../../entity"

export interface AddTodoAction{
    type: ActionTypes.AddTodoActionType
    content:string
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
export function createAddTodoAction(content:string):AddTodoAction {
    return {
        type: Constants.ADD_TODO_ACTION,
        content
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