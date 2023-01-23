"use strict"; 

const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
};
Object.freeze(producto);

const medidas = {
    peso: "1kg",
    medida: "1m"
}
Object.freeze(medidas);

const nuevoProducto = { ...producto, ...medidas };

console.log(nuevoProducto);

