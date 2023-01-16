const database = require('../models');

class TurmaController {
  static async getAll(req, res) {
    try {
      const todasTurmas = await database.Pessoas.findAll();
      return res.status(200).json(todasTurmas);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao realizar busca` });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const turmaId = await database.Turmas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(turmaId);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao realizar busca` });
    }
  }

  static async createClass(req, res) {
    const newClass = req.body;
    try {
      const classCreate = await database.Turmas.create(newClass);
      return res.status(200).json(classCreate);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao criar turma` });
    }
  }

  static async updateClass(req, res) {
    const classUpdate = req.body;
    const { id } = req.params;
    try {
      await database.Turmas.update(classUpdate, { where: { id: Number(id) } });
      const updatedClass = await database.Turmas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(updatedClass);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao atualizar turma` });
    }
  }

  static async removeClass(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `${id} deletado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao deletar turma` });
    }
  }

  static async restoreClass(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.restore({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `${id} restaurado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao restaurar turma` });
    }
  }
}

module.exports = TurmaController;
