import * as userRepo from "../repositories/userRepo.js";
import * as todoRepo from "../repositories/todoRepo.js";
import bcrypt from "bcrypt"; //passwordu hashlemek için

export async function create(data) {
  const { username, email, password } = data;
  const password_hash = await bcrypt.hash(password, 10); //bcrypt ile passwordu hashliyoruz
  return await userRepo.create({ username, email, password_hash }); //userRepodan create fonksiyonunu çağırıyoruz, hashli passwordle yeni user oluşturuyoruz
}

export async function list() {
  return await userRepo.list(); //listeleme
}

export async function getUserTodos(userId) {
  const user = await userRepo.getById(userId); //getbyid ile useri bulduk
  if (!user) throw { status: 404, message: "User not found" }; //yoksa hata
  return await todoRepo.listByUserId(userId); //user varsa o userın todolarını listele
}
 /* kısaca servis katmanları proje temiz olsun diye varlar, repo sadece db ile ilgileniyor, servis ise iş mantığını içeriyor*/