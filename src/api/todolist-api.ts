import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '434b361a-846a-4ba6-beeb-f4bcdd2d7383'
    }
})

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
type ItemType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
type TaskType = {
    items : ItemType[]
    totalCount: number
    error : string | null
}
type PostUpdateTaskType = {
    data: ItemType
    resultCode: number
    messages: string
}
type DeleteType = {
    resultCode: number
    messages: string
    data: {}
}

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`,
            {title})
    },
    getTodolist() {
        return instance.get<Array<TodolistType>>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item: TodolistType}>>('todo-lists', {title})
    },
    deleteTitle(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    getTask(todolistId:string) {
        return instance.get<TaskType>(`todo-lists/${todolistId}/tasks`)
    },
    postTask(todolistId:string, title:string) {
        return instance.post<PostUpdateTaskType>(`todo-lists/${todolistId}/tasks`, {title})
    },
    updateTask(todolistId:string, taskId:string, title:string) {
        return instance.put<PostUpdateTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    },
    deleteTask(todolistId:string, taskId:string) {
        return instance.delete<DeleteType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    }
}
