const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const http = require('node:http');
const port = 2020;
const server = http.createServer();

/* 
app.listen(port,() => {
    console.log("Servidor criado com sucesso!");
});*/

//Passando meus arquivos para o node
app.use(express.static(path.join(__dirname,("Site-cadastro"))))


//Rotas Servidor: http://localhost:2020/
app.get("/", function (res, res) {
    res.sendFile(__dirname + "/Site-cadastro/index.html");
})


module.exports = server;
