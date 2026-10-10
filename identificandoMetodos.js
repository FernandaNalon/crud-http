// Importamos o módulo HTTP nativo do Node
const http = require('http');

// Realizamos a criação do servidor
const server = http.createServer((req, res) => {
    // Escrevemos no terminal, qual metodo está sendo requerido
    console.log(req.method);
    // Informações sobre a requisição (StatusCode e Tipo de Informação)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    // Resposta final do servidor
    res.end(`Método recebido: ${req.method}`);
});
// Porta do servidor
server.listen(3000, () =>{
    console.log('Servidor rodando em http://localhost:3000');
})