class Pregunta {
  /**
   *
   * @param {String} pregunta  Seria la pregunta
   * @param {Array} respuestas  Es un array con las opciones de respuesta
   * @param {String} correcta
   */
  constructor(pregunta, respuestas, correcta) {
    this.pregunta = pregunta;
    this.respuestas = respuestas;
    this.correcta = correcta;
  }

  correctAnswer(respuesta) {
    return respuesta === this.correcta;
  }
}

export { Pregunta };
