import { z } from "zod"; //gelen verilerin doğruluğunu kontrol için

const todoCreateSchema = z.object({  
  title: z.string().min(1, "title is required"), //boş olmasın diye
  description: z.string().min(1, "description is required"), //nboş olmasın diye
  user_id: z.string().uuid("userId must be a valid uuid") //string ve geçerli uuid olsun diye 
});

export function validateTodoCreate(req, res, next) {
  const body = { ...req.body, user_id: req.body.user_id || req.body.userId }; //ne türlü gelirse gelsin kullanıcı idsini topluyoruz
  const result = todoCreateSchema.safeParse(body); //todocreateschemayı zod ile doğruluyor
  if (!result.success) {
    return res.status(400).json({
      errors: result.error.errors.map(e => ({ path: e.path[0], message: e.message })) //result.success false olursa döndürülen error
    });
  }
  next(); //bir sonraki validasyon
}

const todoUpdateSchema = z.object({ //update için validasyon
  title: z.string().min(1, "title is required"),
  description: z.string().min(1, "description is required"),
  completed: z.boolean(),
  user_id: z.string().uuid("userId must be a valid uuid")
});

const todoPatchSchema = z.object({ //patch için validasyon
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  completed: z.boolean().optional(), //olmasa da olur
  user_id: z.string().uuid("userId must be a valid uuid").optional()
}).refine(obj => Object.keys(obj).length > 0, {
  message: "At least one field (title, description, completed, userId) required for PATCH" //kendi açıklamış
});

export function validateTodoUpdate(req, res, next) {
  const method = req.method; //put veya patch mi
  const body = { ...req.body, user_id: req.body.user_id || req.body.userId }; //bodyi eşitleme
  let result;
  if (method === "PUT") {
    result = todoUpdateSchema.safeParse(body); //zod kontrolü, yaptığımız şemaya uyduk mu 
  } else if (method === "PATCH") {
    result = todoPatchSchema.safeParse(body); //aynı şekilde patch için şema kontrolü 
  }
  if (result && !result.success) {
    return res.status(400).json({
      errors: result.error.errors.map(e => ({ path: e.path[0], message: e.message }))
    });
  }
  next();
}

//amaç veri tiplerini değerlerini vs kontrol etmek, içerik tip doğru mu + detaylı error okuma