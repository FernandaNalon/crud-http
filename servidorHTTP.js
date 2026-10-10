// Importamos o módulo http nativo do Node.js
const http = require('http');

// Criação do servidor
const server = http.createServer((req, res) => {
    // Dados do Header (statusCode e tipo de informação)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Resposta final do servidor.
    res.end('Servidor rodando!');
})

// Porta do servidor
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});