const reproductor = {
    reproducir: function(id){
        console.log(`reproduciendo cancion con el id ${id}`);
        return null;
    },
    pausar: function(){
        console.log("pausando");
    },
    crearPlaylist: function(nombre){
        console.log(`creando la playlsist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo la playlsist ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`eliminando la cancion ${id}`);
}

console.log(reproductor);
console.log(reproductor.reproducir(3840));
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("heavy metal");
reproductor.reproducirPlaylist("bachata");