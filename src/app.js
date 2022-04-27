//importamos todos los objetos que se requieren utilizar
/* import { preguntasObj } from "./data/questionsObj.js" */
import { premiosObj } from "./data/premiosObj.js";
import { rondaObj } from "./data/rondasObj.js";
import { categoriasObj } from "./data/categorias.js";
import { opcionesObj } from "./data/opcionesObj.js";
import { enviar } from "./localStore/estadisticasJuego.js";
import { guardarEstadisticas } from "./data/registroEstadisticas.js";
import { alamcenarPreguntasLocalStorage } from "./data/preguntasObj.js";

//Modelos a utilizar
import { Juego } from "./models/Juego.js";
import { ContenidoIzq } from "./view/ContenidoIzq.js";
import { JavaJuego } from "./view/JavaJuego.js";
import { EstadosJuego } from "./view/EstadosJuego.js";
import { Jugador } from "./models/Jugador.js";

alamcenarPreguntasLocalStorage();
let storeJugadores = localStorage.getItem("localPreguntas");
let preguntasObj = JSON.parse(storeJugadores);

//Llamar nombre del localStorage
function localNombreJugador() {
  let storeNombreJugador = localStorage.getItem("localNombreJugador");
  if (storeNombreJugador === null) {
    storeNombreJugador = {};
  } else {
    storeNombreJugador = JSON.parse(storeNombreJugador);
    return storeNombreJugador;
  }
}
let nombre = localNombreJugador().nombre;

const renderPage = (juego, contenidoIzq, javaJuego, estado) => {
  const buttonretirar = document.querySelector("#buttonretirar");

  buttonretirar.addEventListener("click", retiro, false);

  function retiro() {
    const jugador = new Jugador(
      nombre,
      rondaObj.rondaActual - 1,
      premiosObj.score,
      false
    );
    estado.retirarseJuego(premiosObj.score, rondaObj.rondaActual, nombre);
    guardarEstadisticas(jugador);
    enviar(jugador);
  }

  //Si gana el juego entra aca

  if (juego.finJuego()) {
    estado.ganarJuego(premiosObj.score, rondaObj.rondaActual, nombre);
    const jugador = new Jugador(
      nombre,
      rondaObj.rondaActual - 1,
      premiosObj.score,
      true
    );
    enviar(jugador);
    guardarEstadisticas(jugador);
  } else if (opcionesObj.perder == true) {
    premiosObj.score = 0;
    estado.perderJuego(premiosObj.score, rondaObj.rondaActual, nombre);
    const jugador = new Jugador(
      nombre,
      rondaObj.rondaActual - 2,
      premiosObj.score,
      false
    );
    enviar(jugador);
    guardarEstadisticas(jugador);
    //Hasta aca haciendo pruebas
  } else {
    contenidoIzq.cargarLogo("./src/images/logoSofka.png", "Sofka U");

    rondaObj.numerorondas(preguntasObj);
    
    javaJuego.temaCategoria(categoriasObj[rondaObj.rondaActual - 1].categoria);
   
    /*  javaJuego.relacionPreguntas(juegoJava.index,rondaObj.numeroRondas) */

    const respuesta = juego.preguntaAlAzar(preguntasObj); //Almacenamos la pregunta al azar en variable

    const { pregunta, respuestas, correcta } = respuesta; //Destructuramos el objeto pregunta al azar

    const premioAGanarCategoria = premiosObj.premioPorCategoria(); //Obtenemos el premio a ganar de cada categoria

    contenidoIzq.premioDinamico(rondaObj.rondaActual, premioAGanarCategoria);

    javaJuego.cargarPreguntaAlAzar(pregunta);
    javaJuego.relacionPreguntas(
      juego.entregaIndicePreguntaAlazar(),
      preguntasObj[rondaObj.rondaActual - 1].length
      
    );
  
    javaJuego.estadisticasJugador(
      nombre,
      rondaObj.rondaActual,
      rondaObj.numeroRondas,
      premioAGanarCategoria,
      premiosObj.score
    );

    // ui.mostrarPregunta(pregunta);  //Renderiza la pregunta en el Dom

    //Aca se envia como parametro las opciones de la pregunta y recibimos mediante un callback la opcion seleccionada
    javaJuego.mostrarOpciones(respuestas, (opcionSeleccionada) => {
      juego.respuestaCorrecta(opcionSeleccionada, correcta); // Se utiliza el metodo para saber si la respuesta fue correcta
      premiosObj.acumulado(opcionSeleccionada, correcta); // Se utiliza el metodo para saber si la respuesta fue correcta
      rondaObj.round();
      opcionesObj.perderJuego(opcionSeleccionada, correcta); // Se utiliza el metodo para saber si la respuesta fue correcta

      renderPage(juego, contenidoIzq, javaJuego, estado); //Renderiza permanente mente el DOM
    });
  }
};
function main() {
  const juego = new Juego(preguntasObj);
  const contenidoIzq = new ContenidoIzq();
  const javaJuego = new JavaJuego();
  const estado = new EstadosJuego();

  renderPage(juego, contenidoIzq, javaJuego, estado);
}

main();
