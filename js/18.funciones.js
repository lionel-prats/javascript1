// declaracion de funcion
sumar();
function sumar() {
    console.log(10+10);
}
sumar();

// expresion de funcion
sumar2()
const sumar2 = function(){
    console.log(3+3);
}
sumar2();

// IIFE
/*
(function() {
    console.log("esto es una funcion");
})();
*/

// intente usar la constante cliente,definida en 18.funciones.otro.js - no pude porque la protege una funcion IIFE (ver archivo)
// console.log(cliente);

/* 
DIFERENCIA ENTRE UNA FUNCION DECLARADA Y UNA FUNCION EXPRESADA
javascript se ejecuta en 2 vueltas (a esto se le llama hoisting)
la primera hace un mapeo del archivo para cargar todas las funciones que encuentre
en la segunda se ejectuta todo el codigo que haya
entonces, una funcion declarada es reconocida y cargada en la primera vuelta de ejecucion, mientras que una funcion expresada no es reconocida en esa primera vuelta.
por eso, una funcion declarada puede ser llamada (ejecutada) lineas arriba de ser declarada.
no se puede hacer lo mismo con una funcion expresada
*/