import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {TaskType} from "../Todolist";

export type FirstTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string,
    todolistId: string
}
export type AddTaskACActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

type ActionsType = FirstTaskActionType | AddTaskACActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {
                ...state, [action.todolistId]: state[action.todolistId].filter(task => task.id !== action.taskId)
            }
        }
        case 'ADD-TASK': {
            const newTask: TaskType = {id: v1(), title: action.title, isDone: false}
            return {
                ...state, [action.todolistId]: [newTask, ...state[action.todolistId]]
            }
        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): FirstTaskActionType => {
    return {type: 'REMOVE-TASK', taskId, todolistId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskACActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}
