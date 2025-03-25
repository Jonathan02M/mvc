class Tarefa {
    static tarefas = [];

    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
    }

    save() {
        Tarefa.tarefas.push(this);
    }

    static fetchAll() {
        return Tarefa.tarefas;
    }

    static findById(id) {
        return Tarefa.tarefas.find(tarefa => tarefa.id == id);
    }

    static deleteById(id) {
        const index = Tarefa.tarefas.findIndex(tarefa => tarefa.id == id);
        if (index !== -1) {
            Tarefa.tarefas.splice(index, 1);
        }
    }
}

module.exports = Tarefa;
