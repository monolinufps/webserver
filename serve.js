const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helps');
const portal = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// express hbs
// dirname = toma esa variable y con cadena la ruta
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
//helper

// renderisado
app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'itachi'
    });
});
app.set('view engine', 'hbs');
app.get('/about', function(req, res) {
    res.render('about', {
        nombre: 'itachi'
    });
});

app.listen(portal, () => {
    console.log(`escuchando peticiones en el puerto  ${portal}`);
});