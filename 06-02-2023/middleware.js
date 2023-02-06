const express = require('express')
const logger = require('./logger')

const app = express()

app.use(logger)


app.get('/', (req, res) =>{

    res.send('home')
})

app.get('/about', (req, res) =>{
    res.send('ciao a tutti')
})

app.get('/libri', (req, res) =>{
    res.send('quale libro vuoi')
})




app.listen(3000, () =>{
    console.log(`server in ascolto sulla porta: 3000`)
})

  