const Tarefa = require('../models/Tarefa');

class TarefaController {
    static insert(req, res) {
        const { id, titulo } = req.body;
        const tarefa = new Tarefa(id, titulo);
        tarefa.save();
        res.status(201).json(tarefa);
    }

    static findAll(req, res) {
        const tarefas = Tarefa.fetchAll();
        res.json(tarefas);
    }

    static update(req, res) {
        const { id } = req.params;
        const { titulo } = req.body;

        const tarefa = Tarefa.findById(id);
        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }

        tarefa.titulo = titulo || tarefa.titulo;
        res.json(tarefa);
    }

    static deleteTarefa(req, res) {
        const { id } = req.params;
        const tarefa = Tarefa.findById(id);

        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }

        Tarefa.deleteById(id);
        res.status(204).send(); 
    }
}

module.exports = TarefaController;
