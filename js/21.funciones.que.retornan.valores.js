"use strict";

/*
function sumar(n1, n2) { 
    return n1 + n2;
}

const resultado= sumar(2,3);

console.log(resultado);
*/


function agregarCarrito(precio) {
    return total += precio; // modifica el valor de total cada vez que se ejectuta la funcion
}

let total= 0;

function calcularImpuesto(total){
    return total * 1.15;
}


total= agregarCarrito(200);
total= agregarCarrito(400);
total= agregarCarrito(600);

console.log(total);

const totalAPagar= calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de $${totalAPagar}`);