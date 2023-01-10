const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
  .get('/pessoas', PessoaController.getAll)
  .get('/pessoas/:id', PessoaController.getById)
  .put('/pessoas/:id', PessoaController.updatePerson)
  .post('/pessoas', PessoaController.createPerson)
  .delete('/pessoas/:id', PessoaController.removePerson)
  .get('/pessoas/:id/matricula/:matriculaId', PessoaController.getMatricula)
  .post('/pessoas/:id/matricula', PessoaController.createMatricula)
  .put('/pessoas/:id/matricula/:matriculaId', PessoaController.updateMatricula)
  .delete('/pessoas/:id/matricula/:matriculaId', PessoaController.removeMatricula);

module.exports = router;
