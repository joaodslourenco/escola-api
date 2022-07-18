const database = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRecords() {
    return database[this.modelName].findAll();
  }

  async getOneRecord(id) {}

  async createRecord(data) {}

  async updateRecord(updatedData, id) {}

  async deleteRecord(id) {}
}

module.exports = Services;
