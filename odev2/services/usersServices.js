import users from '../db/user.js';
import { v4 as uuidv4 } from 'uuid';

function getAllUsers() {
    return users.map(u => ({ id: u.id, username: u.username, email: u.email }));
}

function createUser({ username, email, password }) {
    const newUser = { id: uuidv4(), username, email, password };
    users.push(newUser);
    return { id: newUser.id, username: newUser.username, email: newUser.email };
}

function getUserById(id) {
    return users.find(u => u.id === id);
}

export { getAllUsers, createUser, getUserById };
