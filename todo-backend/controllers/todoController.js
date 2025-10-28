


const Todo = require("../models/todoModel");


exports.createTodo = async (req, res) => {
const { title, description } = req.body;
if(!title || Object.keys(req.body).length===0){
    return res.status(400).json({
        success:false,
         message: "Title is required"})
         }
const todo = await Todo.create({ title, description });
res.status(201).json({
    success:true,
        message: "Todo created successfully",
        data: todo
    });
}



exports.getAllTodos = async (req, res) => {
    const todos = await Todo.find();
    if(todos.length===0){
        return res.status(404).json({
            success:false,
             message: "No todos found"})
             }

    res.status(200).json({
        success:true,
         message: "Todos fetched successfully",
          data: todos
        });
}




exports.getTodoById = async (req, res) => {
    const {id} = req.params;
    const  todos = await Todo.findById(id);
    if(!todos){
        return res.status(404).json({
            success:false,
             message: `No todo found with id: ${id}`})
             }
             res.status(200).json({
                success:true,
                 message: "Todo fetched successfully",
                  data: todos
                });
}

exports.updateTodo = async (req, res) => {
    const {id} = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,  
    });
    if(!todo){
        return res.status(404).json({
            success:false,
             message: `No todo found with id: ${id}`})
             }
    res.status(200).json({
        success:true,
         message: "Todo updated successfully",
          data: todo
        });
}

exports.deleteTodo = async (req, res) => {
    const {id} = req.params;
    const todo = await Todo.findByIdAndDelete(id);  
    if(!todo){
        return res.status(404).json({
            success:false,
             message: `No todo found with id: ${id}`})
             }
    res.status(200).json({
        success:true,
         message: "Todo deleted successfully",
            data: todo
        });
}