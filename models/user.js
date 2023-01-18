const Sequeize = require('sequelize');
const db = require('./db');

const user = db.define('table', {
    id: {
        type: Sequelize.INTERGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
user.sync();

module.exports = user;