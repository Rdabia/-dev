import { z } from "zod";

const userCreateSchema = z.object({
  username: z.string().min(1, "username is required"),
  email: z.string().email("invalid email format"),
  password: z.string().min(1, "password is required")
}); //yine şema sınırlamaları

export function validateUserCreate(req, res, next) {
  const result = userCreateSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      errors: result.error.errors.map(e => ({ path: e.path[0], message: e.message }))
    });
  }
  next(); //burada da usercreatein şemalarına uyduk mu diye kontrol
}
