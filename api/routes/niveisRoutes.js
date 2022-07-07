const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();
router
  .get("/niveis", NivelController.getAllSchoolLevels)
  .get("/niveis/:id", NivelController.getSchoolLevelById)
  .post("/niveis", NivelController.addSchoolLevel)
  .put("/niveis/:id", NivelController.updateSchoolLevel)
  .delete("/niveis/:id", NivelController.deleteSchoolLevel);
module.exports = router;
