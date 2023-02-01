//Conexão com bando de dados
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Aparecido12',
  database: 'db_usuario'
});

connection.connect(function(error){
    if (error) {
        console.log("Conexação não realizada com sucesso!");
    }else{
        console.log("Conexação realizada com sucesso!");
    }
})

module.exports = connection;