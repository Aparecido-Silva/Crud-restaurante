const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const serve = require('./serve');

app.post('/cadastrar', async(req, res) =>{
    const senha = await bcrypt.hash("123456", 8);

    console.log(senha);

    return res.json({
        erro:false,
        mensagem: "Cadastrado"
    });
});


