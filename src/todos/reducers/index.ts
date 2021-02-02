import { Todo } from "../../entity"
import { AboutTodoAction } from "../actions"
import {Constants} from "../../constants"

export default (state: Todo[]=[{id:1,content:"打开",completed:true},{id:2,content:"关闭",completed:false}], action: AboutTodoAction)=> {
    switch (action.type) {
        case Constants.ADD_TODO_ACTION:
            let maxId = Math.max.apply(Math, state.map(p => p.id))
            const item = { id: maxId + 1, content: action.content, completed: false };
            return [
                item,
                ...state
            ];
        case Constants.REMOVE_TODO_ACTION:
            return state.filter(p => p.id != action.id);
        case Constants.TOGGLE_TODO_ACTION:
            state.map(p => {
                if (p.id == action.id) {
                    return { ...p, completed: !p.completed };
                } else {
                    return p;
                }
            });
        default:
            return state;
    }
};