export class Canal {
    constructor(nombre, banner, streamer, informacion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        streamer.agregarCanal(this);
        this.informacion = informacion;
        this.stream = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarStream(stream) {
        this.stream.push(stream);
    }
    listarStream() {
        console.log("Listado de todos los streamings:");
        this.stream.forEach((stream) => {
            console.log("Streamings:", stream);
        });
    }
    mostrarDetalle() {
        console.log("Detalle del canal:");
        console.log("Nombre: ", this.nombre);
        console.log("Banner: ", this.banner);
        console.log("Informacion: ", this.informacion);
        console.log("Plataforma", this.plataforma);
        console.log("Streamings", this.listarStream());
        console.log("Streamers", this.streamer);
    }
}
