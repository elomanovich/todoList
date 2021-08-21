import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type tasksType = {
    [key: string]: Array<TaskType>
}


function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<tasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todoListID: string, id: string) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].filter(t => t.id !== id)})
        // let currentTask= tasks[todoListID]
        // tasks[todoListID] = currentTask.filter(t => t.id !== id)
        // setTasks({...tasks})
    }

    function addTask(todoListID: string, title: string) {
        setTasks({...tasks, [todoListID]: [{id: v1(),title, isDone: false},...tasks[todoListID]]})
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todoListID: string,taskId: string, isDone: boolean) {
       setTasks({...tasks, [todoListID]: tasks[todoListID].map(m => m.id === taskId ? {...m, isDone} : m)})

        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }


    function changeFilter(todoListID: string,value: FilterValuesType) {
        setTodolists(todolists.map(m=>m.id === todoListID ? {...m, filter:value} : m))
        // setFilter(value);
    }


    return (
        <div className="App">
            {todolists.map(tm => {
                let tasksForTodolist = tasks[tm.id];

                if (tm.filter === "active") {
                    tasksForTodolist = tasks[tm.id].filter(t => !t.isDone);
                }
                if (tm.filter === "completed") {
                    tasksForTodolist = tasks[tm.id].filter(t => t.isDone);
                }
                return (
                    <Todolist
                        key={tm.id}
                        todoListID={tm.id}
                        title={tm.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tm.filter}
                    />)
            })}
        </div>
    );
}

export default App;
