import React from "react";
import { FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";

const ShowTodo = ({ index, task, deleteTodo, editTask, updateTask }) => {
  console.log(task);
  return (
    <div>
      <p className="task">
        <span>0{index + 1}</span>
        <span className={`${task.completed ? "done" : ""}`}>{task.task}</span>
        <span>
          {""} <FaCheck onClick={() => editTask(task.id)} />
          {""} <FaEdit onClick={() => updateTask(task.id)} />
          {""} <FaTrashAlt onClick={() => deleteTodo(task.id)} />
        </span>
      </p>
    </div>
  );
};

export default ShowTodo;
