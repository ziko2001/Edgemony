const http = require('http')
const libri = require('./libri')

let server = http.createServer((req, res) =>{
res.writeHead(200, {'Content-Type': 'application/json'})
res.end(JSON.stringify(libri))
});

const callback = () => {
    const address = server.address().address;
    const port = server.address().port;
    console.log('Server in ascolto su http://${address}:${port}');

}


server.listen(8000, 'localhost', callback)

console.log(libri)