const Sequelize = require('sequelize');
const db = require('./db'); 

const user = db.define('usuario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

//criar a tabela e verifica as alterações
/*user.sync({ alter: true })*/ 

module.exports = user;