// for
for(let i = 1; i <= 100; i++) {
    if(!(i%2)) {
        // console.log(`${i} es par, ${i%2}`);
    } else { 
        // console.log(`${i} es impar, ${i%2}`);

    }
}

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

for(let i = 0; i < carrito.length; i++) {
    // console.log(carrito[i].nombre);
}

// ----------

// while
let i= carrito.length;

while(i < carrito.length) {
    console.log(carrito[i]);
    i++;
}

// dowhile
let j= 100;

do {
    console.log(j);
    j++;
}while(j < 102);