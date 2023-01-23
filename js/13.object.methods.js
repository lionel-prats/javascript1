"use strict"; 
/* 
instruccion para que en la consola del navegador se nos notifique de errores que de otra manera no nos informaria 
por ejemplo, intentar agregarle una propiedad a un objeto no extensible
use strict obliga a ejecutar el codigo de js de forma estricta, es decir, siguiendo las buenas practicas
*/

const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

// Object.freeze(producto);
/* 
objeto no extensible
el metodo freeze() del objeto Object vuelve a un objeto no extensible, para que este no pueda ser modificado
no permite agregar propiedades o metodos
no permite eliminar propiedades o metodos
no permite modificar propiedades o metodos
*/

Object.seal(producto);
/* 
el metodo seal() del objeto Object...
no permite agregar propiedades o metodos
no permite eliminar propiedades o metodos
PERMITE modificar propiedades o metodos
*/

// producto.imagen = "imagen.jpg";
// delete producto.disponible;
producto.precio = 400;

// Object.isFrozen() nos permite saber si un objeto es o no extensible (si se puede modificar) 
console.log(Object.isFrozen(producto)); 
// Object.isSealed() nos permite saber si un objeto es o no seal 
console.log(Object.isSealed(producto)); 

console.log(producto);