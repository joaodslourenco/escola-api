const database = require("../models");

class TurmaController {
  static async getAllSchoolClasses(req, res) {
    try {
      const allSchoolClasses = await database.Turmas.findAll();
      return res.status(200).json(allSchoolClasses);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getSchoolClassById(req, res) {
    try {
      const { id } = req.params;
      const schoolClass = await database.Turmas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(schoolClass);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async addSchoolClass(req, res) {
    const newClass = req.body;
    try {
      const newClassAdded = await database.Turmas.create(newClass);
      return res.status(201).json(newClassAdded);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateSchoolClass(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.Turmas.update(newInfo, {
        where: {
          id: Number(id),
        },
      });
      const updatedSchoolClass = await database.Turmas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(updatedSchoolClass);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteSchoolClass(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({
        where: {
          id: Number(id),
        },
      });
      return res
        .status(200)
        .json({ message: `Turma ID ${id} deletada com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;
