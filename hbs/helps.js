const hbs = require('hbs');
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
// helper capitalizar
hbs.registerHelper('capital', (texto) => {
    let palabra = texto.split('');
    palabra.forEach((palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabra.join('');
});