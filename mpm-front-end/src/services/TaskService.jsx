import axios from "axios";

// const API_URL = "http://localhost:3001/api/tasks".trim();

const API_URL = "http://localhost:8080/api/tasks".trim();

const handleResponse = response => {
  if (response && response.data) {
    return response.data;
  }
  throw new Error("Invalid response structure");
};

const handleError = error => {
  console.error("API call error: ", error);
  throw error;
};

const TaskService = {

  getTasks: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("API call error: ", error);
      throw error;
    }
  },

  addTask: async (task) => {
    try {
      const response = await axios.post(API_URL, task, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error("API call error: ", error);
      throw error;
    }
  },


  updateTask: async (taskId, task) => {
    try {
      const response = await axios.put(`${API_URL}/${taskId}`, task, { headers: { 'Content-Type': 'application/json' } });
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  deleteTask: async (taskId) => {
    try {
      const response = await axios.delete(`${API_URL}/${taskId}`);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  }
};

export default TaskService;



