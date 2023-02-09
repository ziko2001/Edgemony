const express = require('express')
const hbs = require('hbs')
const myPreferences = {pet: "gatto", color: "nero", season: "estate" }


const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))


app.get("/", (req, res) =>{
    res.render("home", {
        nome: "Zakaria",
        titolo: "esercizio",
        ...myPreferences
    })
})


app.get('/about' , (req, res) =>{
    res.render("about", {
        titolo: "sono io che l'ho fatta ",
    })
})


app.get('/login' , (req, res) =>{
    res.render("login", {
        titolo: "Corso di Node.js",
        myPreferences: myPreferences[0],
    })
})

app.get('/mi-presento' , (req, res) =>{
    res.render("mi-presento", {
        titolo: "mi presento",
        myPreferences: myPreferences[0],
    })
})


app.listen(PORT, () =>{
    console.log(`Server attivo su ${PORT}`)
})