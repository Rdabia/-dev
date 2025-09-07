import { Router } from "express";
import {
  listUsers,
  getUserTodos,
  createUser
} from "../controllers/usersController.js";
import { validateUserCreate } from "../middleware/validation/userValidation.js";
import { z } from "zod";

function validateUserIdParam(req, res, next) {
  const schema = z.object({ id: z.string().uuid("Invalid user id format") }); //şemayı girdik
  const result = schema.safeParse(req.params); //şemayla karşılaştırma
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors.map(e => ({ path: e.path[0], message: e.message })) });
  }//hata ise 400
  next(); //sonraki
}

const router = Router();

router.post("/", validateUserCreate, createUser);
router.get("/", listUsers);
router.get("/:id/todos", validateUserIdParam, getUserTodos);
//kontroller yapılıyor yazılan fonksiyonlarla, url içindeki user verileri doğru mu
export default router;
