export class Categoria {
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.streamings = [];
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
}
