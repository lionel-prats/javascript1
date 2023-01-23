// existen 3 formas de crear un string

// 1)
const producto = "monitor de 20\"";

// 2) usando el constructor String
const producto2 = String("monitor de 30 'pulgadas'");

// 3) instanciando la clase String
const producto3 = new String("monitor de 50 pulgadas");


console.log(producto);
console.log(typeof producto);

console.log("\n");

console.log(producto2);
console.log(typeof producto2);

console.log("\n");

console.log(producto3);
console.log(producto3[0]);
console.log(producto3[1]);
console.log(producto3[2]);
console.log(producto3[3]);
console.log(producto3[4]);
console.log(producto3[5]);
console.log(producto3[6]);
console.log(typeof producto3);