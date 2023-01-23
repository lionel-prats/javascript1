"use strict";

const numeros = [
    [1,2,3],
    20,
    30,
    {
        nombre: "lionel",
        edad: 37,
        profesion: "programador"
    },
    50
];

console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo");

console.table(meses);

console.log(numeros[32]);

const array = [];
console.log(meses.length);
console.log(array.length);

console.log("\n\n\n");

/* el metodo forEach es para iterar un array */
numeros.forEach( function(parametro) {
    console.log(parametro);
})

