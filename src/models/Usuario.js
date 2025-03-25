const usuarios = []

class Usuario {
    constructor(id,nome, email, senha) {
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    save() {
        usuarios.push(this)
    }

    static fetchAll() {
        return usuarios
    }
}

module.exports = Usuario