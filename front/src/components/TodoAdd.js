import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    addTodo({ text }).then(() => {
      setText("");
    });
  };

  return (
    <form onSubmit={submitHandler}>
      내용
      <div>
        <textarea
          cols="50"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
