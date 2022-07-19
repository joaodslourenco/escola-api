const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");
const MatriculaController = require("../controllers/MatriculaController");

const router = Router();

router.get("/pessoas", PessoaController.getAllPeople);
router.get("/pessoas/ativas", PessoaController.getAllActivePeople);
router.get("/pessoas/:id", PessoaController.getPersonById);
router.get(
  "/pessoas/matricula/:turmaId/confirmadas",
  MatriculaController.getRegistrationsByClass,
);
router.get("/pessoas/matricula/lotada", MatriculaController.getFullClasses);
router.get(
  "/pessoas/:estudanteId/matricula",
  PessoaController.getRegistrations,
);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  MatriculaController.getRegistrationById,
);

router.post("/pessoas", PessoaController.addPerson);
router.post(
  "/pessoas/:estudanteId/matricula",
  MatriculaController.addRegistration,
);
router.post("/pessoas/:id/restaura", PessoaController.restorePerson);
router.post("/pessoas/:estudanteId/cancela", PessoaController.cancelPerson);
router.post(
  "/pessoas/:estudanteId/matricula/:matriculaId/restaura",
  MatriculaController.restoreRegistration,
);

router.put("/pessoas/:id", PessoaController.updatePerson);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  MatriculaController.updateRegistration,
);

router.delete("/pessoas/:id", PessoaController.deletePerson);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  MatriculaController.deleteRegistration,
);

module.exports = router;
