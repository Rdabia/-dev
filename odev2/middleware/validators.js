// middleware/validators.js

export function validateUserCreate(req, res, next) {
    const { username, email, password } = req.body;
    if (!username || !email || !password || !email.includes('@')) {
        return res.status(400).json({ message: "Doğrulama hatası" });
    }
    next();
}

export function validateTodoCreate(req, res, next) {
    const { title, description, userId } = req.body;
    if (!title || !description || !userId) {
        return res.status(400).json({ message: "Doğrulama hatası" });
    }
    next();
}

export function validateTodoUpdate(req, res, next) {
    const { title, description, completed } = req.body;
    if (req.method === 'PUT' && (title === undefined || description === undefined || completed === undefined)) {
        return res.status(400).json({ message: "Doğrulama hatası" });
    }
    if (req.method === 'PATCH' && title === undefined && description === undefined && completed === undefined) {
        return res.status(400).json({ message: "Doğrulama hatası" });
    }
    next();
}
