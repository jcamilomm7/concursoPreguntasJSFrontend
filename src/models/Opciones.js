class Opciones {
  /**
   *
   * @param {boolean} ganarRonda
   * @param {boolean} retiroVoluntario
   * @param {boolean} perder
   * @param {boolean} ganarJuego
   */
  constructor(ganarRonda, retiroVoluntario, perder, ganarJuego) {
    this.ganarJuego = ganarRonda;
    this.retiroVoluntario = retiroVoluntario;
    this.perder = perder;
    this.ganarJuego = ganarJuego;
  }

  perderJuego(opcionSeleccionada, correcta) {
    if (opcionSeleccionada != correcta) {
      this.perder = true;
    }
  }
}

export { Opciones };
