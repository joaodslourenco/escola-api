const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();
const app = express();

routes(app);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
