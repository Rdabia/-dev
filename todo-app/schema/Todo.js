import { EntitySchema } from 'typeorm';

export const Todo = new EntitySchema({
  name: "Todo",
  tableName: "todos",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid"
    },
    title: {
      type: "varchar",
      length: 100
    },
    description: {
      type: "text",
      nullable: true
    },
    completed: {
      type: "boolean",
      default: false
    },
    created_at: {
      type: "timestamptz",
      createDate: true
    },
    updated_at: {
      type: "timestamptz",
      updateDate: true
    },
    user_id: {
      type: "uuid"
    }
  }, //todo tablosunun genel özellikleri
  relations: {
    user: {
      type: "many-to-one",//many to one ilişki kurmak için, 
      target: "User", 
      joinColumn: {
        name: "user_id" //todo tablosundaki user_id kolonunu kullanmak için
      },
      onDelete: "CASCADE" //user silinince todo da silinsin diye
    }
  }, 
  indices: [
    {
      name: "IDX_todo_completed",
      columns: ["completed"]
    },
    {
      name: "IDX_todo_created_at", 
      columns: ["created_at"]
    }
  ]
});//bu indisler de kolayca arama fltereleme yapabilmek için koyuldu
