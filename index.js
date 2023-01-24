const serve = require('./serve');
const user = require('./models/user');
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/add-pa', function (req, res) {
   res.send("Nome: " + req.body.nome + "<br>Email: " + req.body.email)
})

app.get("/add-pa", function (req, res) {
    res.sendFile(__dirname +('/Site/add-pa.html'))
})




  
