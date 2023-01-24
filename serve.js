const http = require('node:http');

const port = 3000;

const server = http.createServer();

server.listen(port,() => {
    console.log("Deu certo!");
});