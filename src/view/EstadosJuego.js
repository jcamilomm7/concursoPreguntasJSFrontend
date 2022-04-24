class EstadosJuego {
  perderJuego(score, rondaActual, nombre) {
    const contenedorEstados = document.querySelector(".borrarinformacion");
    contenedorEstados.innerHTML = "";

    let contenido = `
      <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
    
                <img src="./src/images/perderJuego.gif" alt="">
                </div>
                <div class="col-md-6">
                  <h2>Gracias por Participar</h2>
                  <h3>Recuerda que el conocimiento es la clave para el exito</h3>
                  <p>En otra oportunidad obtendras la victoria</p>
                </div>
              </div>
              </div>
              <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                <img src="./src/images/avatar.gif" alt="">
                  <h3>${nombre}</h3>
                </div>
                <div class="col-md-6">
                  <h3>Estadisticas</h3>
                  <p>Score</p>
                  <button>Score: ${score}</button>
                  <p>Rondas Superadas</p>
                  <button>Rondas Superadas: ${rondaActual - 2}</button>
                  <p>Estado</p>
                  <button>Estado: Haz perdido</button>
                </div>
              </div>
            </div>
      `;
    contenedorEstados.innerHTML = contenido;
  }
  ganarJuego(score, rondaActual, nombre) {
    const contenedorEstados = document.querySelector(".borrarinformacion");
    contenedorEstados.innerHTML = "";

    let contenido = `
      <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
               <img src="./src/images/winner.gif" alt="">
                </div>
                <div class="col-md-6">
                  <h2>FELICITACIONES</h2>
                  <h3>Gracias a tu conocimiento y concentración llegaste a la meta</h3>
                </div>
              </div>
              </div>
              <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                <img src="./src/images/avatar.gif" alt="">
                  <h3>${nombre}</h3>
                </div>
                <div class="col-md-6">
                  <h3>Estadisticas</h3>
                  
                  <h3>Score: ${score}</h3>
                  
                  <h3>Rondas Superadas: ${rondaActual}</h3>
                  
                  <h3>Estado: Haz Ganado</h3>
                </div>
              </div>
            </div>
      `;
    contenedorEstados.innerHTML = contenido;
  }
  ganarJuego(score, rondaActual, nombre) {
    const contenedorEstados = document.querySelector(".borrarinformacion");
    contenedorEstados.innerHTML = "";

    let contenido = `
      <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
               <img src="./src/images/winner.gif" alt="">
                </div>
                <div class="col-md-6">
                  <h2>FELICITACIONES</h2>
                  <h3>Gracias a tu conocimiento y concentración llegaste a la meta</h3>
                </div>
              </div>
              </div>
              <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                <img src="./src/images/avatar.gif" alt="">
                  <h3>${nombre}</h3>
                </div>
                <div class="col-md-6">
                  <h3>Estadisticas</h3>
                  
                  <h3>Score: ${score}</h3>
                  
                  <h3>Rondas Superadas: ${rondaActual - 1}</h3>
                  
                  <h3>Estado: Haz Ganado</h3>
                </div>
              </div>
            </div>
      `;
    contenedorEstados.innerHTML = contenido;
  }
  retirarseJuego(score, rondaActual, nombre) {
    const contenedorEstados = document.querySelector(".borrarinformacion");
    contenedorEstados.innerHTML = "";

    let contenido = `
      <div class="col-md-12">
              <div class="row">
                <div id="imgretirar" class="col-md-6">
                <img src="./src/images/retiro.gif" alt="">
                </div>
                <div id="textomotivacion" class="col-md-6">
                  <h2>Haz decidido no continuar</h2>
                  <h3>La vida tiene muchos obstáculos, la idea es superarlos</h3>
                  <p>¡No te rindas nunca!</p>
                </div>
              </div>
              </div>
              <div class="col-md-12">
              <div class="row">
                <div id="avatar" class="col-md-6">
                <img src="./src/images/avatar.gif" alt="">
                  <h3>Jugador: ${nombre}</h3>
                </div>
                <div class="col-md-6">
                  <h3>Estadisticas</h3>
                  
                  <h3>Score: ${score}</h3>
                  
                  <h3>Rondas Superadas: ${rondaActual - 1}</h3>
                  
                  <h3>Estado: Te haz retirado</h3>
                </div>
              </div>
            </div>
      `;
    contenedorEstados.innerHTML = contenido;
  }
}

export { EstadosJuego };
