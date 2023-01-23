const numero1 = 20;
const numero3 = 30;

console.log(numero1);

try {
    console.log(numero2);
} catch (error) {
    console.log(error); // imprimo el error por pantalla y la ejecucion del programa continua (puedo no mostrar nada por pantalla ni hacer nada)
    // nos da la posibilidad de hacer algo o no a partir de detectar un error
}

console.log(numero3);

/* 
try es la parte que va a intentar hacer algo
si no puede va a caer en el catch para poder leer el error
en el ejemplo muestra que sirve para que no se corte la ejecucion del programa si el interprete de js detecta un error
*/