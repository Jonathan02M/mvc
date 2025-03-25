const Usuario = require('../models/Usuario');

class UsuarioController {
    static insert(req, res) {
        const { id, nome, email } = req.body;
        const usuario = new Usuario(id, nome, email);
        usuario.save();
        res.status(201).json(usuario);
    }

    static findAll(req, res) {
        const usuarios = Usuario.fetchAll();
        res.json(usuarios);
    }

    static update(req, res) {
        const { id } = req.params;
        const { nome, email } = req.body;

        const usuario = Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        usuario.nome = nome || usuario.nome;
        usuario.email = email || usuario.email;
        res.json(usuario);
    }

    static deleteUsuario(req, res) {
        const { id } = req.params;
        const usuario = Usuario.findById(id);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        Usuario.deleteById(id);
        res.status(204).send(); // Sem conteúdo
    }
}

module.exports = UsuarioController;
