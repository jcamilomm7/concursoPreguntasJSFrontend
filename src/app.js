//@ts-check

//importamos todos los objetos que se requieren utilizar
import { preguntasObj } from "./data/preguntasObj.js";
import { premiosObj } from "./data/premiosObj.js";
import { rondaObj } from "./data/rondasObj.js";
import { categoriasObj } from "./data/categorias.js";
import { opcionesObj } from "./data/opcionesObj.js";
//Modelos a utilizar
import {UI} from './models/UI.js'
import { Juego } from "./models/Juego.js";

const renderPage = (juego,ui) => {
  //Si gana el juego entra aca
  if (juego.finJuego()) {
    console.log(premiosObj.score);
    console.log("perdio");
  } else if (opcionesObj.perder == true) {
    console.log("perdio juego");
  } else {
  
    rondaObj.numerorondas(preguntasObj);  

    console.log(categoriasObj[rondaObj.rondaActual - 1].categoria); //Nombre de la categoria
    
    console.log(rondaObj.numeroRondas); //Numero total de rondas
    
    console.log(premiosObj.score);  //Puntaje acumulado
    
    console.log(rondaObj.rondaActual); //Ronda actual
    
    const respuesta = juego.preguntaAlAzar(preguntasObj); //Almacenamos la pregunta al azar en variable
    
    console.log(juego.alazar, juego.cantidadPreguntas); // pregunta al azar y el total de las preguntas de la categoria
    
    const { pregunta, respuestas, correcta } = respuesta; //Destructuramos el objeto pregunta al azar

    ui.mostrarPregunta(pregunta);  //Renderiza la pregunta en el Dom

    //Aca se envia como parametro las opciones de la pregunta y recibimos mediante un callback la opcion seleccionada
    ui.mostrarOpciones(respuestas, (opcionSeleccionada) => {
      juego.respuestaCorrecta(opcionSeleccionada, correcta); // Se utiliza el metodo para saber si la respuesta fue correcta
      premiosObj.acumulado(opcionSeleccionada, correcta);  // Se utiliza el metodo para saber si la respuesta fue correcta
      rondaObj.round();
      opcionesObj.perderJuego(opcionSeleccionada, correcta);  // Se utiliza el metodo para saber si la respuesta fue correcta

      renderPage(juego, ui);   //Renderiza permanente mente el DOM
    });
  }
};
function main() {
   const ui = new UI(); 
  const juego = new Juego(preguntasObj);
  renderPage(juego,ui);
}
main();
