const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
dotenv.config();

const port = process.env.PORT || 3333;
const app = express();

routes(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
