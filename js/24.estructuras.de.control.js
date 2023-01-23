/*
const puntaje = 1000;

if(puntaje !== 1000) {
    console.log(`el puntaje es ${puntaje}`);
} else {
    console.log("no es igual");
}
*/

/*
const efectivo= 750;
const carrito= 800;

if (efectivo >= carrito) {
    console.log("el usuario puede pagar");
} else {
    console.log("fondos insuficientes");
}
*/

const rol= "ADMINISTRADOR";

// console.log( rol === "ADMINISTRADOR" ? "acceso a todo el sistema" : "acceso denegado" );

if (rol == "ADMINISTRADOR") {
    console.log("acceso a todo el sistema"); 
} else if (rol == "EDITOR"){
    console.log("eres editor, puedes entrar, pero no puedes hacer mucho");
} else {
    console.log("acceso denegado");
}