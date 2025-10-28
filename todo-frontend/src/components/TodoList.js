import React from "react";

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  if (todos.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className={todo.completed ? "completed" : ""}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <div>
            <button onClick={() => onToggleComplete(todo)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => onDelete(todo._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
