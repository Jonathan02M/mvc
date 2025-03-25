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

app.post('/projeto', ProjetoController.insert)
app.get('/projeto', ProjetoController.findAll)

app.post('/tarefa', TarefaController.insert)
app.get('/tarefa', TarefaController.findAll)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})