import express from 'express';
import { getAllUsers, createUser, getUserById } from '../services/usersServices.js';
import { validateUserCreate } from '../middleware/validators.js';

const router = express.Router();
router.get('/', (req, res) => res.json(getAllUsers()));

router.post('/', validateUserCreate, (req, res) => {
    const user = createUser(req.body);
    res.status(201).json(user);
});

router.get('/:id', (req, res) => {
    const user = getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ id: user.id, username: user.username, email: user.email });
});

export default router;
