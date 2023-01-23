/*
setTimeout(() => {
    console.log("set timeout...");
}, 5000);
*/
/*
setInterval(() => {
    console.log("set interval...");
}, 1000);
*/

/*
const usuarioAutenticado= new Promise( (resolve, reject) => { 
    const auth= 0;
    if(auth){
        resolve("usuario autenticado"); // el promise se cumple
    } else {        
        reject("no se pudo iniciar sesion"); // el promise no se cumple
    }
});

usuarioAutenticado
    .then( function(resultado) { 
        console.log(`ejecucion del resolve => "${resultado}" (ejecucion del .then)`);
    })
    .catch(function(error){
        console.log(`ejecucion del reject => "${error}" (ejecucion del .catch)`);
    })
*/

function descargarNuevosClientes() {
    return new Promise( resolve => { 
        console.log("descargando clientes... espere...");
        setTimeout(() => {
            // respuesta de la busqueda en la base de datos
            resolve([{nombre: "lionel", edad: 37},{nombre: "lupi", edad: 36}])
        }, 5000);
    });
}

function mostrarClientes(resultado) {
    resultado.forEach(element => {
        console.log(`El cliente ${element.nombre} tiene ${element.edad} años.`);
    });
}

async function app() {
    try {
        // este bloque se ejecutara si la promesa se cumple
        console.log("estoy dentro del try y me ejecuto porque estoy antes del await");
        const resultado= await descargarNuevosClientes();
        mostrarClientes(resultado);
        console.log("estoy dentro del try pero me ejecuto despues de que la promesa se cumple");
    } catch (error) {
        console.log(error);
    }
}

app();

console.log("sigue la ejecucion del codigo mientras se descargan los clientes...");