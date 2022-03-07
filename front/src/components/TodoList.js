import React from "react";

function TodoItem({ todo, deleteHandler, updateHandler }) {
  return (
    <div
      style={{
        border: "1px solid",
        width: 400,
        padding: 8,
        marginBottom: 4,
      }}
    >
      <input
        type="checkbox"
        value={todo.done}
        onChange={(e) => updateHandler({ ...todo, done: e.target.checked })}
      />
      {todo.done ? (
        <span style={{ textDecoration: "line-through" }}>{todo.text} </span>
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        <button onClick={() => deleteHandler(todo.id)}>삭제</button>
      </div>
    </div>
  );
}

function TodoList({ todos, deleteHandler, updateHandler }) {
  console.log("render => TodoList");
  const list = todos.map((todo) => {
    return (
      <li key={todo.id}>
        <TodoItem
          todo={todo}
          deleteHandler={deleteHandler}
          updateHandler={updateHandler}
        />
      </li>
    );
  });

  return <ul>{list}</ul>;
}

export default TodoList;
