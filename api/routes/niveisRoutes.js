const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();
router.get("/niveis", NivelController.getAllSchoolLevels);
router.get("/niveis/:id", NivelController.getSchoolLevelById);
router.post("/niveis", NivelController.addSchoolLevel);
router.put("/niveis/:id", NivelController.updateSchoolLevel);
router.delete("/niveis/:id", NivelController.deleteSchoolLevel);
module.exports = router;
