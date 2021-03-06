
export interface Todo{
    id: number
    content: string
    completed: boolean
}

export interface User{
    id: number
    name: string
    token: string
    isOnline: boolean
}

export interface GlobalState{
    todos: Todo[]
}
