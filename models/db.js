const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_login', 'root', '@Aparecido12', {
    host: 'localhost',
    dialect:'mysql'
  });

    sequelize.authenticate()
    .then(() => {
        console.log("Conexação realizada com sucesso!");
    }).catch(() => {
        console.log("Erro!");
    });

  module.exports = sequelize;