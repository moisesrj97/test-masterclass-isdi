import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export const getTasks = async (user) => {
  const { data } = await axios.get(baseURL + `tasks?user_id=${user.id}`);
  return data;
};

export const loginUser = async (user) => {
  const { data } = await axios.get(baseURL + `users?name=${user.name}`);
  const tasksData = await getTasks(data[0]);
  return { userData: data[0], tasksData };
};

export const addTask = async (task, user) => {
  console.log(task, user);
  const { data } = await axios.post(baseURL + `tasks`, {
    user_id: user.id,
    name: task,
  });

  return data;
};

export const deleteTask = async (taskId) => {
  const { data } = await axios.delete(baseURL + `tasks/${taskId}`);
  return data;
};
