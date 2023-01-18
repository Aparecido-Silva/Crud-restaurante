const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_login', 'root', '@Aparecido12', {
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

  function login() {
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value
  }
