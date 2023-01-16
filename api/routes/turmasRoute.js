const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router
  .get('/turmas', TurmaController.getAll)
  .get('/turmas/:id', TurmaController.getById)
  .post('/turmas', TurmaController.createClass)
  .post('/turmas/:id/restaura', TurmaController.restoreClass)
  .put('/turmas/:id', TurmaController.updateClass)
  .delete('/turmas:/id', TurmaController.removeClass);

module.exports = router;
