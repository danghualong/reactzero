import { FilterAction } from '../actions'
import {Enums,Constants} from "../../constants"

export default (state: Enums.FilterEnum = Enums.FilterEnum.Uncompleted,
    action: FilterAction) => {
    switch (action.type) {
        case Constants.FILTER_TODO_ACTION:
            return {
                filter: action.filter
            };
        default:
            return state;
    }
};