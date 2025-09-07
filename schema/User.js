import { EntitySchema } from 'typeorm';

export const User = new EntitySchema({
  name: "User",
  tableName: "users", 
  columns: {
    id: {
      primary: true, //birincil anahtar
      type: "uuid",
      generated: "uuid"
    },
    username: {
      type: "varchar",
      length: 50, //uzunluk sınırı 
      unique: true //her kullanıcı adı tek olmalı
    },
    email: {
      type: "varchar", 
      length: 100,
      unique: true
    },
    password_hash: {
      type: "varchar",
      length: 255 //hashlenmiş şifre
    },
    created_at: {
      type: "timestamptz",
      createDate: true
    }
  },//user tablosunun genel özellikleri
  relations: {
    todos: {
      type: "one-to-many",
      target: "Todo",
      inverseSide: "user"
    }
  }//user ile todo arasındaki ilişkiyi kurmak için,
});
