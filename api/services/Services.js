const database = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRecords() {
    return database[this.modelName].findAll();
  }
}

module.exports = Services;
