import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Alif',
      age: 24,
      active: true,
    },
    {
      id: 2,
      name: 'Asif',
      age: 30,
      active: true,
    },
    {
      id: 3,
      name: 'Riaz',
      age: 23,
      active: false,
    }
  ]);

  //delete task event 
  const deleteTask = (id) => {
    console.log('delete ',id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //toggle remainder event

  const toggleRemainder = (id) => {
    console.log('Toggle', id);
    setTasks(tasks.map((task) => task.id === id ? {...task, active: !task.active} : task))
  }

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> : 'No tasks to show'}

    </div>
  );
}

export default App;
