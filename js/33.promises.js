/* 
todas las APIs modernas que fueron agregadas a JS, por ejemplo la geolocalizacion (entre otras), todas utilizan promises
una promesa refleja un valor que podra estar disponible ahora, en un futuro o nunca
*/

/* 
en los promises existen 3 valores
pending: el promise no se ha cumplido pero tampoco se ha rechazado
fulfilled: ya se cumplio
rejected: se ha rechazado o no se pudo cumplir
*/

const usuarioAutenticado= new Promise( (resolve, reject) => { 
    /* 
    los parametros resolve y reject son funciones 
    resolve se va a ejecutar cuando el promise se cumple
    resolve y reject son nombres, pueden variar
    el orden es importante
    el primer parametro esta a asociado a una promesa cumplida
    el segundo parametro esta a asociado a una promesa rechazada 
    */
    const auth= 0;
    
    if(auth){
        resolve("usuario autenticado"); // el promise se cumple
    } else {        
        reject("no se pudo iniciar sesion"); // el promise no se cumple
    }
});

console.log(usuarioAutenticado);
usuarioAutenticado
    .then( function(resultado) { // si la promesa se cumplio, entra a este .then, que representa a la funcion resolve dentro del promise
        console.log(`ejecucion del resolve => "${resultado}" (ejecucion del .then)`);
    })
    .catch(function(error){ // si la promesa no se cumplio, entra a este .catch, que representa a la funcion reject dentro del promise
        console.log(`ejecucion del reject => "${error}" (ejecucion del .catch)`);
    })
    // el .catch es para manejar la promesa rechazada (por ejemplo, no se corta la ejecucion - igual que el try catch -)
    
console.log("continua la ejecucion");

