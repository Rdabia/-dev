import express from 'express';
import { getAllTodos, getTodoById, createTodo, updateTodo, patchTodo, deleteTodo } from '../services/todosServices.js';
import { validateTodoCreate, validateTodoUpdate } from '../middleware/validators.js';

const router = express.Router();

router.get('/', (req, res) => {
    let result = getAllTodos();
        if (req.query.q) {
            const q = req.query.q.toLowerCase();
            result = result.filter(todo => 
                todo.title.toLowerCase().includes(q) || 
                todo.description.toLowerCase().includes(q)
            );
        }
        res.json(result);
    
});

router.get('/:id', (req, res) => {
    const todo = getTodoById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
});

router.post('/', validateTodoCreate, (req, res) => {
    const todo = createTodo(req.body);
    res.status(201).json(todo);
});

router.put('/:id', validateTodoUpdate, (req, res) => {
    const todo = updateTodo(req.params.id, req.body);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
});

router.patch('/:id', validateTodoUpdate, (req, res) => {
    const todo = patchTodo(req.params.id, req.body);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
});

router.delete('/:id', (req, res) => {
    const success = deleteTodo(req.params.id);
    if (!success) return res.status(404).json({ message: "Todo not found" });
    res.status(204).send();
});
export default router;

