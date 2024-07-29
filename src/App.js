import { useState } from 'react';
import { useTask } from './Todocontext';
import Tasks from './Tasks';
function App() {

  const {tasks, setTasks} = useTask();
  // console.log(tasks)
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');
  const submitHandler = () => {
    if(task.length<=0) {
      setMessage('Please enter a task');
    }
    else{
      setTask("");
      // console.log(task);
      setTasks([...tasks,task]);
      localStorage.setItem('tasks',JSON.stringify([...tasks,task]))
      setMessage('');
      console.log(tasks);
    }
  }

  // const handleKeyPress = (event) => {
  //   if(event.key === "Enter"){
  //     submitHandler();
  //   };
  // }
  
  return (
<>

<div>
        <h3>To Do List</h3>
        {message}
        <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Enter your task' value={task} onChange={(e)=>setTask(e.target.value)}></input>
        <button onClick={submitHandler}>Submit</button>
        </form>
      </div>
      <Tasks />

</>
  );
}

export default App;
