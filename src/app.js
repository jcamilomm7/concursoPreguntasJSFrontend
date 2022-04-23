//@ts-check

//importamos todos los objetos que se requieren utilizar
import { preguntasObj } from "./data/preguntasObj.js";
import { premiosObj } from "./data/premiosObj.js";
import { rondaObj } from "./data/rondasObj.js";
import { categoriasObj } from "./data/categorias.js";
import { opcionesObj } from "./data/opcionesObj.js";
//Modelos a utilizar

import { Juego } from "./models/Juego.js";
import {ContenidoIzq} from "./view/ContenidoIzq.js";
import {JavaJuego} from "./view/JavaJuego.js"

//let nombre = prompt("Ingrese nombre de Jugador")

const renderPage = (juego, contenidoIzq, javaJuego) => {

  //Si gana el juego entra aca
  if (juego.finJuego()) {
    console.log(premiosObj.score);
    const contenedor = document.querySelector(".containerJavaPrincipal");
    contenedor.textContent = "";
  } else if (opcionesObj.perder == true) {
    console.log("perdio juego");
  } else {
    

    contenidoIzq.cargarLogo("./src/images/logo-sofkau.webp", "Sofka U")
  
    rondaObj.numerorondas(preguntasObj);  

    console.log(categoriasObj[rondaObj.rondaActual - 1].categoria); //Nombre de la categoria
    
    javaJuego.temaCategoria(categoriasObj[rondaObj.rondaActual - 1].categoria);
    
    console.log(rondaObj.numeroRondas); //Numero total de rondas
    
    console.log(premiosObj.score);  //Puntaje acumulado
    
    console.log(rondaObj.rondaActual); //Ronda actual

    javaJuego.relacionPreguntas(rondaObj.rondaActual, rondaObj.numeroRondas)
    
    const respuesta = juego.preguntaAlAzar(preguntasObj); //Almacenamos la pregunta al azar en variable
    
    console.log(juego.alazar, juego.cantidadPreguntas); // pregunta al azar y el total de las preguntas de la categoria
    
    const { pregunta, respuestas, correcta } = respuesta; //Destructuramos el objeto pregunta al azar

    const premioAGanarCategoria = premiosObj.premioPorCategoria(); //Obtenemos el premio a ganar de cada categoria

    contenidoIzq.premioDinamico(rondaObj.rondaActual, premioAGanarCategoria)
    
    javaJuego.cargarPreguntaAlAzar(pregunta)

    javaJuego.estadisticasJugador("nombre", rondaObj.rondaActual, rondaObj.numeroRondas, premioAGanarCategoria, premiosObj.score)

   // ui.mostrarPregunta(pregunta);  //Renderiza la pregunta en el Dom

    //Aca se envia como parametro las opciones de la pregunta y recibimos mediante un callback la opcion seleccionada
    javaJuego.mostrarOpciones(respuestas, (opcionSeleccionada) => {
      juego.respuestaCorrecta(opcionSeleccionada, correcta); // Se utiliza el metodo para saber si la respuesta fue correcta
      premiosObj.acumulado(opcionSeleccionada, correcta);  // Se utiliza el metodo para saber si la respuesta fue correcta
      rondaObj.round();
      opcionesObj.perderJuego(opcionSeleccionada, correcta);  // Se utiliza el metodo para saber si la respuesta fue correcta

      renderPage(juego, contenidoIzq, javaJuego);   //Renderiza permanente mente el DOM
    });
  }
};
function main() {
    
  const juego = new Juego(preguntasObj);
  const contenidoIzq = new ContenidoIzq();
  const javaJuego = new JavaJuego();
  
  renderPage(juego, contenidoIzq, javaJuego);
  
}

main();
