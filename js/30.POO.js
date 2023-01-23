// Classes


//Objeto Constructor
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
const cliente= new Cliente("Lionel", "Prats");
const cliente2= new Cliente("Alejandro", "Dolina");


class Producto {
    constructor(nombre, precio) {
        this.nombre= nombre;
        this.precio= precio;
    }
    formatearPoducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
    getTotalPrice (){
        return `El producto ${this.nombre} tiene un precio final de $${this.precio * 1.21}`;
    }
}

const producto2= new Producto("Monitor Curvo de 49\"", 800);
const producto3= new Producto("Laptop", 300);

console.log(producto2);
console.log(producto3);
console.log(producto3.getTotalPrice());
console.log(cliente.valorDolar());
console.log(cliente2.valorDolar());