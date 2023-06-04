export class Aplicacion {
    constructor(plataforma) {
        if (plataforma) {
            this.plataforma = [plataforma];
            plataforma.agregarAplicacion(this);
        }
        else {
            this.plataforma = [];
        }
    }
    agregarPlataforma(plataforma) {
        this.plataforma.push(plataforma);
        plataforma.agregarAplicacion(this);
    }
    listarPlataforma() {
        console.log("Listado de todas las Plataformas:");
        this.plataforma.forEach((plataforma) => {
            console.log("Plataforma:", plataforma);
        });
    }
}
