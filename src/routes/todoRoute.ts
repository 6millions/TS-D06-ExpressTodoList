import express, { Request, Response } from "express";
import { TodoController } from "../controllers/todoController";

const routes = express.Router();

const todoController = new TodoController();

// Mapping routes for adding a new todo
routes.post('/add', todoController.addNewTodo);

// mapping routes for get all todos
routes.get('/', todoController.getTodos);


export default routes;