const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('index.html')

let server = http.createServer((req, res) => {
if(req.url === '/prodotti')
    res.end('al momento non ci sono prodotti disponibili')
 else if(req.url === '/')
    res.end(homePage)

else{
        res.writeHead(404)
        res.end('Sorry, not found')
    }


})


server.listen(3001)