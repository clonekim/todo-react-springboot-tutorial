import { useState, useEffect } from 'react';
import api from '../service/todo';

export default function useTodo() {
  const [todos, setTodos] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    console.log('getTodos');

    api
      .getTodos()
      .then(todos => {
        setTodos(todos);
        setErrors(null);
      })
      .catch(err => setErrors(err.response.data.errors));
  }, []);

  const addTodo = todo => {
    console.log('addTodo');

    return api
      .addTodo(todo)
      .then(addedTodo => {
        setTodos(todos.concat(addedTodo));
        setErrors(null);
      })
      .catch(err => setErrors(err.response.data.errors));
  };

  const updateTodo = todo => {
    console.log('updateTodo');

    return api
      .updateTodo(todo)
      .then(updatedTodo => {
        const list = todos.map(i => (i.id === todo.id ? updatedTodo : i));
        setTodos(list);
        setErrors(null);
      })
      .catch(err => setErrors(err.response.data.errors));
  };

  const deleteTodo = id => {
    console.log('deleteTodo');
    api
      .deleteTodo(id)
      .then(() => {
        const list = todos.filter(todo => todo.id !== id);
        setTodos(list);
        setErrors(null);
      })
      .catch(err => setErrors(err.response.data.errors));
  };

  const clearError = () => setErrors(null);

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    errors,
    clearError,
  };
}
