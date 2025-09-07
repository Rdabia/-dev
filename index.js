import app from './app.js';
import { AppDataSource } from './db/data-source.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5432;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });