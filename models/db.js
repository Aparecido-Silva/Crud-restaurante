//Conexão com bando de dados
const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_usuario', 'root', '@Aparecido12', {
    host: 'localhost',
    dialect:'mysql'
  });

     sequelize.authenticate()
    .then(() => {
        console.log("Conexação realizada com sucesso!");
    }).catch(() => {
        console.log("Conexação não realizada com sucesso!");
    });
  
   

  module.exports = sequelize;



