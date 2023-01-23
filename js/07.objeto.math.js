// objeto Math

// en javascript existe algo llamado la ventana global (window)
console.log(window);
// dentro de window encontramos todo lo que esta disponible en javasctipt
// dentro de window encontramos el objeto math. a continuacion lo que muestra la consola del navegador

console.log(window.Math);

console.log("\n");

console.log(Math.random());
console.log(Math.PI);

console.log("\n");

console.log(Math.round(2.5));
console.log(Math.ceil(2.0000001)); // siempre va a redondear hacia arriba 
console.log(Math.floor(2.999999)); // siempre va a redondear hacia abajo

/* 
tengo 77 productos
la paginacion es cada 20
3.85
*/
const cantidadProductos = 77;
const paginacion = 20;
const paginasResultantes = Math.ceil(cantidadProductos / paginacion);
console.log(paginasResultantes);

console.log("\n");

console.log(Math.sqrt(144)); // raiz cuadrada
console.log(Math.abs(-200)); // valor absoluto

console.log(Math.min(15,6,7,12,11,4)); // minimo de un listado
console.log(Math.max(15,6,7,12,11,4)); // maximo de un listado

console.log("\n");

let resultado = Math.random();
resultado= resultado * 30;
resultado= Math.floor(resultado);
console.log(resultado);