const database = require("../models");

class PessoaController {
  static async getAllPeople(req, res) {
    try {
      const allPeople = await database.Pessoas.findAll();
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
}

module.exports = PessoaController;
