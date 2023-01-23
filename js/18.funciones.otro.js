// IIFE
// esta funcion esta protegiendo la variable cliente, para que no pueda ser usada accedida por fuera de ella
// este tipo de funciones se ejecutan a si mismas (por eso se ejecuta el log de la linea 6 en la consola)
(function() {
    const cliente= "lionel";
    console.log(cliente);
})();

// intente usar la constante cliente,definida arriba - no pude porque la protege una funcion IIFE 
// console.log(cliente);