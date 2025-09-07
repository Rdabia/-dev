import { AppDataSource } from "./data-source.js";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

  //bu dosya datasourceun initialize edilip edilmediğini kolay kontrol edebilmemiz için