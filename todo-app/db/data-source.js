
import { DataSource } from "typeorm"; // typeormdan veritabanı için nesne türü
import { Todo } from "../schema/Todo.js"; // yazılı şemalardan veritabanı nesneleri
import { User } from "../schema/User.js";
import dotenv from "dotenv"; // .env dosyasında username, password gibi gizli bilgileri açabilmek için
dotenv.config();

export const AppDataSource = new DataSource({ // veritabanını oluşturduk
  type: "postgres", 
  url: process.env.DATABASE_URL, // her yerde görünmesin diye envye koymuştuk, bu şekilde kullanabiliriz
  synchronize: false, // migration için false
  logging: true, // dbde yaptığımız işlemlerin konsolda dönmesi için
  entities: [User, Todo], //entity listesi
  migrations: ["./migrations/*.js"], 
  migrationsTableName: "migrations_history",
  ssl: {
    rejectUnauthorized: false, //bunu eklemezsek veritabanına bağlanamıyoruz
  },
});

