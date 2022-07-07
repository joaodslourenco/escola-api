const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = Router();
router
  .get("/turmas", TurmaController.getAllSchoolClasses)
  .get("/turmas/:id", TurmaController.getSchoolClassById)
  .post("/turmas", TurmaController.addSchoolClass)
  .put("/turmas/:id", TurmaController.updateSchoolClass)
  .delete("/turmas/:id", TurmaController.deleteSchoolClass);

module.exports = router;
