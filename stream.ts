import { Categoria } from "./categoria"
import { Canal } from "./canal.js"

export class Stream{

    fecha:Date
    duracion:string

    canal:Canal
    categorias:Categoria[]

    constructor(fecha:Date, duracion:string,canal:Canal, categoria:Categoria){
        this.fecha = fecha
        this.duracion = duracion
        this.canal = canal
        this.canal.agregarStream(this)
        this.categorias = [categoria]
    }

    agregarCategoria(categoria:Categoria){
        this.categorias.push(categoria)
    }

    mostrarDetalle(){
        console.log("Detalle del stream:")
        console.log("Fecha: ", this.fecha)
        console.log("Duración: ", this.duracion)
        console.log("Canal: ", this.canal)
        console.log("Categoria", this.categorias)
     
        
    }
}