import React, { useEffect, useState } from "react";
import TaskService from "../services/TaskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  console.log("--------> taskstasks--->  ",tasks)
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        console.log("Fetching tasks...");
        const data = await TaskService.getTasks();
        console.log("data--->",data)
        console.log("Data received:", data);
        if (data) {
          setTasks(data);
        } else {
          throw new Error("No data returned from the API");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching tasks: ", error);
      }
    };
  
    fetchTasks();
  }, []);

  return (
    <div>
      {/* <h1>Task List</h1> */}
      {error && <p>Error: {error}</p>}
      <ul>
        {/* {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default TaskList;
