const http = require("http");

http.createServer((req, res)=>{
res.writeHead(200, {"Content-Type":"text/plain"})

    switch(req.url){
        case '/':
        res.end('Você está na página home');
        break;
        case '/contacto':
        res.end('Você está na página contato');
        break;
        defaut:
        res.end('Sem resultados');
        break;
    }

res.end("Meu primeiro servidor Node");

}).listen(3030,"localhost");

