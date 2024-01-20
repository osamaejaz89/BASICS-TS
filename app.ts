import express from 'express'
import todosRouters from './routes/todos'



const app = express()

app.use(todosRouters)
app.listen(3000)