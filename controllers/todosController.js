import * as todosService from "../services/todosService.js";

export async function listTodos(req, res, next) {
  try {
    const todos = await todosService.list(req.query);
    res.json(todos);
  } catch (err) {
    next(err);
  }
}

export async function getTodoById(req, res, next) {
  try {
    const todo = await todosService.getById(req.params.id);
    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function createTodo(req, res, next) {
  try {
    const todo = await todosService.create(req.body);
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
}

export async function updateTodo(req, res, next) {
  try {
    const todo = await todosService.update(req.params.id, req.body);
    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function patchTodo(req, res, next) {
  try {
    const todo = await todosService.patch(req.params.id, req.body);
    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function deleteTodo(req, res, next) {
  try {
    await todosService.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

export async function completeTodo(req, res, next) {
  try {
    const todo = await todosService.completeTodo(req.params.id);
    res.json(todo);
  } catch (err) {
    next(err);
  }
}

//burada sadece kontroller var, servis katmanına yönlendirip hatayı next ile gönderiyoruz. sadece ara katman