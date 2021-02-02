import { Enums,ActionTypes,Constants } from "../../constants"

export interface FilterAction{
    type:ActionTypes.FilterTodoActionType
    filter:Enums.FilterEnum
}

export function createFilterAction(filter:Enums.FilterEnum): FilterAction{
    return {
        type:Constants.FILTER_TODO_ACTION,
        filter
    };
}