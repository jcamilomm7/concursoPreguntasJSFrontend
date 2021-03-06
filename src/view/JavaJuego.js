import {categoriasObj} from "../data/categorias.js"

class JavaJuego {
  temaCategoria(nombreCategoria) {
    const temaCategoria = document.querySelector("#temacategoria");
    temaCategoria.textContent = `Categoría: ${nombreCategoria}`;
  }


  //debe llegar el juego.index, que es la pregunta alazar
  cargarPreguntaAlAzar(pregunta) {
    const preguntaAzar = document.querySelector("#pregunta");
    preguntaAzar.textContent = pregunta;
  }

  relacionPreguntas(index,numeroPreguntas) {
    const relacion = document.querySelector("#relacion");
    relacion.innerHTML= `<h2 class="relacionpregunta">Pregunta al azar ${index}/${numeroPreguntas}</h2>`;
  }

  mostrarOpciones(respuestas, callback) {
    const contenedorOpciones1 = document.querySelector("#respuestasCol1");
    contenedorOpciones1.innerHTML = "";
    for (let i = 0; i < respuestas.length; i++) {
      const button = document.createElement("button");
      (button.textContent = respuestas[i]), (button.className = "respuestas");

      contenedorOpciones1.append(button);

      button.addEventListener("click", () => callback(respuestas[i]));
    }
  }

  estadisticasJugador(
    nombreJugador,
    rondaActual,
    totalRondas,
    premioRonda,
    scoreTotal
  ) {
    const jugador = document.querySelector("#jugador");
    const ronda = document.querySelector("#ronda");
    const premio = document.querySelector("#premio");
    const score = document.querySelector("#score");

    jugador.textContent = `Jugador: ${nombreJugador}`;
    ronda.textContent = `Ronda:     ${rondaActual}/${totalRondas}`;
    premio.textContent = `Premio:   $${premioRonda}`;
    score.textContent = `Score:     $${scoreTotal}`;
  }
}
export { JavaJuego };
