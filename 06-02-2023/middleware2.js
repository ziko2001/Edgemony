const express = require('express')
const authorize = require('./auth')

const app = express()

app.get('/', (req, res) =>{
    res.send('home')
})

app.get('/about', (req, res) =>{
    res.send('ciao a tutti')
})

app.get('/libri', (req, res) =>{
    res.send('quale libro vuoi')
})

app.get('/api/product', [authorize], (req, res) =>{
    res.send('pagina libri')
    console.log(req.user)
})


app.listen(3000, () =>{
    console.log(`server in ascolto sulla porta: 3000`)
})