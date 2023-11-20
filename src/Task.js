export const Task = (props) => {

  return (
    <div 
      className="Task"
      style={{ backgroundColor: props.completed ? "transparent" : "green" }}>
      <h1>{props.taskName}</h1>

      <button onClick={() => props.completeTask(props.id)}> Complete </button>

      <button onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
  );
};

export const TaskList = ({ todoList, deleteTask, completeTask }) => {
  // This is a separate component for rendering the list of tasks.
  return (
    <div className="list">
      {todoList.map(task => (
        <Task
          key={task.id} // Adding a key for each task.
          id={task.id}
          taskName={task.taskName}
          completed={task.completed}
          deleteTask={deleteTask}
          completeTask={completeTask}
          style={{ backgroundColor: task.completed ? 'green' : 'transparent' }} // Conditional styling
        />
      ))}
    </div>
  );
};
