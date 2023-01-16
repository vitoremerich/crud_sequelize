const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router
  .get('/niveis', NivelController.getAll)
  .get('/niveis/:id', NivelController.getById)
  .post('/niveis', NivelController.createLevel)
  .post('/niveis/:id/restaura', NivelController.restoreLevel)
  .put('/niveis/:id', NivelController.updateLevel)
  .delete('/niveis:/id', NivelController.removeLevel);

module.exports = router;
