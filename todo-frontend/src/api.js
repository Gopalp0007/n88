import axios from "axios";
console.log("API baseURL:", process.env.REACT_APP_API_URL);


const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getTodos = async () => {
  const res = await API.get("/");
  return res.data.data;
};

export const createTodo = (data) => API.post("/", data);
export const updateTodo = (id, data) => API.put(`/${id}`, data);
export const deleteTodo = (id) => API.delete(`/${id}`);





