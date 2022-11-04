import React from "react";
import AddTask from "./AddTask";
import Task from "./Task";

const Tasks = ({ showAdd }) => {
  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {    
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
  
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
    setTasks(tasks.filter((val) => val.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((val) =>
        val.id === id ? { ...val, reminder: !val.reminder } : val
      )
    );
  };

  const addTask = async(obj) => {
    const res = await fetch("http://localhost:5000/tasks",{method : 'POST',headers:{
      'Content-type':'application/json'
    },body:JSON.stringify(obj)})
    const data = await res.json()
  setTasks([...tasks, data]);
  };

  return (
    <div>
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? " " : "Nothing Here"}
      {tasks.map((item) => (
        <Task
          key={item.id}
          task={item}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          onAdd={addTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
