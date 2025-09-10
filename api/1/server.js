const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

let usuarios = [
    { id: 1, nome: "ana", idade: 25 },
    { id: 2, nome: "ana", idade: 25 },
    { id: 3, nome: "ana", idade: 25 },
    { id: 4, nome: "ana", idade: 25 }
];

app.get('/', (req, res) => {
    res.json("TESTE");
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
    const id = req5.params.id;
    const usuario = usuarios.find(u => u.id == id);
    res.json(usuario);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
