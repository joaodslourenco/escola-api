const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  return res.status(200).send({ message: "Bem vindo!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
