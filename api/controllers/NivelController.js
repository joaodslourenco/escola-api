const Services = require("../services/Services");
const niveisServices = new Services("Niveis");

class NivelController {
  static async getAllSchoolLevels(req, res) {
    try {
      const allSchoolLevels = await niveisServices.getAllRecords();
      return res.status(200).json(allSchoolLevels);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getSchoolLevelById(req, res) {
    try {
      const { id } = req.params;
      const schoolLevel = await niveisServices.getOneRecord({ id });
      return res.status(200).json(schoolLevel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async addSchoolLevel(req, res) {
    const newSchoolLevel = req.body;
    try {
      const newSchoolLevelAdded = await niveisServices.createRecord(
        newSchoolLevel,
      );
      return res.status(201).json(newSchoolLevelAdded);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateSchoolLevel(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await niveisServices.updateRecord(newInfo, id);
      return res
        .status(200)
        .json({ message: `Nível ID ${id} atualizado com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteSchoolLevel(req, res) {
    const { id } = req.params;
    try {
      await niveisServices.deleteRecord(id);
      return res
        .status(200)
        .json({ message: `Nível ID ${id} deletada com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restoreSchoolLevel(req, res) {
    const { id } = req.params;
    try {
      await niveisServices.restoreRecord(id);
      return res
        .status(200)
        .json({ message: `ID ${id} restaurado com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
