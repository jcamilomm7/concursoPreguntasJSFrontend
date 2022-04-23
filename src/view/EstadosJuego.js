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
                  <button>${score}</button>
                  <p>Rondas Superadas</p>
                  <button>${rondaActual - 2}</button>
                  <p>Estado</p>
                  <button>Haz perdido</button>
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
                  <p>Score</p>
                  <button>${score}</button>
                  <p>Rondas Superadas</p>
                  <button>${rondaActual}</button>
                  <p>Estado</p>
                  <button>Haz Ganado</button>
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
                  <p>Score</p>
                  <button>${score}</button>
                  <p>Rondas Superadas</p>
                  <button>${rondaActual - 1}</button>
                  <p>Estado</p>
                  <button>Haz Ganado</button>
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
                <div class="col-md-6">
                <img src="./src/images/retiro.gif" alt="">
                </div>
                <div class="col-md-6">
                  <h2>Haz decidido no continuar</h2>
                  <h3>La vida tiene muchos obstaculos, la idea es superarlos</h3>
                  <p>No te rindas nunca</p>
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
                  <button>${score}</button>
                  <p>Rondas Superadas</p>
                  <button>${rondaActual - 1}</button>
                  <p>Estado</p>
                  <button>Te haz retirado</button>
                </div>
              </div>
            </div>
      `;
    contenedorEstados.innerHTML = contenido;
  }
}

export { EstadosJuego };
