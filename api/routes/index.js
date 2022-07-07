const express = require("express");
const pessoasRoutes = require("./pessoasRoutes");
const turmasRoutes = require("./turmasRoutes");
const niveisRoutes = require("./niveisRoutes");

module.exports = (app) => {
  app.use(express.json(), pessoasRoutes, turmasRoutes, niveisRoutes);
  app.get("/", (req, res) => {
    res.status(200).send("Olá");
  });
};
