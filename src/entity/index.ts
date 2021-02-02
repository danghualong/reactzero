import {Enums} from "../constants"

export interface Todo{
    id: number
    content: string
    completed: boolean
}

export interface GlobalState{
    todos: Todo[]
    filter:Enums.FilterEnum
}
