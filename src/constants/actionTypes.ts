import {
    ADD_TODO_ACTION, REMOVE_TODO_ACTION, TOGGLE_TODO_ACTION, FILTER_TODO_ACTION,
    LOGIN_USER_ACTION, LOGOFF_USER_ACTION,
} from "./constants"

// 创建Action类型名字，避免用文本代替
export type AddTodoActionType = typeof ADD_TODO_ACTION;
export type RemoveTodoActionType = typeof REMOVE_TODO_ACTION;
export type ToggleTodoActionType = typeof TOGGLE_TODO_ACTION;
export type FilterTodoActionType = typeof FILTER_TODO_ACTION;
export type LoginUserActionType = typeof LOGIN_USER_ACTION;
export type LogoffUserActionType = typeof LOGOFF_USER_ACTION;
