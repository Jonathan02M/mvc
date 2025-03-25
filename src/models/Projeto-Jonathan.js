class Projeto {
    static projetos = [];

    constructor(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    save() {
        Projeto.projetos.push(this);
    }

    static fetchAll() {
        return Projeto.projetos;
    }

    static findById(id) {
        return Projeto.projetos.find(projeto => projeto.id == id);
    }

    static deleteById(id) {
        const index = Projeto.projetos.findIndex(projeto => projeto.id == id);
        if (index !== -1) {
            Projeto.projetos.splice(index, 1);
        }
    }
}

module.exports = Projeto;
