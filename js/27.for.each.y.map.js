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

// forEach (metodo exclusivo de arrays) -> diseñado para iterar un array
carrito.forEach( function(producto) {
    //console.log(producto.nombre);
})

//carrito.forEach( producto => console.log(producto.nombre));

// const arreglo= carrito.forEach( producto => producto.nombre + 1 );

// map (metodo exclusivo de arrays) -> diseñado para iterar y generar un nuevo array a partir del array original
carrito.map( function(producto) {
    // console.log(producto.precio);
})

const arrayNombres= carrito.map( producto => producto["nombre"] );
const arrayPrecios= carrito.map( producto => producto["precio"] );

//console.table(carrito);
//console.table(arrayNombres);
//console.table(arrayPrecios);

const arregloNuevo= carrito.map( producto => `${producto.nombre} - ${producto.precio}` );

//console.log(arregloNuevo);

const carritoNuevo = [...carrito];

const carritoNuevoModificado= carritoNuevo.map( producto => producto["nombre"] );


console.log(carritoNuevo);
console.log(carritoNuevoModificado);
