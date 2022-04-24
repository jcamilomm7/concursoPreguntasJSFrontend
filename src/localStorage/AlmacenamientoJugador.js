let jugadores = [];

class AlmacenamientoJugador {
  guardar(jugador) {
    jugadores.push(jugador);

    almacenarLocalStorage(jugadores);
  }
  almacenarLocalStorage(jugadores) {
    localStorage.setItem("registroJugadores", JSON.stringify(jugadores));
  }

  mostrar() {
    let storeJugadores = localStorage.getItem("registroJugadores");
    if (storeJugadores === null) {
      jugadores = [];
    } else {
      jugadores = JSON.parse(storeJugadores);
      return jugadores;
    }
  }
}
export { AlmacenamientoJugador };
