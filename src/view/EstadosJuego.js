class EstadosJuego {
  perderJuego(score, rondaActual, nombre) {
    const contenedorEstados = document.querySelector(".borrarinformacion");
    contenedorEstados.innerHTML = "";

    let contenido = `
      <div class="col-md-12">
              <div class="row">
                <div  id="textomotivacion" class="col-md-6">
                  <h2>Gracias por Participar</h2>
                  <h3>El conocimiento es la clave para el éxito</h3>
                  <p>En otra oportunidad obtendras la victoria</p>
                </div>
                <div id="imgperder" class="col-md-6">    
                  <img src="./src/images/gameover.gif" alt="">
                </div>
              </div>
              </div>
              <div class="col-md-12">
              <div class="row">
                <div id="avatar" class="col-md-6">
                  <img src="./src/images/avatar.gif" alt="">
                  <h3>Jugador: ${nombre}</h3>
                </div>
                <div id="estadisticaFinal" class="col-md-6 col-sm-12 ">
                    <h3 class="zoom dinamico">Estadisticas</h3>                  
                    <h2 >Score: $${score} pesos</h2>                  
                    <h2 >Rondas Superadas: ${
                      rondaActual - 2
                    }</h2>                  
                    <h2 >Estado: Haz perdido</h2>
                  </div>
              </div>
            </div>
      `;
    contenedorEstados.innerHTML = contenido;
    const agregarButton = document.querySelector("#agregarbutton");
    agregarButton.innerHTML = `
    <a href="./index.html"><button
    class="btnfinjuego"
    id="historicopersonal"
    variant="success"
    >Salir</button></a>

          </button>

  <a href="./java.html"> <button
    class="btnfinjuego"
   id="historicopersonal"
    variant="success"
   >Volver a jugar</button></a>
    `;
  }

  ganarJuego(score, rondaActual, nombre) {
    const contenedorEstados = document.querySelector(".borrarinformacion");
    contenedorEstados.innerHTML = "";

    let contenido = `
      <div class="col-md-12">
              <div class="row">
                <div id="textomotivacion" class="col-md-6">
                  <h2 id="ganar">¡FELICITACIONES!</h2>
                  <h3>Gracias a tu conocimiento y concentración llegaste a la meta</h3>
                </div>
                <div id="imgganar" class="col-md-6">
                  <img src="./src/images/winner.gif" alt="">
                </div>
                
              </div>
              
              <div class="col-md-12">
                <div class="row">
                  <div id="avatar" class="col-md-6">
                    <img src="./src/images/avatar.gif" alt="">
                    <h3>Jugador: ${nombre}</h3>
                  </div>
                  <div id="estadisticaFinal" class="col-md-6 col-sm-12">
                  <h3 class="zoom dinamico">Estadisticas</h3>                  
                  <h2 class="dinamico">Score: $${score} pesos</h2>                  
                  <h2 class="dinamico">Rondas Superadas: ${
                    rondaActual - 1
                  }</h2>                  
                  <h2 class="dinamico">Estado: Haz ganado</h2>
                </div>
                  </div>
                </div>
              </div>
      </div>
      `;
    contenedorEstados.innerHTML = contenido;
    const agregarButton = document.querySelector("#agregarbutton");
    agregarButton.innerHTML = `
    <a href="./index.html"><button
    class="btnfinjuego"
    id="historicopersonal"
    variant="success"
    >Salir</button></a>

          </button>

  <a href="./java.html"> <button
    class="btnfinjuego"
   id="historicopersonal"
    variant="success"
   >Volver a jugar</button></a>
    `;
  }

  retirarseJuego(score, rondaActual, nombre) {
    const contenedorEstados = document.querySelector(".borrarinformacion");
    contenedorEstados.innerHTML = "";

    let contenido = `
      <div class="col-md-12">
              <div class="row">
              
                <div id="textomotivacion" class="col-md-6">
                  <h2>Haz decidido no continuar</h2>
                  <h3>La vida tiene muchos obstáculos, la idea es superarlos</h3>
                  <p>¡No te rindas nunca!</p>
                </div>
                <div id="imgretirar" class="col-md-6">
                  <img src="./src/images/retiro.gif" alt="">
                </div>
              </div>
              
              <div class="col-md-12 col-sm-12">
                <div class="row">
                  <div id="avatar" class="col-md-6">
                    <img src="./src/images/avatar.gif" alt="">
                    <h3>Jugador: ${nombre}</h3>
                  </div>
                  <div id="estadisticaFinal" class="col-md-6 col-sm-12 dinamico">
                    <h3 class="zoom dinamico" >Estadisticas</h3>                  
                    <h2 class="dinamico">Score: $${score} pesos</h2>                  
                    <h2 class="dinamico">Rondas Superadas: ${
                      rondaActual - 1
                    }</h2>                  
                    <h2 class="dinamico">Estado: Te haz retirado</h2>
                  </div>
                </div>
              </div>
      </div>
      `;
    contenedorEstados.innerHTML = contenido;
    const agregarButton = document.querySelector("#agregarbutton");
    agregarButton.innerHTML = `
    <a href="./index.html"><button
    class="btnfinjuego"
    id="historicopersonal"
    variant="success"
    >Salir</button></a>

          </button>

  <a href="./java.html"> <button
    class="btnfinjuego"
   id="historicopersonal"
    variant="success"
   >Volver a jugar</button></a>
    `;
  }
}

export { EstadosJuego };
