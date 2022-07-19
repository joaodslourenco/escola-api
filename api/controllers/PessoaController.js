const { PessoasServices } = require("../services");
const pessoasServices = new PessoasServices();
const database = require("../models");
const pessoas = require("../models/pessoas");

class PessoaController {
  static async getAllActivePeople(req, res) {
    try {
      const allActivePeople = await pessoasServices.getActiveRecords();
      return res.status(200).json(allActivePeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllPeople(req, res) {
    try {
      const allPeople = await pessoasServices.getAllRecords();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getPersonById(req, res) {
    try {
      const { id } = req.params;
      const person = await pessoasServices.getOneRecord({ id });
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async addPerson(req, res) {
    const newPerson = req.body;
    try {
      const newPersonAdded = await pessoasServices.createRecord(newPerson);
      return res.status(201).json(newPersonAdded);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await pessoasServices.updateRecord(newInfo, id);
      const updatedPerson = await pessoasServices.getOneRecord({ id });
      return res.status(200).json(updatedPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await pessoasServices.deleteRecord(id);
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
      await pessoasServices.restoreRecord(Number(id));
      return res
        .status(200)
        .json({ message: `ID ${id} restaurado com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getRegistrations(req, res) {
    const { estudanteId } = req.params;

    try {
      const registrations = await pessoasServices.getRegistrationsByPerson({
        id: Number(estudanteId),
      });
      return res.status(200).json(registrations);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cancelPerson(req, res) {
    const { estudanteId } = req.params;

    try {
      await pessoasServices.cancelPersonAndRegistration(Number(estudanteId));

      return res.status(200).json({
        message: `Matrículas referentes ao estudante ID ${estudanteId} canceladas.`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
