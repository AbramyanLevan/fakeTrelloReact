import React from 'react'

const Task = ({task,deletTask}) => {
    return (
        <div className='task-row'>
            <span>{task.content}</span><button onClick={()=>deletTask(task.id)}>X</button>
        </div>
    )
}

export default Task
