import { injectable } from "tsyringe";
import Todo from "../models/Todo";
import BaseService from "./base.service";
import TodoRepository from "../repositories/todo.repository";

@injectable()
export default class TodoService extends BaseService<Todo> {
  constructor(todoRepository: TodoRepository) {
    super(todoRepository);
    delete this.delete;
  }
}
