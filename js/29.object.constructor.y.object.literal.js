"use strics";

// POO 

// Object Literal
const producto= {
    nombre: "tablet",
    precio: 500
}

function Cliente(nombre, apellido) {
    this.nombre= nombre;
    this.apellido= apellido;
}
Cliente.prototype.formatearCliente = function(){
    return `El producto ${this.nombre} ${this.apellido}`;
}
Cliente.prototype.valorDolar = function(){
    return `Hola ${this.nombre} ${this.apellido}, hoy el dólar cerró a $372.`;
}

// Object Constructor 
function Producto(nombre, precio, disponible) {
    this.nombre= nombre;
    this.precio= precio;
    this.disponible= disponible;
}
// Prototype: Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}
Producto.prototype.getTotalPrice = function(){
    return `El producto ${this.nombre} tiene un precio final de $${this.precio * 1.21}`;
}

const producto2= new Producto("Monitor Curvo de 49\"", 800);
const producto3= new Producto("Laptop", 1200, true);

const cliente= new Cliente("Juan", "De la Torre");
console.log(cliente);

function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}

console.log(producto2.formatearProducto());
//console.log(cliente.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto3.getTotalPrice());

/* console.log(formatearProducto(producto2));
console.log(formatearProducto(producto3)); */
