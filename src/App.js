import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


import {useState} from 'react'


function App() {

  const [showAddTask,setShowAddTask] = useState(false)

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

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id)) 
}


//toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}



  return (
    <Router>
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     
  <Route path='/' exact render={(props)=>(
  <>
     {showAddTask && <AddTask onAdd={addTask} />}
  {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to display' }
  
  </>
  )

  } />

  <Route path='/about' component={About} />
  <Footer />
    </div>
    </Router>
  );
}

export default App;
