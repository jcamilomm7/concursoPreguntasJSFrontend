import { rondaObj } from "../data/rondasObj.js";


class Ronda {
  /**
   *
   * @param {Int} numeroRondas
   * @param {Int} rondaActual
   */
  constructor(numeroRondas, rondaActual) {
    this.numeroRondas = numeroRondas;
    this.rondaActual = rondaActual;
  }

  round() {
    rondaObj.rondaActual++;
  }

  numerorondas(preguntasObj) {
   this.numeroRondas = preguntasObj.length;  
  }
}

export { Ronda };
