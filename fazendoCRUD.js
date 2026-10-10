// Importando o módulo HTTP do Node
const http = require('http');

// Vamos simular um "banco de dados" em memória, com um array de objetos
let livros = [
    {
        id: 1,
        titulo: 'O pequeno principe',
        autor: 'Antonie de Saint-Exupéry'
    }
];

// Criação do servidor
const server = http.createServer((req, res) => {
    const metodo = req.method; // armazena o método http da requisição (GET, POST etc)
    const url = req.url; // armazena a URL da requisição (exemplo: /livros)
    res.setHeader('Content-Type', 'application/json'); // a resposta será em JSON

    // MÉTODO GET (listar os livros)

    // Se a URL conter '/livros' e o método da requisição for GET
    if (url === '/livros' && metodo === 'GET'){
        // Retornamos o status code 200 (ok/sucesso)
        res.statusCode = 200;
        // Retornamos nosso array de livros traduzido para JSON.
        res.end(JSON.stringify(livros));
        return; // Encerra a execução.
    }

    // MÉTODO POST (cadastrar novo livro)
    // Se a URL requitida constar "/livros" e o método da requisição for POST
    if (url === '/livros' && metodo === 'POST'){
        let body = '';  // Variável para armazenar os dados do body (requisição)
        // Evento disparado quando chegam os "pedaços" da requisição
        // 'data' = dados do corpo da requisição
        // parte = variável que representa cada uma das partes do body
        req.on('data', parte => {
            body += parte; // Aqui fazemos a concatenação dos pedaços
        })
        // Evento disparado quando todas as partes foram acumuladas
        // 'end' = já recebi todas as partes do body, pode processar.
        req.on('end', () => {
            // Convertemos o JSON recebido em objeto JavaScript
            const novoLivro = JSON.parse(body);
            // Adicionamos o novoLivro no array 'livros' usando o .push
            livros.push(novoLivro);
            res.statusCode = 201; // Status 201 = criado com sucesso.
            // Retornamos a mensagem formatada para JSON com o objeto criado.
            res.end(JSON.stringify({
                mensagem: 'Livro cadastrado com sucesso',
                livro: novoLivro
            }));
        });
        return;
    }
})
server.listen(3000, () => {
    console.log('Server running into http://localhost:3000')
})