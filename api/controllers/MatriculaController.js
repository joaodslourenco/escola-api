const Sequelize = require("sequelize");
const { MatriculasServices } = require("../services");
const matriculasServices = new MatriculasServices();

class MatriculaController {
  static async getRegistrationById(req, res) {
    try {
      const { estudanteId, matriculaId } = req.params;
      const registration = await matriculasServices.getOneRecord({
        id: matriculaId,
        estudante_id: estudanteId,
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
      const newRegistrationAdded = await matriculasServices.createRecord(
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
      await matriculasServices.updateRecord(newInfo, {
        id: Number(matriculaId),
        estudante_id: Number(estudanteId),
      });
      return res.status(200).json({
        message: `Matrícula ID ${matriculaId} atualizada com sucesso!`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteRegistration(req, res) {
    const { matriculaId } = req.params;

    try {
      await matriculasServices.deleteRecord(Number(matriculaId));
      return res
        .status(200)
        .json({ message: `Matrícula ID ${matriculaId} deletada com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restoreRegistration(req, res) {
    const { matriculaId } = req.params;
    try {
      await matriculasServices.restoreRecord(Number(matriculaId));
      return res.status(200).json({ mensagem: `id ${matriculaId} restaurado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getRegistrationsByClass(req, res) {
    const { turmaId } = req.params;

    try {
      const allRegistrations = await matriculasServices.findAndCountRecords(
        {
          turma_id: Number(turmaId),
          status: "confirmado",
        },
        { limit: 20, order: [["estudante_id", "DESC"]] },
      );
      return res.status(200).json(allRegistrations);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getFullClasses(req, res) {
    const lotacaoTurma = 2;

    try {
      const fullClasses = await matriculasServices.findAndCountRecords(
        { status: "confirmado" },
        {
          attributes: ["turma_id"],
          group: ["turma_id"],
          having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`),
        },
      );
      return res.status(200).json(fullClasses);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = MatriculaController;
