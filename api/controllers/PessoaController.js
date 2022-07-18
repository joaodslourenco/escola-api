const database = require("../models");
const Sequelize = require("sequelize");

class PessoaController {
  static async getAllActivePeople(req, res) {
    try {
      const allActivePeople = await database.Pessoas.findAll();
      return res.status(200).json(allActivePeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllPeople(req, res) {
    try {
      const allPeople = await database.Pessoas.scope("todos").findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getPersonById(req, res) {
    try {
      const { id } = req.params;
      const person = await database.Pessoas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async addPerson(req, res) {
    const newPerson = req.body;
    try {
      const newPersonAdded = await database.Pessoas.create(newPerson);
      return res.status(201).json(newPersonAdded);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.Pessoas.update(newInfo, {
        where: {
          id: Number(id),
        },
      });
      const updatedPerson = await database.Pessoas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(updatedPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({
        where: {
          id: Number(id),
        },
      });
      return res
        .status(200)
        .json({ message: `Pessoa ID ${id} deletada com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restorePerson(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.restore({
        where: {
          id: Number(id),
        },
      });
      return res
        .status(200)
        .json({ message: `ID ${id} restaurado com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getRegistrationById(req, res) {
    try {
      const { estudanteId, matriculaId } = req.params;
      const registration = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      return res.status(200).json(registration);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async addRegistration(req, res) {
    const { estudanteId } = req.params;
    const newRegistration = { ...req.body, estudante_id: Number(estudanteId) };

    try {
      const newRegistrationAdded = await database.Matriculas.create(
        newRegistration,
      );
      return res.status(201).json(newRegistrationAdded);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateRegistration(req, res) {
    const { estudanteId, matriculaId } = req.params;

    const newInfo = req.body;
    try {
      await database.Matriculas.update(newInfo, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      const updatedRegistration = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
        },
      });
      return res.status(200).json(updatedRegistration);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteRegistration(req, res) {
    const { matriculaId } = req.params;

    try {
      await database.Matriculas.destroy({
        where: {
          id: Number(matriculaId),
        },
      });
      return res
        .status(200)
        .json({ message: `Matrícula ID ${matriculaId} deletada com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getRegistrations(req, res) {
    const { estudanteId } = req.params;

    try {
      const person = await database.Pessoas.findOne({
        where: {
          id: Number(estudanteId),
        },
      });
      const registrations = await person.getRegisteredClasses();
      return res.status(200).json(registrations);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getRegistrationsByClass(req, res) {
    const { turmaId } = req.params;

    try {
      const allRegistrations = await database.Matriculas.findAndCountAll({
        where: {
          turma_id: Number(turmaId),
          status: "confirmado",
        },
        limit: 20,
        order: [["estudante_id", "DESC"]],
      });
      return res.status(200).json(allRegistrations);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getFullClasses(req, res) {
    const lotacaoTurma = 2;

    try {
      const fullClasses = await database.Matriculas.findAndCountAll({
        where: {
          status: "confirmado",
        },
        attributes: ["turma_id"],
        group: ["turma_id"],
        having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`),
      });
      return res.status(200).json(fullClasses);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cancelPerson(req, res) {
    const { estudanteId } = req.params;

    try {
      database.sequelize.transaction(async (transacao) => {
        await database.Pessoas.update(
          { ativo: false },
          { where: { id: Number(estudanteId) } },
          { transaction: transacao },
        );
        await database.Matriculas.update(
          { status: "cancelado" },
          { where: { estudante_id: Number(estudanteId) } },
          { transaction: transacao },
        );
        return res.status(200).json({
          message: `Matrículas referentes ao estudante ID ${estudanteId} canceladas.`,
        });
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
