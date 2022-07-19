const Services = require("./Services");
const database = require("../models");

class PessoasServices extends Services {
  constructor() {
    super("Pessoas");
    this.matriculas = new Services("Matriculas");
  }
  //métodos específicos

  async getActiveRecords(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } });
  }

  async getAllRecords(where = {}) {
    return database[this.modelName]
      .scope("todos")
      .findAll({ where: { ...where } });
  }

  async cancelPersonAndRegistration(estudanteId) {
    return database.sequelize.transaction(async (transacao) => {
      await super.updateRecord({ ativo: false }, estudanteId, {
        transaction: transacao,
      });
      await this.matriculas.updateRecord(
        { status: "cancelado" },
        { estudante_id: estudanteId },
        {
          transaction: transacao,
        },
      );
    });
  }

  async getRegistrationsByPerson(where = {}) {
    const registrations = await database[this.modelName].findOne({
      where: { ...where },
    });
    return registrations.getRegistratedClasses();
  }
}

module.exports = PessoasServices;
