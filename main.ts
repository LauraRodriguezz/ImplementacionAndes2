import { Aplicacion } from "./aplicacion.js";
import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";
import { Plataforma } from "./plataforma.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";

let aplicacion = new Aplicacion()
let plataforma1 = new Plataforma("Twitch","LogoTwitch.png","Plataforma de streaming","Patrocinador")
let streamer1 = new Streamer("Pepito","Creador de contenido","Instagram : pepito_22")
let canal1 = new Canal("Mimundo","Canal de entretenimiento",streamer1,"Canal de canales")
let categoria1 = new Categoria("VideoJuegos","Streamings de videojuegos", "ImagenVideoJuegos.png")
let categoria2 = new Categoria("Terror", "Cultivo de miedo","ImagenTerror.png")
let stream1 = new Stream(new Date,"2 hrs",canal1,categoria1)

aplicacion.agregarPlataforma(plataforma1)
aplicacion.listarPlataforma()

plataforma1.agregarCanal(canal1)
plataforma1.listarCanal()

plataforma1.agregarStreamer(streamer1)
plataforma1.listarStreamer()
plataforma1.mostrarDetalle()

canal1.agregarStream(stream1)
canal1.listarStream()
canal1.mostrarDetalle()


streamer1.mostrarDetalle()
streamer1.agregarCanal(canal1)
streamer1.agregarStream(stream1)

stream1.agregarCategoria(categoria2)
stream1.mostrarDetalle()

