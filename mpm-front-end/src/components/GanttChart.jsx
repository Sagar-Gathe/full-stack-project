import React, { useEffect, useRef } from 'react';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'; 
import gantt from 'dhtmlx-gantt'; 
import TaskService from '../services/TaskService'; // Assuming you have TaskService here

const GanttChart = ({ tasks, onTasksUpdated }) => {
  const ganttContainer = useRef(null);

  useEffect(() => {
    gantt.init(ganttContainer.current);

    // Function to parse task data for the Gantt chart
    const parseTaskData = () => {
      const taskData = {
        data: Array.isArray(tasks) && tasks.length > 0 ? tasks.map(task => ({
          id: task.id,
          text: task.name,
          start_date: new Date(task.startDate).toLocaleDateString('en-GB'),
          end_date: new Date(task.endDate).toLocaleDateString('en-GB'),
          progress: task.progress || 0
        })) : [], 
        links: [] 
      };
      gantt.parse(taskData);
    };

    // Parse initial tasks
    parseTaskData();

    // Task update event handler (Save)
    gantt.attachEvent("onAfterTaskUpdate", async (id, task) => {
      const updatedTask = {
        name: task.text,
        startDate: new Date(task.start_date).toISOString().split('T')[0], // Format to YYYY-MM-DD
        endDate: new Date(task.end_date).toISOString().split('T')[0],
        progress: task.progress
      };
      try {
        // Update task in backend
        await TaskService.updateTask(id, updatedTask);
        console.log("Task updated successfully:", updatedTask);

        // Fetch updated tasks and call onTasksUpdated to refresh frontend
        const updatedTasks = await TaskService.getTasks();
        onTasksUpdated(updatedTasks); // Update frontend tasks
      } catch (error) {
        console.error("Error updating task:", error);
      }
    });

    // Task delete event handler
    gantt.attachEvent("onAfterTaskDelete", async (id) => {
      try {
        // Delete task from backend
        await TaskService.deleteTask(id);
        console.log("Task deleted successfully:", id);

        // Fetch updated tasks and call onTasksUpdated to refresh frontend
        const updatedTasks = await TaskService.getTasks();
        onTasksUpdated(updatedTasks); // Update frontend tasks
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    });

    // Clean up Gantt chart when component is unmounted
    return () => {
      gantt.clearAll();
    };
  }, [tasks, onTasksUpdated]);

  return (
    <div style={{ width: '100%', height: '500px' }} ref={ganttContainer}></div>
  );
};

export default GanttChart;