const user = require('./models/user');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const http = require('node:http');
const { Sequelize } = require('sequelize');

//Servidor
const port = 2020;
const server = http.createServer();

app.listen(port,() => {
    console.log("Servidor iniciado na porta: http://localhost:2020/")
});


//Passando meus arquivos para o node
app.use(express.static(path.join(__dirname,("Site-login"))))

app.use(express.static(path.join(__dirname,("Site-cadastro"))))


//Rotas - Servidor: http://localhost:2020/
app.get("/", function (res, res) {
    res.sendFile(__dirname + "/Site-login/login.html")
});

app.get("/cadastrar", function (req, res) {
    res.sendFile(__dirname + "/Site-cadastro/index.html")
});

app.get("/teste", function (res, res) {
    res.sendFile(__dirname + "/teste.html")
});



//Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Criando usuário

app.post("/cadastro", function (req, res) {
    const dados = user;
    user.findOne({
        email: req.body.email
    }).then((user) => {
        if (user === null) {
            dados.create({
                nome:req.body.nome,
                email:req.body.email, 
                senha: req.body.senha
            })
        }else{
            res.redirect('/')
        }
    })
})

//Login usuário

app.post("/", async (req, res) => {

    const User = await user.findOne({
        attributes: ['email', 'senha'],
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });

    if (User === null) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta! "
        });
    };

    if (req.body.senha === User.senha) {
        return res.redirect('/teste')
    }
});