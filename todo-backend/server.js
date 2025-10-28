

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the To-Do API",
});
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port  http://localhost:${PORT}`));
