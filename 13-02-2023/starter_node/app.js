const express = require("express")
const session = require("cookie-session")
bodyParser = require('body-parser')
const hbs = require("hbs")

const PORT = 4040
const app = express()

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(session({secret: "la mia session"}))


app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/signup', (req, res) =>{
    res.render('signup')
})

app.post('/signup', (req, res) =>{
    console.log(`${req.body.name} / ${req.body.password}`)

    if(!req.body.name || !req.body.password){
        res.status(400)
        res.render('signup', {message: 'per favore, aggiungi tutti i dati richiesti'})
    }else{
        let name = 'Zakaria'
        let password = '2001'
        let userAuth = {name:name, password:password}

        if(name == req.body.name && password == req.body.password){
            req.session.user = userAuth
            res.redirect('/private')
        }else{
            res.redirect('/warning')
        }
    }

    res.render('signup')

})

app.get('/private', (req, res) =>{
    res.render('private')
})

function checkPage(req, res, next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/warning')
    }
}

app.get('/logout', (req, res) =>{
    console.log('hai fatto logout')
    res.render('signup')
})

app.listen(PORT, () =>{
    console.log(`Porte del server attivo`)
})