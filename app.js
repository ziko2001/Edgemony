const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Conten-Type' : 'text/html'});
        let html = fs.readFileSync('${__dirname}/index.html');
        res.end(html)
    }else if(req.url === '/api/libri'){
        res.writeHead(200, {'Conten-Type' : 'application/json'});
        const libri = JSON.stringify({
            titolo: 'zakaria'
        });
        res.end(libri)
    }
    
    
    
    else{
        res.writeHead(404);
        res.end('Not found');
    }



})

server.listen(8181);

console.log('Server attivo')