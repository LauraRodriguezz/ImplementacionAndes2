import { Canal } from "./canal.js"
import { Plataforma } from "./plataforma.js"
import { Stream } from "./stream.js"

export class Streamer{

    nickname:string
    descripcion:string
    redesSociales:string
    plataforma : Plataforma  | undefined

    canales : Canal []
    stream : Stream []
    
    constructor(nickname:string,descripcion:string,redesSociales:string){

        this.nickname = nickname
        this.descripcion = descripcion
        this.redesSociales = redesSociales
        this.canales = []
        this.stream = []
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma = plataforma
    }

    agregarCanal(canal:Canal)
    {
        this.canales.push(canal)
    }

    agregarStream(stream:Stream){
        this.stream.push(stream)
    }

    mostrarDetalle(){
        console.log("Detalle del Streamer:")
        console.log("Nombre: ", this.nickname)
        console.log("Descripcion: ", this.descripcion)
        console.log("Redes Sociales", this.redesSociales)
        console.log("Canales", this.canales)
        
    }
}