import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'


function App() {


  const [tasks, setTasks] = useState([
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
])

//delete task
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id)) 
}

  return (
    <div className='container'>
      <Header />
  {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  /> : 'No Tasks to display' }
  
    </div>
  );
}

export default App;
