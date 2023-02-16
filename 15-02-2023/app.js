const  MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://ziko2001:caldaro123@cluster0.fihzjya.mongodb.net/test";



MongoClient.connect(url)
    .then((db) =>{
        accountsDb = db;
        collection = accountsDb.db('school');
        console.log('database connesso');
    })
    .catch((err) => {
        console.log(err);
    });


    MongoClient.connect(url, (err, db) =>{
    if (err) throw err;
    let dbase = db.db("school");
    dbase.createCollection("students", (err, res) =>{
        if (err) throw err;
        console.log("Collection creata");
        db.close();
    });
});


MongoClient.connect(url, (err, db) =>{
    if (err) throw err;
    let dbase = db.db("school");
    dbase.createCollection("courses", (err, res) =>{
        if (err) throw err;
        console.log("Collection creata");
        db.close();
    });
});


MongoClient.connect(url , (err, db) =>{
    if (err) throw err;
    let dbase = db.db("school");

    let myObj = [
        {nome: "zakaria", cognome: "boujebha", matricola: "1", corso: "Frontend", esame: "database"},
        {nome: "andrea", cognome: "giovanni", matricola: "2", corso: "Frontend", esame: "database"},
    ]

    dbase.collection('students').insertMany(myObj, (err, res) =>{

        if (err) throw err;
        console.log(`Numero di record inseriti: ${res.insertedCount}`)
        db.close();
    })
})



MongoClient.connect(url , (err, db) =>{
    if (err) throw err;
    let dbase = db.db("school");

    let myObj = [
        {nome: "backend", materia: "sql", docenti: "pippo"},
        {nome: "cyber security", materia: "python", docenti: "mario"},
    ]

    dbase.collection('courses').insertMany(myObj, (err, res) =>{

        if (err) throw err;
        console.log(`Numero di record inseriti: ${res.insertedCount}`)
        db.close();
    })
})



MongoClient.connect(url, (err, db) =>{
    if (err) throw err;
    let dbase = db.db("school");
    dbase.collection('students').findOne({}, (err, res) =>{
        if (err) throw err;
        console.log(res.nome)
        db.close();
    })
})



MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("school");
    dbase.collection('students').find({}).toArray(function (err, res) {
        if (err) throw err;
        console.log(res)
        db.close();
    })
})



MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("school");
    let query = {matricola:'2'}
    dbase.collection('students').find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res)
        db.close();
    })
})



MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("school");

    let query = {nome:'cyber security'}
    dbase.collection('courses').deleteMany(query, function(err, obj) {
        if (err) throw err;
        console.log(`${obj.result} records cancellati` )
        db.close();
    })
})




MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("school");

    let query = {nome:'zakaria'}
    let newValue = {$set: {anni: 27, lavoro:"cyber security"}}
    dbase.collection('students').updateOne(query, newValue ,function(err, res) {
        if (err) throw err;
        console.log(`record(s) aggiornati` )
        db.close();
    })
})
