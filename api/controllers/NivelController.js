const database = require('../models');

class NivelController {
  static async getAll(req, res) {
    try {
      const todosNiveis = await database.Niveis.findAll();
      return res.status(200).json(todosNiveis);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao realizar busca` });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const nivelId = await database.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(nivelId);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao realizar busca` });
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body;
    try {
      const levelCreate = await database.Niveis.create(newLevel);
      return res.status(200).json(levelCreate);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao criar nivel` });
    }
  }

  static async updateLevel(req, res) {
    const levelUpdate = req.body;
    const { id } = req.params;
    try {
      await database.Niveis.update(levelUpdate, { where: { id: Number(id) } });
      const findLevel = database.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(findLevel);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao atualizar nivel` });
    }
  }

  static async removeLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `${id} Deletado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao remover nivel` });
    }
  }

  static async restoreLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.restore({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `${id} restaurado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao restaurar nivel` });
    }
  }
}

module.exports = NivelController;
