export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
        this.stream = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    agregarStream(stream) {
        this.stream.push(stream);
    }
    mostrarDetalle() {
        console.log("Detalle del Streamer:");
        console.log("Nombre: ", this.nickname);
        console.log("Descripcion: ", this.descripcion);
        console.log("Redes Sociales", this.redesSociales);
        console.log("Canales", this.canales);
    }
}
