const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id',
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: {
          status: 'confirmado',
        },
        as: 'enrolledClasses',
      });
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        validateFunction(name) {
          if (name.length < 3) throw new Error('o campo nome deve possuir mais de 3 caracteres');
        },
      },
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Dado do tipo email invalido',
        },
      },
    },
    role: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Pessoas',
    defaultScope: {
      where: {
        ativo: true,
      },
    },
    scopes: {
      all: {
        where: {},
      },
    },
  });
  return Pessoas;
};
