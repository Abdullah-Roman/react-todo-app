import React, { useState } from "react";

const EditForm = ({ updateTodo, todo }) => {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    updateTodo(input, todo.id);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Update Todos Here!"
      />
      <button className="submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default EditForm;
