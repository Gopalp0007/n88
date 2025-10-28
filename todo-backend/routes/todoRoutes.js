

const express = require("express");
const router = express.Router();
const {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.post("/", createTodo);        // Create
router.get("/", getAllTodos);        // Read All
router.get("/:id", getTodoById);     // Read One
router.put("/:id", updateTodo);      // Update
router.delete("/:id", deleteTodo);   // Delete

module.exports = router;
