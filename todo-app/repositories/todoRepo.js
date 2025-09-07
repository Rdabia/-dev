
import { AppDataSource } from "../db/data-source.js";
import { Todo } from "../schema/Todo.js";

export async function list({ completed, q } = {}) {
  const todoRepo = AppDataSource.getRepository(Todo);
  
  // tüm todoları al
  let todos = await todoRepo.find();
  
  // completed filtresi
  if (completed !== undefined) {
    const isCompleted = completed === "true"; //string olarak aldığımız completed değerini booleana çeviriyoruz
    todos = todos.filter(todo => todo.completed === isCompleted); //tek tek arrayın içindeki todo objelerini dolaşıyoruz ve completed değeri isCompleted ile aynı olanları filtreliyoruz
  }
  
  // arama filtresi
  if (q) {
    const searchTerm = q.toLowerCase(); //küçük harfe çeviriyoruz ki büyük küçük harf duyarlılığı olmasın
    todos = todos.filter(todo => 
      todo.title.toLowerCase().includes(searchTerm) ||
      todo.description.toLowerCase().includes(searchTerm) //burada da title ve description içinde arama kelimesi var mı diye bakıyoruz
    );
  }
  
  return todos; //filtrelenmiş todoları döndürüyoruz
}

export async function getById(id) {
  const todoRepo = AppDataSource.getRepository(Todo); //todoların repoyu al
  return await todoRepo.findOneBy({ id }); //id'ye göre todo bul ve döndür
}

export async function listByUserId(userId) {
  const todoRepo = AppDataSource.getRepository(Todo); //todo repoyu al
  return await todoRepo.find({ where: { user_id: userId } }); //userId'ye göre todoları bul ve döndür
}

export async function create({ title, description, user_id }) {
  const todoRepo = AppDataSource.getRepository(Todo);
  
 
  const todo = new Todo(); //yeni bir todo nesnesi oluşturuyoruz
  todo.title = title; 
  todo.description = description;
  todo.completed = false;
  todo.user_id = user_id;
  
  
  return await todoRepo.save(todo); //todo nesnesini veritabanına kaydediyoruz ve kaydedilen nesneyi döndürüyoruz
}

export async function update(id, { title, description, completed, user_id }) {
  const todoRepo = AppDataSource.getRepository(Todo);
  
  const todo = await todoRepo.findOneBy({ id });
  if (!todo) {
    throw { status: 404, message: "Todo not found" };
  } //todo bulunamazsa 404 hatası fırlatıyoruz
  
  // undefined olmayan alanları güncelle
  if (title !== undefined) todo.title = title; 
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;
  if (user_id !== undefined) todo.user_id = user_id;
  
  return await todoRepo.save(todo); //güncellenmiş todo'yu kaydediyoruz ve döndürüyoruz
}

export async function patch(id, data) {
  const todoRepo = AppDataSource.getRepository(Todo);
 
  const todo = await todoRepo.findOneBy({ id }); //id'ye göre todo'yu bul
  if (!todo) {
    throw { status: 404, message: "Todo not found" };
  } //todo bulunamazsa hata

  Object.assign(todo, data); //data içindeki alanlarla todo nesnesini güncelle
  
  return await todoRepo.save(todo); //güncellenmiş todo'yu kaydet ve döndür
}

export async function remove(id) {
  const todoRepo = AppDataSource.getRepository(Todo);

  const todo = await todoRepo.findOneBy({ id }); //id'ye göre todo'yu bul
  if (!todo) {
    throw { status: 404, message: "Todo not found" };
  }
  
  await todoRepo.remove(todo); //todo'yu veritabanından sil
}
