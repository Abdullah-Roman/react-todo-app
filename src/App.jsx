import React, { useState } from "react";
import Form from "./components/Form";
import ShowTodo from "./components/ShowTodo";
import DeleteAll from "./components/DeleteAll";
import EditForm from "./EditForm";

const App = () => {
  const [todo, setTodo] = useState([]);
  const addTodo = (input) => {
    const newTodo = [
      ...todo,
      {
        id: Math.random() * 100,
        task: input,
        completed: false,
        isEditing: false,
      },
    ];
    setTodo(newTodo);
  };

  const deleteTodo = (id) => {
    const newTodo = todo.filter((el) => id !== el.id);
    setTodo(newTodo);
  };

  const editTask = (id) => {
    setTodo(
      todo.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const updateTask = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTodo = (input, id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, task: input }
          : todo
      )
    );
  };

  return (
    <div className="wrapper">
      <h1>Get Things Done!</h1>
      <Form addTodo={addTodo} />
      {todo.map((el, index) =>
        el.isEditing ? (
          <EditForm key={index} updateTodo={updateTodo} todo={el} />
        ) : (
          <ShowTodo
            task={el}
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            editTask={editTask}
            updateTask={updateTask}
          />
        )
      )}
      <DeleteAll setTodo={setTodo} todo={todo} />
    </div>
  );
};

export default App;
