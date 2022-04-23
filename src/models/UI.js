
import {
  resultados,
  fraseDespedidaRetiro,
  finJuego,
  perderJuego,
  resultados2,
  resultadosRetiro
} from "../utilities/funciones.js";

export class UI {
  /**
   *
   * @param {String} Este metodo me renderiza la pregunta en cada categoria
   */
  mostrarPregunta(pregunta) {
    //traemos la etiqueta titulo
    const preguntaTexto = document.querySelector("#question");
    preguntaTexto.textContent = pregunta;
  }

  /**
   *
   * @param {String} respuestas Array de respuestas
   * @param {String} callback me devuelve el valor de la respuesta del button que selecciono el jugador
   */
  mostrarOpciones(respuestas, callback) {
    const contenedorOpciones = document.querySelector("#choices");
    //se podria aplicar un metodo mejor
    contenedorOpciones.innerHTML = "";
    for (let i = 0; i < respuestas.length; i++) {
      const button = document.createElement("button");
      (button.textContent = respuestas[i]), (button.className = "respuestas");
      contenedorOpciones.append(button);
      button.addEventListener("click", () => callback(respuestas[i]));
    }
  }
  /**
   *
   * @param {Float} score
   */
  mostrarScores(score) {
    const element = document.querySelector("#acumulado");
    element.textContent = `$${score}`;
  }
  /**
   *
   * @param {Int} rondaActual
   */
  rondaActual(rondaActual) {
    const element = document.querySelector("#categoriaactual");
    element.textContent = rondaActual;
  }

  /**
   *Muestra el total de rondas
   * @param {Int} numeroRonda
   */
  numeroRonda(numeroRondas) {
    const element = document.querySelector("#totalcategorias");
    element.textContent = numeroRondas;
  }
  /**
   *
   * @param {String} areaCategoria
   */
  areaCategoria(areaCategoria) {
    const element = document.querySelector("#areacategoria");
    element.textContent = areaCategoria;
  }
  
  /**
   * 
   * @param {int*} indice Pregunta aleatoria de una categoria
   * @param {int*} total  total de preguntas de esa categoria
   */
  numeroPreguntaAlazar(indice, total) {
    let cadena = `
    ${indice}/${total}
    `;
    const element = document.querySelector("#alazar");
    element.textContent = cadena;
  }

  //Cuando el jugador pierde el juego se ejecutan estas funciones
  perderJuego() {
    resultados2()
    perderJuego();
    
  }

  //Cuando el jugador decide retirarse se ejecutan estas funciones para renderizar en el Dom
  retiroVoluntario() {
    fraseDespedidaRetiro();
    resultadosRetiro(); //Esta funcion me crea las estadisticas finales del concurso
  }
  //Cuando el jugador gana el juego se ejecutan estas funciones
  finJuego() {
    finJuego();
    resultados(); //Esta funcion me crea las estadisticas finales del concurso
  }
}
