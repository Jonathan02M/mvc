const Usuario = require('../models/Usuario')

class UsuarioController {
    static insert(req, res) {
        const { id, nome, email, senha } = req.body

        const usuario = new Usuario(id, nome, email, senha)
        usuario.save()

        res.status(201).json(usuario)
    }

    static findAll(req, res) {
        const usuarios = Usuario.fetchAll()

        res.json(usuarios)
    }
}

module.exports = UsuarioController