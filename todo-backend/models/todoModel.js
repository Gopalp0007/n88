
// models/todomodel.js
const mongoose = require("mongoose");
// create a schema
const Schema = mongoose.Schema;
// define the schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{ timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);
