import { Aplicacion } from "./aplicacion.js"
import { Canal } from "./canal.js"
import { Streamer } from "./streamer.js"
export class Plataforma{

    nombre:string
    logo:string
    descripcion:string
    empresa:string

    aplicacion:Aplicacion | undefined
    canales : Canal []
    streamers : Streamer []

    constructor(nombre:string,logo:string,descripcion:string,empresa:string){

        this.nombre = nombre
        this.logo = logo
        this.descripcion = descripcion
        this.empresa = empresa
        this.canales = []
        this.streamers = []

    }

    agregarAplicacion(aplicacion:Aplicacion){
        this.aplicacion = aplicacion
    }
    agregarCanal(canal:Canal)
    {
        this.canales.push(canal)
        canal.agregarPlataforma(this)
        
        
    }

    listarCanal(){

        console.log("Listado de todos los Canales:");
        this.canales.forEach((canales:Canal) => {
        console.log("Canales:", canales);
  
      });
      }

      agregarStreamer(streamer : Streamer)
    {
        this.streamers.push(streamer)
        streamer.agregarPlataforma(this)
    
        
        
    }

      listarStreamer(){

        console.log("Listado de todos los streamers:");
        this.streamers.forEach((streamers : Streamer) => {
        console.log("Streamers:", streamers);
  
      });
      }

      mostrarDetalle(){
        console.log("Detalle del la plataforma:")
        console.log("Nombre: ", this.nombre)
        console.log("Logo: ", this.logo)
        console.log("Descripcion: ", this.descripcion)
        console.log("Empresa", this.empresa)
        console.log("Canales", this.listarCanal())
        console.log("Streamers", this.listarStreamer())
        
    }






}