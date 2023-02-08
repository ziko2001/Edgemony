const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('index.html')

let server = http.createServer((req, res) => {
if(req.url === '/chi-siamo')
    res.end('pagina chi siamo')
 else if(req.url === '/contatti')
    res.end('pagina contatti')
 else if(req.url === '/')
    res.end(homePage)

else{
        res.writeHead(404)
        res.end('Sorry, not found')
    }


})


server.listen(3001)