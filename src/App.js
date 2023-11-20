import { useState } from 'react';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique ID generation

function App() {
   const [todoList, setTodoList] = useState([]);
   const [newTask, setNewTask] = useState('');

   const handleChange = (event) => {   
      setNewTask(event.target.value);
   }

   const addTask = () => {
      if (newTask.trim() === '') return; // Prevent adding empty tasks
      const task = {
          id: uuidv4(), // Use UUID for unique ID
          taskName: newTask,
          completed: false
      };
      setTodoList([...todoList, task]);
      setNewTask(''); // Clear the input field after adding a task
   };

   const deleteTask = (id) => {
      setTodoList(todoList.filter(task => task.id !== id));
   }

   const completeTask = (id) => {
      setTodoList(todoList.map(task => {
          if (task.id === id) {
              return { ...task, completed: true };
          } else {
              return task;
          }
      }));
   }

   return (
      <div className="App">
         <div className="addTask">
               <input 
                   value={newTask} // Controlled component
                   onChange={handleChange} 
                   placeholder="Enter a new task" // Added placeholder for better UX
               />
               <button onClick={addTask}>Add Task</button>
         </div>
            
         <div className="list">
            {todoList.map(task => (
               <Task
                   key={task.id} // Using key prop for efficient list rendering
                   id={task.id}
                   taskName={task.taskName}
                   completed={task.completed}
                   deleteTask={deleteTask}
                   completeTask={completeTask}
                   style={{ backgroundColor: task.completed ? 'green' : 'transparent' }} // Conditional styling
               />
            ))}
         </div>
      </div>
   );
}	

export default App;
