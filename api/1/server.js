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
    { id: 4, nome: "ana", idade: 25 },
    { id: 5, nome: "ana julia", idade: 253 },
];

app.get('/', (req, res) => {
    res.json("TESTE");
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(u => u.id == id);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ error: "Usuário não encontrado" });
    }
});

app.get('/usuarios/nome/:nome', (req, res) => {
    const nome = req.params.nome.toLowerCase;
    const result = usuarios.filter(u => u.nome.toLowerCase().includes(nome));

    if (result.length > 0) {
        res.json(result);
    } else {
        res.status(404).json({ error: "Nenhum usuário encontrado com esse nome" });
    }
});

app.get('/usuarios/idade/:idade', (req, res) => {
    const idade = req.params.idade;
    const result = usuarios.filter(u => u.idade == idade);

    if (result.length > 0) {
        res.json(result);
    } else {
        res.status(404).json({ error: "Nenhum usuário encontrado com essa idade" });
    }
});

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    usuarios = usuarios.filter(u => u.id != id);
    res.json({ message: "Usuário deletado com sucesso" });
});

app.post('/usuarios', (req, res) => {

    const ultimoid = usuarios.reduce((max, user) => Math.max(max, user.id), 0);

    const novo = {
        id: ultimoid + 1,
        nome: req.body.nome,
        idade: req.body.idade
    }
    usuarios.push(novo);
    res.status(201).json(novo);
})

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(u => u.id == id);
    if (usuario) {
        usuario.nome = req.body.nome || usuario.nome;
        usuario.idade = req.body.idade || usuario.idade;
        res.json(usuario);
    } else {
        res.status(404).json({ error: "Usuário não encontrado" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
