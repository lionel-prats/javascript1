/* 

VIDEO 140

document hace referencia a todo lo que hay dentro de <html></html>
todas las APIs modernas que fueron agregadas a JS, por ejemplo la geolocalizacion (entre otras), todas utilizan promises
una promesa refleja un valor que podra estar disponible ahora, en un futuro o nunca
*/

// Notification es una API que existe en javaScript
// console.log(Notification);
console.log(Notification.permission);


const boton = document.getElementById("boton");

/* Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`) ) */

boton.addEventListener("click", () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`) )
});

if(Notification.permission == "granted") {
    new Notification("Hola!", {
        icon: "img/ccj.png",
        body: "Nuevo curso de JavaScript!!"
    })
    new Notification("Hola!", {
        icon: "img/ccj.png",
        body: "Descuentos en botas"
    })
    new Notification("Hola!", {
        icon: "img/ccj.png",
        body: "Falta un mes para el mundial..."
    })
}

