import express from "express";
import db from "./config/dbconnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'Erro de Conexão'));
db.once("open", () => {
    console.log("conexão com o bamco feita com sucesso");
});
const app = express();

app.use(express.json());

// const livros = [
//     { id: 1, "titulo": "Senhor dos Anéis" },
//     { id: 2, "titulo": "O Hobbit" }
// ];

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
});

app.get("/livros", (req, res) => {
    livros.find((err, livro) => {
        res.status(200).json(livro);
    });
});

app.post('/livros', function (req, res) {
    livros.push(req.body);
    res.status(201).send("Livro foi cadastrado com sucesso");
});

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;