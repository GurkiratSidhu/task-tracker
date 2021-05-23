import React from 'react'

const tasks = [
    {
        id: 1,
        text: 'Task 1',
        day: '5th May at 2:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Task 2',
        day: '5th May at 2:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Task 3',
        day: '5th May at 2:00pm',
        reminder: true,
    },
]

const Tasks = () => {
    return (
        <>
          {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>)) }  
        </>
    )
}

export default Tasks
