"use strics";

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

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

// forEach
meses.forEach( function(parametro) {
    //console.log(parametro);
})

// includes(), para buscar dentro de un array
let resultado= meses.includes("Marzo");
// console.log(resultado);

// metodo some(), para bucar dentro de un array de objetos
let i=0;
resultado= carrito.some( function(objeto) {
    // i++;
    // console.log(i); 
    return objeto.precio === 500;
});
// console.log(resultado);

// arrow function
resultado = carrito.some( object => object.nombre === "tableta");
// console.log(resultado);

// reduce()
resultado= carrito.reduce( function(total, object){
    //console.log(total);
    return total + object.precio;
}, 0)

resultado= carrito.reduce( (total, object) => total + object.precio, 0.154 );
// console.log(resultado);

// filter()
resultado= carrito.filter( function(object) {
    return object.nombre !== "celular";
})

resultado= carrito.filter( producto => producto.precio < 300 );
console.log(typeof resultado);
console.log(resultado);