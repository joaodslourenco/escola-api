const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.getAllActivePeople);
router.get("/pessoas/todos", PessoaController.getAllPeople);
router.get("/pessoas/:id", PessoaController.getPersonById);
router.post("/pessoas", PessoaController.addPerson);
router.put("/pessoas/:id", PessoaController.updatePerson);
router.delete("/pessoas/:id", PessoaController.deletePerson);
router.post("/pessoas/:id/restaura", PessoaController.restorePerson);

router.get(
  "/pessoas/:estudanteId/matricula",
  PessoaController.getRegistrations,
);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.getRegistrationById,
);
router.post(
  "/pessoas/:estudanteId/matricula",
  PessoaController.addRegistration,
);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.updateRegistration,
);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.deleteRegistration,
);

module.exports = router;
