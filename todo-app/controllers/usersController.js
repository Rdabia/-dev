import * as usersService from "../services/usersService.js";

export async function createUser(req, res, next) {
  try {
    const user = await usersService.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

export async function listUsers(req, res, next) {
  try {
    const users = await usersService.list();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function getUserTodos(req, res, next) {
  try {
    const todos = await usersService.getUserTodos(req.params.id);
    res.json(todos);
  } catch (err) {
    next(err);
  }
}

//todo ile aynı şekilde
