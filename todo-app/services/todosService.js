import * as todoRepo from "../repositories/todoRepo.js";
import * as userRepo from "../repositories/userRepo.js";

export async function list(query) {
  return await todoRepo.list(query); //query'ye göre todoRepodan listeleme yapar
}

export async function getById(id) {
  const todo = await todoRepo.getById(id); //id'ye göre todoRepo getirir bu da bağlantı kuruyor
  if (!todo) throw { status: 404, message: "Todo not found" }; //todo yoksa hata verir
  return todo;
}

export async function create(data) {
  const user = await userRepo.getById(data.user_id || data.userId); //dbden userId'ye göre user getirir, ya da user_id'ye göre
  if (!user) throw { status: 400, message: "Invalid userId" };
  return await todoRepo.create(data); //data ile todo oluşturur
}

export async function update(id, data) {
  return await todoRepo.update(id, data); //id'ye göre todo'yu data ile günceller
}

export async function patch(id, data) {
  return await todoRepo.patch(id, data); //id'ye göre todoyu yarı günceller
}

export async function remove(id) {
  return await todoRepo.remove(id); //id'ye göre todoyu siler, repoda asıl silme yapar
}

export async function completeTodo(id) {
  const todo = await todoRepo.getById(id); //idye göre todo getirilir
  if (!todo) throw { status: 404, message: "Todo not found" };
  if (todo.completed) throw { status: 400, message: "Todo is already completed" }; //todo yapıldıysa çoktan zaten yapıldı uyarısı
  
  
  const updatedTodo = await todoRepo.patch(id, { completed: true }); //yapılmadıysa patchlenir
  return updatedTodo; //güncellenen döner
}