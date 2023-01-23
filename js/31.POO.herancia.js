"use strict";

class Producto {
    constructor(nombre, precio) {
        this.nombre= nombre;
        this.precio= precio;
    }
    formatearPoducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
    obtenerPrecio() {
        console.log(`${this.precio}`);
    }
}

const producto2= new Producto("Monitor Curvo de 49\"", 800);

// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio) /* hace referencia al constructor de la clase heredada */
        this.isbn= isbn;
    }
    /* aca reescribo el metodo heredado */
    formatearPoducto() {
        // return `El producto ${this.nombre} tiene un precio de ${this.precio} y su isbn es ${this.isbn}`
        return `El producto ${super.formatearPoducto()} y su isbn es ${this.isbn}`;
        /* con (super.formatearPoducto()) invoco la ejecucion del metodo heredadao para usar la informacion y no reescribir codigo */
    }
    obtenerPrecio(){
        super.obtenerPrecio();
        console.log("y si hay en existencia"); 
    }
}

const libro = new Libro("JavaScript la Revolución", 120, 245372572572);

console.log(libro.formatearPoducto());
libro.obtenerPrecio();
console.log(producto2.formatearPoducto());

