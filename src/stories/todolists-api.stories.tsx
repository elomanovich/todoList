import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";


export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res) => {
                setState(res.data)
            })
    }, [])


    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')
    const postTodolist = () => {
        todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res.data);
            })
        setTitle('')
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'title'} value={title} onChange={e => setTitle(e.currentTarget.value)}/>
            <button onClick={postTodolist}>post
            </button>
        </div>
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolisId] = useState<string>('')
    const deleteTodolist = () => {
        todolistAPI.deleteTitle(todolistId)
            .then((res) => {
                setState(res.data);
            })
        setTodolisId('')
    }

    return <div> {JSON.stringify(state)}
    <div>
        <input placeholder={'todolistId'} value={todolistId} onChange={e => setTodolisId(e.currentTarget.value)}/>
<button onClick={deleteTodolist}>delete</button>
    </div>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolisId] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const updateTodolist = () => {
        todolistAPI.updateTodolist(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
        setTodolisId('')
        setTitle('')
    }


    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={e => setTodolisId(e.currentTarget.value)}/>
            <input placeholder={'title'} value={title} onChange={e => setTitle(e.currentTarget.value)}/>
            <button onClick={updateTodolist}>update</button>
        </div>
    </div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'bb9264e9-6e05-4e23-9a81-52115e6648dc'
        todolistAPI.getTask(todolistId)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const PostTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'bb9264e9-6e05-4e23-9a81-52115e6648dc'
        todolistAPI.postTask(todolistId, 'Hello')
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'bb9264e9-6e05-4e23-9a81-52115e6648dc'
        const taskId = 'dec53d49-9fd2-4240-b898-4102b027b1ed'
        todolistAPI.updateTask(todolistId, taskId, 'change title')
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'bb9264e9-6e05-4e23-9a81-52115e6648dc'
        const taskId = '20590fdf-3285-4419-b1a3-ab73b3b04ab2'
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}