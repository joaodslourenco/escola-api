const express = require("express");
const pessoasRoutes = require("./pessoasRoutes");

module.exports = (app) => {
  app.use(express.json(), pessoasRoutes);
  app.get("/", (req, res) => {
    res.status(200).send("Olá");
  });
};
