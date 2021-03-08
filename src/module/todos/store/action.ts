import { ActionTypes,Constants } from "../../../constants"

interface AddTodoAction{
    type: ActionTypes.AddTodoActionType
    content:string
}

interface RemoveTodoAction{
    type: ActionTypes.RemoveTodoActionType
    id:Number
}

interface ToggleTodoAction{
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