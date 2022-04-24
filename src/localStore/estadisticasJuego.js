
let jugadores = []

export function mostrarLocal(){
    let storeJugadores = localStorage.getItem("localJugadores");
    if (storeJugadores === null) {
      jugadores = [];
    } else {
      jugadores = JSON.parse(storeJugadores);
      return jugadores
    }
  }


export function enviar(jugador){
    
  jugadores.push(jugador)
  almacenarLocalStorage(jugadores)

}

function almacenarLocalStorage(jugadores){
    localStorage.setItem('localJugadores',JSON.stringify(jugadores))
}