const database = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRecords(where = {}) {
    return database[this.modelName].findAll();
  }

  async getOneRecord(where = {}) {
    return database[this.modelName].findOne({ where: { ...where } });
  }

  async createRecord(data) {
    return database[this.modelName].create(data);
  }

  async updateRecord(updatedData, where, transacao = {}) {
    return database[this.modelName].update(
      updatedData,
      { where: { ...where } },
      transacao,
    );
  }

  async updateRecords(updatedData, where, transacao = {}) {
    return database[this.modelName].update(
      updatedData,
      { where: { ...where } },
      transacao,
    );
  }

  async deleteRecord(id) {
    return database[this.modelName].destroy({ where: { id: id } });
  }

  async restoreRecord(id) {
    return database[this.modelName].restore({ where: { id: id } });
  }

  async verifyDeletedRecord(id) {
    return database[this.modelName].findOne({
      paranoid: false,
      where: { id: Number(id) },
    });
  }

  async findAndCountRecords(where = {}, aggregators) {
    return database[this.modelName].findAndCountAll({
      where: { ...where },
      ...aggregators,
    });
  }
}

module.exports = Services;
