class TurmaController {
  static async getAllSchoolLevels(req, res) {
    try {
      const allSchoolLevels = await database.Niveis.findAll();
      return res.status(200).json(allSchoolLevels);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getSchoolLevelById(req, res) {
    try {
      const { id } = req.params;
      const schoolLevel = await database.Niveis.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(schoolLevel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async addSchoolLevel(req, res) {
    const newSchoolLevel = req.body;
    try {
      const newSchoolLevelAdded = await database.Niveis.create(newSchoolLevel);
      return res.status(201).json(newSchoolLevelAdded);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateSchoolLevel(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.Niveis.update(newInfo, {
        where: {
          id: Number(id),
        },
      });
      const updatedSchoolLevel = await database.Niveis.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(updatedSchoolLevel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteSchoolLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({
        where: {
          id: Number(id),
        },
      });
      return res
        .status(200)
        .json({ message: `Nível ID ${id} deletada com sucesso.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
