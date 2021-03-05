import { combineReducers, createStore } from "redux"
import UserStateReducer from "./user_reducer"
import TodoReducer  from "./todo_reducer"

const reducers= combineReducers({
    todos: TodoReducer,
    user: UserStateReducer
});

export default createStore(reducers);
