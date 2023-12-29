import React from "react";

const DeleteAll = ({ todo, setTodo }) => {
  const deleteAll = () => {
    setTodo([]);
  };
  return (
    <div>
      {!!todo.length && (
        <center>
          <button className="submit" onClick={deleteAll}>
            Delete All
          </button>
        </center>
      )}
    </div>
  );
};

export default DeleteAll;
