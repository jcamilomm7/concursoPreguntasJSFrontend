import { premiosObj } from "../data/premiosObj.js";
import { rondaObj } from "../data/rondasObj.js"; 
class Premio {
  index = 0;
  score = 0;
  acertadas = 0;
  /**
   *
   * @param {Array} premios En el arrayn vienen los premios de todas las categorias
   * @param {int} campeon Es el premio del jugador que gana la partida
   */
  constructor(premios, campeon) {
    this.premios = premios;
    this.campeon = campeon;
  }

  acumulado(opcionSeleccionada, correcta) {
    if (opcionSeleccionada == correcta) {
      this.score += premiosObj.premios[this.index];
      this.index++;
      this.acertadas++;
    }
    if (this.index === rondaObj.numeroRondas) {  
      this.score += premiosObj.campeon;
    }
  }
}

export { Premio };
