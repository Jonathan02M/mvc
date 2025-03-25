const express = require('express')
const UsuarioController = require('./controllers/UsuarioController')
const ProjetoController = require('./controllers/ProjetoController')
const TarefaController = require('./controllers/TarefaController')
const app = express()




app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/usuario', UsuarioController.insert)
app.get('/usuario', UsuarioController.findAll)
app.put('/api/usuario/:id', UsuarioController.update);
app.delete('/api/usuario/:id', UsuarioController.deleteUsuario);


app.post('/projeto', ProjetoController.insert)
app.get('/projeto', ProjetoController.findAll)
app.put('/api/projeto/:id', ProjetoController.update);
app.delete('/api/projeto/:id', ProjetoController.deleteProjeto);



app.post('/tarefa', TarefaController.insert)
app.get('/tarefa', TarefaController.findAll)
app.put('/api/tarefa/:id', TarefaController.update);
app.delete('/api/tarefa/:id', TarefaController.deleteTarefa);




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})