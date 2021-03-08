import { combineReducers, createStore } from "redux"
import todoReducer from "./todo_reducer"

const reducers= combineReducers({
    todos: todoReducer
});
const store = createStore(reducers,{todos:[]},undefined);

export default store;