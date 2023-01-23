"use strict";

const numeros = [10,20,30,40,50];

// numeros.push(100, 200); // este metodo agrega un/varios elemento/s al final del array
// numeros.unshift(-10,-20);  // este metodo agrega un/varios elemento/s al principio del array
// numeros.unshift(-30);

//console.table(numeros);
//console.log("\n");




const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

// const ultimoElementoEliminado= meses.pop(); // este metodo agrega un elemento al final del array
// console.log(typeof ultimoElementoEliminado);
// console.log(ultimoElementoEliminado);
// console.table(meses);
// console.log("\n");

//const primerElementoEliminado= meses.shift(); // este metodo agrega un elemento al principio del array
//console.log(primerElementoEliminado);

// const elementoEliminado= meses.splice(2, 1, "Septiembre");

// console.log(typeof elementoEliminado);
// console.log(elementoEliminado);
// console.table(meses);
// console.log("\n");

const nuevoArreglo= ["Diciembre", ...meses, "junio"];

console.table(meses);
console.table(nuevoArreglo);
