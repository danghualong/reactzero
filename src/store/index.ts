import { combineReducers, createStore } from "redux"
import userReducer from "./user_reducer"
import todoReducer from "./todo_reducer"

// console.log("reducers...");
const reducers= combineReducers({
    todos: todoReducer,
    user: userReducer
});
const store = createStore(reducers,{user:{id:0,name:"libai",token:"",isOnline:false},todos:[]},undefined);

export default store;
