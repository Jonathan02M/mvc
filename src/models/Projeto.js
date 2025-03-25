const projetos = []

class Projeto {
    constructor(id,nome, descricao) {
        this.id = id
        this.nome = nome
        this.descricao = descricao
        
    }

    save() {
        projetos.push(this)
    }

    static fetchAll() {
        return projetos
    }
}

module.exports = Projeto