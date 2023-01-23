





function descargarNuevosClientes() {
    return new Promise( resolve => { 
        console.log("descargando clientes... espere...");
        setTimeout(() => {
            resolve([{nombre: "lionel", edad: 37},{nombre: "lupi", edad: 36}])
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => { 
        console.log("descargando pedidos... espere...");
        setTimeout(() => {
            resolve([{usuario: "victor", producto: "celular", cantidad: 1},{nombre: "ramon", producto: "tablet", cantidad: 4}])
        }, 3000);
    });
}


function mostrarClientes(resultado) {
    resultado.forEach(element => {
        console.log(`El cliente ${element.nombre} tiene ${element.edad} años.`);
    });
}

async function app() {
    try {
        /*
        const clientes= await descargarNuevosClientes();
        console.log(clientes);
        const pedidos= await descargarUltimosPedidos();
        //mostrarClientes(resultado);
        console.log(pedidos);
        */
       const resultado= await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
       console.log(resultado[0]);
       console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

//console.log("sigue la ejecucion del codigo mientras se descargan los clientes...");

/*
demostracion de que a cuando se cumple la ultima promesa, la funcion app() pone a disposicion los resultados
con Promise.all disponemos de toda la informacion a los 5 segundos
sin Promise.all disponemos de toda la informacion a los 8 segundos

let contador=0;
setInterval(() => {
    contador++;
    console.log(contador);
}, 1000);
*/