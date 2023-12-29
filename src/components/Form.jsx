import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Your Todos Here!"
      />
      <button className="submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
