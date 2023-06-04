export class Plataforma {
    constructor(nombre, logo, descripcion, empresa) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.canales = [];
        this.streamers = [];
    }
    agregarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
    }
    agregarCanal(canal) {
        this.canales.push(canal);
        canal.agregarPlataforma(this);
    }
    listarCanal() {
        console.log("Listado de todos los Canales:");
        this.canales.forEach((canales) => {
            console.log("Canales:", canales);
        });
    }
    agregarStreamer(streamer) {
        this.streamers.push(streamer);
        streamer.agregarPlataforma(this);
    }
    listarStreamer() {
        console.log("Listado de todos los streamers:");
        this.streamers.forEach((streamers) => {
            console.log("Streamers:", streamers);
        });
    }
    mostrarDetalle() {
        console.log("Detalle del la plataforma:");
        console.log("Nombre: ", this.nombre);
        console.log("Logo: ", this.logo);
        console.log("Descripcion: ", this.descripcion);
        console.log("Empresa", this.empresa);
        console.log("Canales", this.listarCanal());
        console.log("Streamers", this.listarStreamer());
    }
}
