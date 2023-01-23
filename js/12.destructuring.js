const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    saludar(){
        console.log("soy un metodo de un objeto ejecutandose"); 
    }
};

// destructuring de objetos
const { nombre, precio, disponible, saludar, atributo } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
saludar()
console.log(atributo);