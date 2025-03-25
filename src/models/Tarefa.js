const tarefas = []

class Tarefa {
    constructor(id,titulo) {
        this.id = id
        this.titulo = titulo
    }

    save() {
        tarefas.push(this)
    }

    static fetchAll() {
        return tarefas
    }
}

module.exports = Tarefa