export class Stream {
    constructor(fecha, duracion, canal, categoria) {
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal;
        this.canal.agregarStream(this);
        this.categorias = [categoria];
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    mostrarDetalle() {
        console.log("Detalle del stream:");
        console.log("Fecha: ", this.fecha);
        console.log("Duración: ", this.duracion);
        console.log("Canal: ", this.canal);
        console.log("Categoria", this.categorias);
    }
}
