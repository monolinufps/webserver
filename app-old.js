const http = require('http');
http.createServer((req, res) => {
        res.writeHead(200, { 'Contenido': 'application/json' });
        let objeto = {
            nombre: 'jose',
            edad: 32,
            url: req.url
        };
        res.write(JSON.stringify(objeto));
        res.end();
    })
    .listen(8069);
console.log('escuchar el 8069');