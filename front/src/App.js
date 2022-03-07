import React from "react"
import TodoList from "./components/TodoList"
import TodoAdd from "./components/TodoAdd"
import Alert from "./components/Alert"

import useTodo from "./hook/useTodo"

function App() {
  const { todos, addTodo, deleteTodo, updateTodo, errors, clearError } =
    useTodo()

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <Alert errors={errors} clearError={clearError} />
      <TodoAdd addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteHandler={deleteTodo}
        updateHandler={updateTodo}
      />
    </div>
  )
}

export default App
