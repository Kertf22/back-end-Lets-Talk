import { createConnection } from "typeorm";

const connection = createConnection();

connection.then(() => {})
.catch((err) => {
  console.log('Não foi possível conectar à base de dados:', err);
});