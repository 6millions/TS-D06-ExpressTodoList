import { Request, Response } from "express";
import { Todo } from "../models/todo";

export class TodoController {

    // Array to store todos
    private todoList: Todo[] = [];

    constructor() {
        // initial 
        this.todoList = [];

        // bind method to the class
        this.getTodos = this.getTodos.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);


    }

    // Method to get all todos
    public getTodos = (req: Request, res: Response): void => {
        res.json(this.todoList);
    }

    // Method to push a new todo
    public addNewTodo = (req: Request, res: Response) => {
        const { title, description, dueDate } = req.body;
        const todo = new Todo(title, description, new Date(dueDate), false);

        this.todoList.push(todo);

        res.json(this.todoList);
    }

}