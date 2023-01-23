"use strict";

function sumar(numero1 = 0, numero2 = 0) { // numero1 y numero2 son parametros
    console.log(numero1 + numero2);
}

sumar(15, 45); // los valores que se le pasan la funcion son argumentos
sumar(8, 11);
sumar();

const sumar2 = function(n1 = 2, n2 = 2){
    console.log( n1 +  n2);
}

sumar2(6.5);