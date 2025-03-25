const Tarefa = require('../models/Tarefa')

class TarefaController {
    static insert(req, res) {
        const { id, titulo } = req.body

        const tarefa = new Tarefa(id, titulo)
        tarefa.save()

        res.status(201).json(tarefa)
    }

    static findAll(req, res) {
        const tarefas = Tarefa.fetchAll()

        res.json(tarefas)
    }
}

module.exports = TarefaController