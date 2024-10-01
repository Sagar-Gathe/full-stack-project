
import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import GanttChart from '../components/GanttChart';
import TaskService from '../services/TaskService';
console.log("TaskService-> ",TaskService)

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState(null); 


  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]); 
  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await TaskService.getTasks();
        console.log("-->response-->",response)
       
        if (response) {
          
          setTasks(response); 
        } else {
          console.warn("No tasks received");
          setTasks([]); 
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTasks([]); 
        setError(error.message); 
      }
    };

    fetchTasks();
  }, []);


  const handleSave = async (task) => {
    try {
      let newTask;
      if (editingTask) {
       
        await TaskService.updateTask(editingTask.id, task);
        newTask = task;  
      } else {
       
        newTask = await TaskService.addTask(task);
        setTasks((prevTasks) => [...prevTasks, newTask]); 
      }
  
      
      const updatedTasks = await TaskService.getTasks();
      setTasks(updatedTasks);
  
      setEditingTask(null); 
    } catch (error) {
      console.error("Error saving task:", error);
      setError(error.message);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm task={editingTask} onSave={handleSave} />
      <TaskList tasks={tasks}  onEdit={handleEdit} onDelete={handleDelete}/>
      <GanttChart tasks={tasks} /> 
    </div>
  );
};

export default TaskManager;
