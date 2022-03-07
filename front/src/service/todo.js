import axios from 'axios';

const addTodo = async todo => {
  const response = await axios.post(process.env.REACT_APP_API, todo);
  return response.data;
};

const updateTodo = async todo => {
  const response = await axios.put(
    `${process.env.REACT_APP_API}/${todo.id}`,
    todo
  );
  return response.data;
};

const deleteTodo = async id => {
  await axios.delete(`${process.env.REACT_APP_API}/${id}`);
  return id;
};

const getTodos = async () => {
  const response = await axios.get(process.env.REACT_APP_API);
  return response.data;
};

export default {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodos,
};
