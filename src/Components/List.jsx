import { render } from '@testing-library/react'
import React, { useState } from 'react'
import Task from './Task'

const List = ({list}) => {
    const [task,setTasks] = useState({
        content: ''
    })
    const addTask = (task) => {
        task.id = Math.random()
        let tasksNew = [...list.tasks,task]
        list.tasks = tasksNew;

    }
    const handleChange = (e) => {
        setTasks({content:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task)
        setTasks({content:''})
    }
    const deletTask = (id) => {
        const newTasks = list.tasks.filter(task=>{
            return task.id !== id
        })
        console.log(newTasks)
        list.tasks = newTasks
    }
    const resTasks = list.tasks.length ? (
        list.tasks.map(task=>{
            return(
                <Task
                key={task.id}
                deletTask={deletTask}
                task={task}
                />
            )
        })
    ) : (
        <p></p>
    )
    return (
        <div className='list'>
            <div className='name' key={list.id}>{list.content}</div>
            <form onSubmit={handleSubmit}>
            <input type="text" className='add-task' placeholder='Add Task' onChange={handleChange} value={task.content}/>
            </form>
            {resTasks}
        </div>
    )
}

export default List
