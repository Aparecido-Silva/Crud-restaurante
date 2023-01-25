const user = require('./models/user');
const db = require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const http = require('node:http');
const { error } = require('console');
const port = 2020;
const server = http.createServer();


app.listen(port,() => {
    //console.log("Servidor criado com sucesso!");
});


//Passando meus arquivos para o node
app.use(express.static(path.join(__dirname,("Site-cadastro"))))
app.use(express.static(path.join(__dirname,("Site-login"))))


//Rotas - Servidor: http://localhost:2020/
app.get("/", function (res, res) {
    res.sendFile(__dirname + "/Site-login/login.html")
});

app.get("/cadastrar", function (req, res) {
    res.sendFile(__dirname + "/Site-cadastro/index.html")
});

app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/Site-login/index.html")
});


//Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//Criando usuário
app.post("/cadastro", function (req, res) {
    user.create({
        nome:req.body.nome,
        email:req.body.email, 
        senha: req.body.senha
    }).then(function() {
        res.redirect("/restaurante")
    }).catch(function() {
        res.send("Não foi possivel cadastrar o usuário! Houve um erro:" + error)
    })
})

