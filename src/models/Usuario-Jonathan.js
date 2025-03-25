class Usuario {
    static usuarios = [];

    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    save() {
        Usuario.usuarios.push(this);
    }

    static fetchAll() {
        return Usuario.usuarios;
    }

    static findById(id) {
        return Usuario.usuarios.find(usuario => usuario.id == id);
    }

    static deleteById(id) {
        const index = Usuario.usuarios.findIndex(usuario => usuario.id == id);
        if (index !== -1) {
            Usuario.usuarios.splice(index, 1);
        }
    }
}

module.exports = Usuario;
