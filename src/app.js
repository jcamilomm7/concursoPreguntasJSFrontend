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
/* import { AlmacenamientoJugador } from "./localStorage/AlmacenamientoJugador.js"; */


let nombre = prompt("Ingrese nombre de Jugador");
let jugadores = [];

//Mostrar datos del local storage

function mostrarLocal(){
  let storeJugadores = localStorage.getItem("localJugadores");
  if (storeJugadores === null) {
    jugadores = [];
  } else {
    jugadores = JSON.parse(storeJugadores);
    return jugadores
  }
}

/* let arrayLocal = mostrarLocal()
const table = document.querySelector("#table")
let cadena = `<tr>
<td>Nombre</td>
<td>score</td>
<td>Ronda superada</td>
<td>victoria</td>
</tr>`
arrayLocal.map((jugador)=> {
cadena += `<tr>
<td>${jugador.nombre}</td>
<td>${jugador.score}</td>
<td>${jugador.rondaSuperada}</td>
<td>${jugador.victoria}</td>
</tr>
`
})

table.innerHTML = cadena */


const renderPage = (juego, contenidoIzq, javaJuego, estado, /* almacenamiento */) => {
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
    jugadores.push(jugador);
    localStorage.setItem("localJugadores", JSON.stringify(jugadores));
  } else if (opcionesObj.perder == true) {
    premiosObj.score = 0;
    estado.perderJuego(premiosObj.score, rondaObj.rondaActual, nombre);
    const jugador = new Jugador(
      nombre,
      rondaObj.rondaActual - 2,
      premiosObj.score,
      false
    );
    jugadores.push(jugador);
    localStorage.setItem("localJugadores", JSON.stringify(jugadores));
  
  
    //Hasta aca haciendo pruebas
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

      renderPage(juego, contenidoIzq, javaJuego, estado, /* almacenamiento */); //Renderiza permanente mente el DOM
    });
  }
};
function main() {
  const juego = new Juego(preguntasObj);
  const contenidoIzq = new ContenidoIzq();
  const javaJuego = new JavaJuego();
  const estado = new EstadosJuego();
/*   const almacenamiento = new AlmacenamientoJugador(); */

  renderPage(juego, contenidoIzq, javaJuego, estado, /* almacenamiento */);
}

main();
