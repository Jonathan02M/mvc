const Projeto = require('../models/Projeto');

class ProjetoController {
    static insert(req, res) {
        const { id, nome, descricao } = req.body;
        const projeto = new Projeto(id, nome, descricao);
        projeto.save();
        res.status(201).json(projeto);
    }

    static findAll(req, res) {
        const projetos = Projeto.fetchAll();
        res.json(projetos);
    }

    static update(req, res) {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        const projeto = Projeto.findById(id);
        if (!projeto) {
            return res.status(404).json({ error: 'Projeto não encontrado' });
        }

        projeto.nome = nome || projeto.nome;
        projeto.descricao = descricao || projeto.descricao;
        res.json(projeto);
    }

    static deleteProjeto(req, res) {
        const { id } = req.params;
        const projeto = Projeto.findById(id);

        if (!projeto) {
            return res.status(404).json({ error: 'Projeto não encontrado' });
        }

        Projeto.deleteById(id);
        res.status(204).send(); 
    }
}

module.exports = ProjetoController;
