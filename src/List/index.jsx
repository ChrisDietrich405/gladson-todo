import React from "react";

const List = ({ todos, handleUpdateTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name}{" "}
          <button onClick={() => handleUpdateTodo(todo.id)}>edit todo</button>
        </li>
      ))}
    </>
  );
};

export default List;
