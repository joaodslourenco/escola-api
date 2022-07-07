const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.getAllPeople);
router.get("/pessoas/:id", PessoaController.getPersonById);
router.post("/pessoas", PessoaController.addPerson);
router.put("/pessoas/:id", PessoaController.updatePerson);
router.delete("/pessoas/:id", PessoaController.deletePerson);

module.exports = router;
