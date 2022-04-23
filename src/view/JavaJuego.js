class JavaJuego {
  temaCategoria(nombreCategoria) {
    const temaCategoria = document.querySelector("#temacategoria");
    temaCategoria.textContent = nombreCategoria;
  }

  cargarPreguntaAlAzar(pregunta) {
    const preguntaAzar = document.querySelector("#pregunta");
    preguntaAzar.textContent = pregunta;
  }

  relacionPreguntas(rondaActual, totalRondas) {
    const relacion = document.querySelector("#relacion");
    relacion.textContent = `${rondaActual}/${totalRondas}`;
  }

  mostrarOpciones(respuestas, callback) {
    const contenedorOpciones1 = document.querySelector("#respuestasCol1");
    const contenedorOpciones2 = document.querySelector("#respuestasCol2");
    contenedorOpciones1.innerHTML = "";
    contenedorOpciones2.innerHTML = "";
    for (let i = 0; i < respuestas.length; i++) {
      const button = document.createElement("button");
      (button.textContent = respuestas[i]), (button.className = "respuestas");
      if (i < 2) {
        contenedorOpciones1.append(button);
      } else {
        contenedorOpciones2.append(button);
      }

      button.addEventListener("click", () => callback(respuestas[i]));
    }
  }

  estadisticasJugador(nombreJugador, rondaActual, totalRondas, premioRonda, scoreTotal){
      const jugador = document.querySelector("#jugador");
      const ronda = document.querySelector("#ronda");
      const premio = document.querySelector("#premio");
      const score = document.querySelector("#score");
      
      jugador.value = nombreJugador;
      ronda.value = `${rondaActual}/${totalRondas}`;
      premio.value = `$${premioRonda}`;
      score.value = `$${scoreTotal}`;

      jugador.readOnly = "readonly";
      ronda.readOnly = "readonly";
      premio.readOnly = "readonly";
      score.readOnly = "readonly";
         
  }
}
export { JavaJuego };
