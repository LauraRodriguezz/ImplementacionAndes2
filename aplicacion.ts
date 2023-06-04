import { Plataforma } from "./plataforma";

export class Aplicacion{

    plataforma : Plataforma[]

    constructor(plataforma ?: Plataforma)
    {
        if(plataforma){
        this.plataforma = [plataforma]
        plataforma.agregarAplicacion(this)
        }else{
            this.plataforma = []
        }

    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma.push(plataforma)
        plataforma.agregarAplicacion(this)
    }

    listarPlataforma(){

        console.log("Listado de todas las Plataformas:");
        this.plataforma.forEach((plataforma:Plataforma) => {
        console.log("Plataforma:", plataforma);
  
      });
      }

}