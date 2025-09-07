
import { AppDataSource } from "../db/data-source.js";
import { User } from "../schema/User.js";

export async function create({ username, email, password_hash }) {
  const userRepo = AppDataSource.getRepository(User);
  
  const user = new User(); // yeni kullanıcı nesnesi
  user.username = username;
  user.email = email;
  user.password_hash = password_hash;

  const savedUser = await userRepo.save(user); // kullanıcıyı veritabanına kaydet

  const { password_hash: _, ...safeUser } = savedUser; // password_hash'ı hariç tut
  return safeUser; // password_hash olmadan kullanıcıyı döndür
}

export async function list() {
  const userRepo = AppDataSource.getRepository(User);
  
  const users = await userRepo.find(); // tüm kullanıcıları al
  
  return users.map(({ password_hash, ...user }) => user); // her kullanıcıdan password_hash'ı hariç tutarak döndür
}

export async function getById(id) {
  const userRepo = AppDataSource.getRepository(User);
  
  const user = await userRepo.findOneBy({ id }); // id'ye göre kullanıcıyı bul
  if (!user) {
    return null; // kullanıcı bulunamazsa null döndür, kontrollerde halledilecek
  }

  const { password_hash: _, ...safeUser } = user; // password_hash'ı hariç tut
  return safeUser; // password_hash olmadan kullanıcıyı döndür
}
