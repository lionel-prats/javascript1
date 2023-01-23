// JSON JavaScript Object Notation
// fetch('http://www.google.com/api')

/*
// fetch con promesas
function obtenerEmpleados() {
    const url= 'js/37.empleados.json';
    fetch(url)
        .then( resultado => resultado.json() )
        .then( datos => {
            const { empleados } = datos;
            datos.empleados.forEach(element => {
                document.querySelector(".contenido").innerHTML+= `<br>${element.nombre}`;
            });
        });
}
*/

// fetch con async await
async function obtenerEmpleados() {
    const url= 'js/37.empleados.json';
    const resultado = await fetch(url);
    const datos = await resultado.json();
    const { empleados } = datos;
    datos.empleados.forEach(element => {
        document.querySelector(".contenido").innerHTML+= `<br>${element.nombre}`;
    });
}

obtenerEmpleados();






