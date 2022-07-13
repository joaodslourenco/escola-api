const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = Router();
router.get("/turmas", TurmaController.getAllSchoolClasses);
router.get("/turmas/:id", TurmaController.getSchoolClassById);
router.post("/turmas", TurmaController.addSchoolClass);
router.put("/turmas/:id", TurmaController.updateSchoolClass);
router.delete("/turmas/:id", TurmaController.deleteSchoolClass);
router.post("/turmas/:id/restaura", TurmaController.restoreSchoolClass);

module.exports = router;
