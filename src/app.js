//@ts-check

//importamos todos los objetos que se requieren utilizar
import { preguntasObj } from "./data/preguntasObj.js";
import { premiosObj } from "./data/premiosObj.js";
import { rondaObj } from "./data/rondasObj.js";
import { categoriasObj } from "./data/categorias.js";
import { opcionesObj } from "./data/opcionesObj.js";

//Modelos a utilizar

import { Juego } from "./models/Juego.js";
import { ContenidoIzq } from "./view/ContenidoIzq.js";
import { JavaJuego } from "./view/JavaJuego.js";
import { EstadosJuego } from "./view/EstadosJuego.js";
import { Jugador } from "./models/Jugador.js";
import { AlmacenamientoJugador } from "./localStorage/AlmacenamientoJugador.js";

let nombre = prompt("Ingrese nombre de Jugador");

const renderPage = (juego, contenidoIzq, javaJuego, estado, almacenamiento) => {
  const buttonretirar = document.querySelector("#buttonretirar");

  buttonretirar.addEventListener("click", retiro, false);

  function retiro() {
    estado.retirarseJuego(premiosObj.score, rondaObj.rondaActual, nombre);
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
  } else if (opcionesObj.perder == true) {
    premiosObj.score = 0;
    estado.perderJuego(premiosObj.score, rondaObj.rondaActual, nombre);
    const jugador = new Jugador(
      nombre,
      rondaObj.rondaActual - 2,
      premiosObj.score,
      false
    );
    almacenamiento.guardar(jugador);

    almacenamiento.mostrar();
    console.log(almacenamiento.mostrar());
  } else {
    contenidoIzq.cargarLogo("./src/images/logo-sofkau.webp", "Sofka U");

    rondaObj.numerorondas(preguntasObj);

    javaJuego.temaCategoria(categoriasObj[rondaObj.rondaActual - 1].categoria);

    javaJuego.relacionPreguntas(rondaObj.rondaActual, rondaObj.numeroRondas);

    const respuesta = juego.preguntaAlAzar(preguntasObj); //Almacenamos la pregunta al azar en variable

    const { pregunta, respuestas, correcta } = respuesta; //Destructuramos el objeto pregunta al azar

    const premioAGanarCategoria = premiosObj.premioPorCategoria(); //Obtenemos el premio a ganar de cada categoria

    contenidoIzq.premioDinamico(rondaObj.rondaActual, premioAGanarCategoria);

    javaJuego.cargarPreguntaAlAzar(pregunta);

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

      renderPage(juego, contenidoIzq, javaJuego, estado, almacenamiento); //Renderiza permanente mente el DOM
    });
  }
};
function main() {
  const juego = new Juego(preguntasObj);
  const contenidoIzq = new ContenidoIzq();
  const javaJuego = new JavaJuego();
  const estado = new EstadosJuego();

  const almacenamiento = new AlmacenamientoJugador();

  renderPage(juego, contenidoIzq, javaJuego, estado, almacenamiento);
}

main();
