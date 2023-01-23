"use strict";

let sumar2 = function(n1, n2){
    console.log( n1 +  n2);
}

sumar2 = (n1,n2) => console.log(n1+n2); 
//sumar2(5,12);

const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`); 
//aprendiendo("PHP");

// ----------------------------------------------------------------------

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

// forEach
meses.forEach( mes => console.log(mes) );

const carrito= [
    {nombre: "monitor 20 pulgadas", precio: 500},
    {nombre: "television 50 pulgadas", precio: 700},
    {nombre: "tablet", precio: 300},
    {nombre: "audifonos", precio: 200},
    {nombre: "teclado", precio: 50},
    {nombre: "celular", precio: 500},
    {nombre: "bocina", precio: 300},
    {nombre: "laptop", precio: 800}
];

let resultado;

// metodo some(), para bucar dentro de un array de objetos
resultado= carrito.some( producto => producto.precio === 5070 );

// reduce()
resultado= carrito.reduce( (total, object) => total + object.precio , 0)

// filter()
resultado= carrito.filter( object => object.precio > 400);
console.log(resultado);
