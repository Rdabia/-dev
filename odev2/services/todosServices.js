import todos from '../db/todo.js';
import { v4 as uuidv4 } from 'uuid';

function getAllTodos() {
    return todos;
}

function getTodoById(id) {
    return todos.find(t => t.id === id);
}

function createTodo({ title, description, userId, completed }) {
    const newTodo = { id: uuidv4(), title, description, completed: completed || false, userId };
    todos.push(newTodo);
    return newTodo;
}

function updateTodo(id, { title, description, completed }) {
    const todo = getTodoById(id);
    if (!todo) return null;
    todo.title = title;
    todo.description = description;
    todo.completed = completed;
    return todo;
}

function patchTodo(id, fields) {
    const todo = getTodoById(id);
    if (!todo) return null;
    if (fields.title !== undefined) todo.title = fields.title;
    if (fields.description !== undefined) todo.description = fields.description;
    if (fields.completed !== undefined) todo.completed = fields.completed;
    return todo;
}

function deleteTodo(id) {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return false;
    todos.splice(index, 1);
    return true;
}

export { getAllTodos, getTodoById, createTodo, updateTodo, patchTodo, deleteTodo };
