import { premiosObj } from "../data/premiosObj.js";
import { rondaObj } from "../data/rondasObj.js";

// Esta funcion es llamada desde la interfaz de usuario para ver los resultados cuando gana si
function resultados() {
  const div = document.createElement("div");

  const titulo = document.createElement("h1");
  titulo.textContent = "Resultados de tu prueba";
  const titulo2 = document.createElement("h2");
  titulo2.textContent = "Victorias de round";
  const titulo3 = document.createElement("h2");
  titulo3.textContent = "Acumulado alcanzado";
  const titulo4 = document.createElement("h2");
  titulo4.textContent = "Win";

  const formulario = document.createElement("form");

  const round = document.createElement("input");
  round.value = `${rondaObj.rondaActual - 1}`;
  round.type = "text";
  round.name = "round";
  round.readOnly = "readonly";
  round.classList.add("datos2");

  const prize = document.createElement("input");
  prize.value = `${premiosObj.score}`;
  prize.type = "text";
  prize.name = "prize";
  prize.readOnly = "readonly";
  prize.classList.add("datos2");

  const win = document.createElement("input");
  win.value = "si";
  win.type = "text";
  win.name = "win";
  win.readOnly = "readonly";
  win.classList.add("datos2");

  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("datos1");
  button.name = "btnhistoricos";
  button.textContent = "Salir";

  const button2 = document.createElement("button");
  button2.type = "submit";
  button2.classList.add("datos1");
  button2.name = "btnhistoricos2";
  button2.textContent = "Jugar de nuevo";

  const element2 = document.querySelector("#estadisticas");
  element2.innerHTML = "";
  div.appendChild(titulo);
  formulario.appendChild(titulo2);
  formulario.appendChild(round);
  formulario.appendChild(titulo3);
  formulario.appendChild(prize);
  formulario.appendChild(titulo4);
  formulario.appendChild(win);
  formulario.appendChild(button);
  formulario.appendChild(button2);
  div.appendChild(formulario);
  element2.appendChild(div);
}
// Esta funcion es llamada desde la interfaz de usuario para ver los resultados cuando se retira
function resultadosRetiro() {
  const div = document.createElement("div");

  const titulo = document.createElement("h1");
  titulo.textContent = "Resultados de tu prueba";
  const titulo2 = document.createElement("h2");
  titulo2.textContent = "Victorias de round";
  const titulo3 = document.createElement("h2");
  titulo3.textContent = "Acumulado alcanzado";
  const titulo4 = document.createElement("h2");
  titulo4.textContent = "Win";

  const formulario = document.createElement("form");

  const round = document.createElement("input");
  round.value = `${rondaObj.rondaActual - 1}`;
  round.type = "text";
  round.name = "round";
  round.readOnly = "readonly";
  round.classList.add("datos2");

  const prize = document.createElement("input");
  prize.value = `${premiosObj.score}`;
  prize.type = "text";
  prize.name = "prize";
  prize.readOnly = "readonly";
  prize.classList.add("datos2");

  const win = document.createElement("input");
  win.value = "no";
  win.type = "text";
  win.name = "win";
  win.readOnly = "readonly";
  win.classList.add("datos2");

  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("datos1");
  button.name = "btnhistoricos";
  button.textContent = "Salir";

  const button2 = document.createElement("button");
  button2.type = "submit";
  button2.classList.add("datos1");
  button2.name = "btnhistoricos2";
  button2.textContent = "Jugar de nuevo";

  const element2 = document.querySelector("#estadisticas");
  element2.innerHTML = "";
  div.appendChild(titulo);
  formulario.appendChild(titulo2);
  formulario.appendChild(round);
  formulario.appendChild(titulo3);
  formulario.appendChild(prize);
  formulario.appendChild(titulo4);
  formulario.appendChild(win);
  formulario.appendChild(button);
  formulario.appendChild(button2);
  div.appendChild(formulario);
  element2.appendChild(div);
}
// Esta funcion es llamada desde la interfaz de usuario para ver los resultados cuando pierde
function resultados2() {
  const div = document.createElement("div");

  const titulo = document.createElement("h1");
  titulo.textContent = "Resultados de tu prueba";
  const titulo2 = document.createElement("h2");
  titulo2.textContent = "Victorias de round";
  const titulo3 = document.createElement("h2");
  titulo3.textContent = "Acumulado alcanzado";
  const titulo4 = document.createElement("h2");
  titulo4.textContent = "Win";

  const formulario = document.createElement("form");

  const round = document.createElement("input");
  round.value = `${rondaObj.rondaActual - 1}`;
  round.type = "text";
  round.name = "round";
  round.readOnly = "readonly";
  round.classList.add("datos2");

  const prize = document.createElement("input");
  prize.value = `0`;
  prize.type = "text";
  prize.name = "prize";
  prize.readOnly = "readonly";
  prize.classList.add("datos2");

  const win = document.createElement("input");
  win.value = "no";
  win.type = "text";
  win.name = "win";
  win.readOnly = "readonly";
  win.classList.add("datos2");

  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("datos1");
  button.name = "btnhistoricos";
  button.textContent = "Salir";

  const button2 = document.createElement("button");
  button2.type = "submit";
  button2.classList.add("datos1");
  button2.name = "btnhistoricos2";
  button2.textContent = "Jugar de nuevo";

  const element2 = document.querySelector("#estadisticas");
  element2.innerHTML = "";
  div.appendChild(titulo);
  formulario.appendChild(titulo2);
  formulario.appendChild(round);
  formulario.appendChild(titulo3);
  formulario.appendChild(prize);
  formulario.appendChild(titulo4);
  formulario.appendChild(win);
  formulario.appendChild(button);
  formulario.appendChild(button2);
  div.appendChild(formulario);
  element2.appendChild(div);
}

function fraseDespedidaRetiro() {
  const quizEndHTML = `
    <h1>Decides no continuar</h1>
    <h2>Nunca rendirse</h2>
    <img src="./images/retiro.png" alt="Conocimiento" class="conocimiento"><br>
   
    `;
  const frase = document.querySelector("#concurso");
  frase.innerHTML = quizEndHTML;
}

function finJuego() {
  const quizEndHTML = `
    <h1>FELICITACIONES</h1>
    <h2>Gracias a tu conocimiento y concentración llegastes a la meta</h2>
    <img src="./images/ganastes.jpg" alt="Conocimiento" class="conocimiento"><br>
    `;
  const element = document.querySelector("#concurso");
  element.innerHTML = quizEndHTML;
}
function perderJuego() {
  const perder = `
    <h1>Gracias por participar</h1>
    <h2>Recuerda que el conocimiento es la clave para el exito</h2>
    <p>En otra oportunidad obtendras la victoria</p>
    <img src="./images/perderesganar.png" alt="Conocimiento" class="perder"><br>
    `;
  const element = document.querySelector("#concurso");
  element.innerHTML = perder;
}
export {
  fraseDespedidaRetiro,
  resultados,
  finJuego,
  perderJuego,
  resultados2,
  resultadosRetiro,
};
