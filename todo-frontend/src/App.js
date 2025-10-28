import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch todos safely
  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(Array.isArray(data) ? data : []); // ✅ ensure array
    } catch (error) {
      console.error("Error fetching todos:", error);
      setTodos([]); // fallback
    }
  };

  const handleAddTodo = async (todo) => {
    await createTodo(todo);
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleToggleComplete = async (todo) => {
    await updateTodo(todo._id, { completed: !todo.completed });
    fetchTodos();
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default App;
