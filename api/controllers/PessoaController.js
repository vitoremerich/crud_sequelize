const database = require('../models');

class PessoaController {
  static async getActivePerson(req, res) {
    try {
      const ativePerson = await database.Pessoas.findAll();
      return res.status(200).json(ativePerson);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao realizar a busca` });
    }
  }

  static async getAll(req, res) {
    try {
      const allPersons = await database.Pessoas.scope('all').findAll();
      return res.status(200).json(allPersons);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao realizar a busca` });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const getPerson = await database.Pessoas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(getPerson);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao realizar busca` });
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const personCreate = await database.Pessoas.create(newPerson);
      return res.status(201).json(personCreate);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao adicionar nova pessoa` });
    }
  }

  static async updatePerson(req, res) {
    const personUpdate = req.body;
    const { id } = req.params;
    try {
      await database.Pessoas.update(personUpdate, { where: { id: Number(id) } });
      const updatedPerson = await database.Pessoas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(updatedPerson);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao atualizar info` });
    }
  }

  static async removePerson(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `Id ${id} deletado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao deletar pessoa` });
    }
  }

  static async restorePerson(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.restore({ where: { id: Number(id) } });
      return res.status(200).json({ message: `${id} restaurado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao restaurar pessoa` });
    }
  }

  static async getMatricula(req, res) {
    const { id, matriculaId } = req.params;
    try {
      const matricula = await database.Matriculas.findOne(
        {
          where: {
            id: Number(matriculaId),
            estudante_id: Number(id),
          },
        },
      );
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao buscar matricula` });
    }
  }

  static async createMatricula(req, res) {
    const { id } = req.params;
    const newMatricula = { ...req.body, estudante_id: Number(id) };
    try {
      const createdMatricula = await database.Matriculas.create(newMatricula);
      return res.status(200).json(createdMatricula);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao criar nova matricula` });
    }
  }

  static async updateMatricula(req, res) {
    const { id, matriculaId } = req.params;
    const upatdMatricula = req.body;
    try {
      await database.Matriculas.update(upatdMatricula, {
        where: {
          estudante_id: Number(id),
          id: Number(matriculaId),
        },
      });
      const matriculaUpdate = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
        },
      });
      return res.status(200).json(matriculaUpdate);
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao atualizar matricula` });
    }
  }

  static async removeMatricula(req, res) {
    const { matriculaId } = req.params;
    try {
      await database.Matriculas.destroy({
        where: {
          id: Number(matriculaId),
        },
      });
      return res.status(200).json({ message: `${matriculaId} deletado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao deletar matricula` });
    }
  }

  static async restoreMatricula(req, res) {
    const { id, matriculaId } = req.params;
    try {
      await database.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(id),
        },
      });
      return res.status(200).json({ message: `${id} restaurado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: `${error.message} Erro ao restaurar matricula` });
    }
  }
}

module.exports = PessoaController;
