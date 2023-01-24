const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
  .get('/pessoas', PessoaController.getActivePerson)
  .get('/pessoas/todos', PessoaController.getAll)
  .get('/pessoas/:id', PessoaController.getById)
  .get('/pessoas/:id/matricula/:matriculaId', PessoaController.getMatricula)
  .get('/pessoas/:id/matricula', PessoaController.getEnrollment)
  .put('/pessoas/:id', PessoaController.updatePerson)
  .put('/pessoas/:id/matricula/:matriculaId', PessoaController.updateMatricula)
  .post('/pessoas', PessoaController.createPerson)
  .post('/pessoas/:id/matricula', PessoaController.createMatricula)
  .post('/pessoas/:id/restaura', PessoaController.restorePerson)
  .post('/pessoas/:id/matricula/:matriculaId/restaura', PessoaController.restoreMatricula)
  .delete('/pessoas/:id', PessoaController.removePerson)
  .delete('/pessoas/:id/matricula/:matriculaId', PessoaController.removeMatricula);

module.exports = router;
