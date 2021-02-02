import { combineReducers, createStore } from "redux"
import { FilterAction, FilterReducer } from "../filters"
import { TodoReducer,AboutTodoAction  } from "../todos"
import { Enums } from "../constants"
import {GlobalState} from "../entity"

const reducers= combineReducers({
    todos: TodoReducer,
    filter: FilterReducer
});

export default createStore(reducers);
