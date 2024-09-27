import axios from 'axios';

const API_URL = 'https://api.example.com/tasks'; // Replace with your API endpoint

class TaskService {
  static getTasks() {
    return axios.get(API_URL);
  }

  static addTask(task) {
    return axios.post(API_URL, task);
  }

  static updateTask(task) {
    return axios.put(`${API_URL}/${task.id}`, task);
  }

  static deleteTask(taskId) {
    return axios.delete(`${API_URL}/${taskId}`);
  }
}

export default TaskService;
