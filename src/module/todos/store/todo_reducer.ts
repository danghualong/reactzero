import {Constants} from "../../../constants"
import { Todo } from "../../../entity"
import { AboutTodoAction } from "./action"

const todoReducer = (todos: Todo[] = [], action: AboutTodoAction) => {
    // console.log("todoReducer:", todos, action);
    switch (action.type) {
        case Constants.ADD_TODO_ACTION:
            let maxId = todos.length==0?0: Math.max.apply(Math, todos.map(p => p.id))
            const item = { id: maxId + 1, content: action.content, completed: false };
            return [
                item,
                ...todos
            ];
        case Constants.REMOVE_TODO_ACTION:
            return todos.filter(p => p.id != action.id);
        case Constants.TOGGLE_TODO_ACTION:
            todos.map(p => {
                if (p.id == action.id) {
                    return { ...p, completed: !p.completed };
                } else {
                    return p;
                }
            });
        default:
            return todos;
    }
};

export default todoReducer;