
import { useState } from 'react';
import './App.css';

function App() {
  // Entire list
  const [todoList, setTodoList] = useState([]);
  // Individual task 
  const [newTask, setNewTask] = useState("");
  // Handle user input
  const handleChange = (event) => {
    setNewTask(event.target.value); // Corrected the typo: "event.target.value"
  }


  const addTask = () =>{
    const task ={
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
    };
   setTodoList([...todoList, newTask]);

  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      return task !== taskName;
    });
    setTodoList(newTodoList);
  }
  
  

  return (
    <div className="App">
     <div className="addTask">
     <input onChange={handleChange}/>
     <button onClick={addTask}>Add Task</button>
     </div>
     <div className="List">
       {todoList.map((task) => {
       return ( 
         <div>
       <h1>{task}</h1>
       <button onClick={() => deleteTask(task)}>X</button>
       </div>
       );
       })} 
     </div>
    </div>
  );
}

export default App;
