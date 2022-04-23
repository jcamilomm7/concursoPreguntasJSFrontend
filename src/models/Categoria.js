import { preguntasObj } from "../data/preguntasObj.js";

class Categoria {
  /**
   *
   * @param {*String} categoria Tema de cada categoria
   * @param {*Number} numeroPreguntas
   */
  constructor(categoria, numeroPreguntas) {
    this.categoria = categoria ;
    this.numeroPreguntas = numeroPreguntas;
  }

  numeroPreguntasCategoria() {
    for (let i = 0; i < preguntasObj.length; i++) {
      this.categoria = preguntasObj.length;
    }
  }
}
export { Categoria };
