const express = require('express');
const cors = require('cors');
const e = require('express');
const uuid = require('uuid');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

const posts = [
    {
        id: uuid.v4(),
        autor: "J.R.R. Tolkien",
        titulo: "O Senhor dos Anéis",
        conteudo: "Na Terra-média, um hobbit chamado Frodo Bolseiro...",
        dataCriacao: "2025-09-11T15:00:00Z",
        comentarios: [
            "Uma aventura épica!",
            "Amei os personagens e a história."
        ]
    },
    {
        id: uuid.v4(),
        autor: "George Orwell",
        titulo: "1984",
        conteudo: "Era um dia frio e sombrio em Londres...",
        dataCriacao: "2025-09-11T16:00:00Z",
        comentarios: [
            "Um livro perturbador, mas necessário.",
            "Faz a gente pensar sobre a sociedade."
        ]
    },
    {
        id: uuid.v4(),
        autor: "Antoine de Saint-Exupéry",
        titulo: "O Pequeno Príncipe",
        conteudo: "Era uma vez um pequeno príncipe que vivia em um asteroide...",
        dataCriacao: "2025-09-11T17:00:00Z",
        comentarios: [
            "Uma história encantadora para todas as idades.",
            "Adorei as lições de vida presentes no livro."
        ]
    },
    {
        id: uuid.v4(),
        autor: "Miguel de Cervantes",
        titulo: "Dom Quixote",
        conteudo: "Em um lugar da Mancha, de cujo nome não quero lembrar...",
        dataCriacao: "2025-09-11T18:00:00Z",
        comentarios: [
            "Uma sátira brilhante sobre a cavalaria.",
            "Personagens inesquecíveis e uma trama envolvente."
        ]
    },
    {
        id: uuid.v4(),
        autor: "Dante Alighieri",
        titulo: "A Divina Comédia",
        conteudo: "No meio do caminho de nossa vida, encontrei-me em uma selva escura...",
        dataCriacao: "2025-09-11T19:00:00Z",
        comentarios: [
            "Um clássico da literatura!",
            "A leitura foi desafiadora, mas valeu a pena."
        ]
    }
];

app.get('/', (req, res) => {
    res.json("USE AS ROTAS");
});

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/id/:id', (req, res) => {
    const id = req.params.id;
    const livro = posts.find(l => l.id == id);

    if (livro) {
        res.json(livro);
    } else {
        res.status(404).json({ error: "Post não encontrado" });
    }
});

app.post('/posts', (req, res) => {
    const novoPost = {
        id: uuid.v4(),
        autor: req.body.autor,
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        dataCriacao: new Date().toISOString(),
        comentarios: []
    };
    posts.push(novoPost);
    res.status(201).json(novoPost);
});

app.put('/posts/id/:id', (req, res) => {
    const idDoPost = req.params.id;
    const dadosNovos = req.body;

    const post = posts.find(p => p.id == idDoPost);

    if (!post) {
        return res.status(404).json({ error: "Post não encontrado" });
    }

    post.autor = dadosNovos.autor || post.autor;
    post.titulo = dadosNovos.titulo || post.titulo;
    post.conteudo = dadosNovos.conteudo || post.conteudo;

    res.json(post);
});

app.delete('/posts/id/:id', (req, res) => {
    const idDoPost = req.params.id;
    const index = posts.findIndex(p => p.id == idDoPost);
    if (index === -1) {
        return res.status(404).json({ error: "Post não encontrado" });
    }
    posts.splice(index, 1);
    res.json({ message: "Post deletado com sucesso" });
});

app.post('/posts/id/:id/comentarios', (req, res) => {
    const idDoPost = req.params.id;
    const comentario = req.body.comentario;
    const post = posts.find(p => p.id == idDoPost);

    if (!post) {
        return res.status(404).json({ error: "Post não encontrado" });
    }
    post.comentarios.push(comentario);
    res.status(201).json(post);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 