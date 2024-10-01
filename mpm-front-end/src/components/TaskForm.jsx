import React , {useState} from 'react'
import TaskService from '../services/TaskService';

const TaskForm = ({task , onSave}) => {

  console.log("task -->>> ",task);
  console.log("onsave --->>>> ",onSave)

    const [name, setName] = useState(task ? task.name : '');
    const [startDate, setStartDate] = useState(task ? task.startDate : '');
    const [endDate, setEndDate] = useState(task ? task.endDate : '');
    const [dependencies, setDependencies] = useState(task ? task.dependencies : '');

    console.log("dependency ---> ",dependencies)
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { name, startDate, endDate, dependencies };
        console.log("name--->",name)
        console.log("startDate--->",startDate)
        console.log("endDate--->",endDate)
        console.log("dependency--->",dependencies)
        if (task) {
          TaskService.updateTask(task.id, newTask).then(onSave);
        } else {
          TaskService.addTask(newTask).then(onSave);
        }
      };

    
  return (
    <form onSubmit={handleSubmit}>
    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Task Name" required />
    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
    <input value={dependencies} onChange={(e) => setDependencies(e.target.value)} placeholder="Dependency ID" />
    <button type="submit">Save</button>
  </form>
  )
}

export default TaskForm
