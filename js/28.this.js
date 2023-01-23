// This

// Object Literal
const reservacion= {
    nombre: "Juan",
    apellido: "De La Torre",
    total: 5000,
    pagado: false, 
    informacion: function(nombre){
        console.log(`El usuario ${nombre} pide información del cliente ${reservacion.nombre} ${reservacion.apellido}`);
    },
    arrowFunction: () => console.log(this),
    conventionalFunction: function(){ console.log(this);}
}

const reservacion2= {
    nombre: "Pedro",
    apellido: "Martinez",
    total: 5000,
    pagado: false, 
    informacion: function(nombre){
        console.log(`El usuario ${nombre} pide información del cliente ${this.nombre} ${this.apellido}`);
    }
}

reservacion.informacion("Lionel");
reservacion2.informacion("Daniel");

window.aladin= "lamela";
console.log(window.aladin);

// el this en un metodo arrow function hace referencia al objeto window
reservacion.arrowFunction();

// el this en un metodo "normal" hace referencia al objeto al que pertenece el metodo
reservacion.conventionalFunction();




