import { Plataforma } from "./plataforma.js"
import { Streamer } from "./streamer.js"
import { Stream } from "./stream.js"

export class Canal{

    nombre : string
    banner:string
    informacion : string

    plataforma : Plataforma  | undefined
    streamer: Streamer
    stream : Stream []


    constructor(nombre:string, banner:string,streamer:Streamer,informacion:string){

        this.nombre = nombre
        this.banner = banner
        this.streamer = streamer
        streamer.agregarCanal(this)
        this.informacion = informacion
        this.stream = []
        
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma = plataforma
    }

    agregarStream(stream:Stream){
        this.stream.push(stream)
    }

    listarStream(){

        console.log("Listado de todos los streamings:");
        this.stream.forEach((stream : Stream) => {
        console.log("Streamings:", stream);
  
      });
      }

      mostrarDetalle(){
        console.log("Detalle del canal:")
        console.log("Nombre: ", this.nombre)
        console.log("Banner: ", this.banner)
        console.log("Informacion: ", this.informacion)
        console.log("Plataforma", this.plataforma)
        console.log("Streamings", this.listarStream())
        console.log("Streamers", this.streamer)
        
    }

   
}