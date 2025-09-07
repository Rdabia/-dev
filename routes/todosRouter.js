import { Router } from "express";
import {
  listTodos,
  getTodoById,
  createTodo,
  updateTodo,
  patchTodo,
  deleteTodo
} from "../controllers/todosController.js";
import { validateTodoCreate, validateTodoUpdate } from "../middleware/validation/todoValidation.js";
import { z } from "zod";

function validateTodoIdParam(req, res, next) {
  const schema = z.object({ id: z.string().uuid("Invalid todo id format") }); // /:id için gönderilen id geçerli mi kotnrol
  const result = schema.safeParse(req.params); //doğrulama
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors.map(e => ({ path: e.path[0], message: e.message })) });
  } //yanlışsa 400
  next(); //doğruysa next
}

function validateTodoQuery(req, res, next) { //get için gönderilen query parametreleri doğru tipte mi diye zod ile kontrol
  const schema = z.object({
    completed: z.string().optional().refine(val => val === undefined || val === "true" || val === "false", { message: "completed must be 'true' or 'false'" }),
    q: z.string().optional(), //string olmalı, opsiyonel
    page: z.string().optional().regex(/^\d+$/, "page must be a number"), //sadece rakam sınırı
    limit: z.string().optional().regex(/^\d+$/, "limit must be a number"),
    sort: z.enum(["created_at", "title", "completed"]).optional(), // sadece belli 
    order: z.enum(["asc", "desc", "ASC", "DESC"]).optional() //sıralama yönü
  }); //şemayı çizdik
  const result = schema.safeParse(req.query); //şemayla karşılaştırma
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors.map(e => ({ path: e.path[0], message: e.message })) });
  } //hata ise 400
  next(); //sonraki validasyon
}
import { completeTodo } from "../controllers/todosController.js";

const router = Router();

router.get("/", validateTodoQuery, listTodos);
router.get("/:id", validateTodoIdParam, getTodoById);
router.post("/", validateTodoCreate, createTodo);
router.put("/:id", validateTodoIdParam, validateTodoUpdate, updateTodo);
router.patch("/:id", validateTodoIdParam, validateTodoUpdate, patchTodo);
router.delete("/:id", validateTodoIdParam, deleteTodo);
router.patch("/:id/complete", validateTodoIdParam, completeTodo);
//her şeyi uyuyor mu diye kontrol ediyoruz, url içindeki idler, queryler doğru mu
export default router;
