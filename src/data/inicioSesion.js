//Api

function signUpApi(data) {
  const url = `https://concursopreguntassofka.herokuapp.com/api/v1/iniciarsesion-usuario`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return result;
      }
      return result.message;
    })
    .catch((err) => {
      return err.message;
    });
}

const btnIniciarSesion = document.querySelector("#btniniciarsesion");

btnIniciarSesion.addEventListener("click", registro, false);

function registro() {
  event.preventDefault();
  const nombre = document.querySelector("#nombreiniciarsesion").value;
  const password = document.querySelector("#contrasenainiciarsesion").value;
  const nombreJugador = {
    nombre: nombre,
    contrasena: password,
  };
  localStorage.setItem("localNombreJugador", JSON.stringify(nombreJugador));
  const login = async () => {
    const result = await signUpApi(nombreJugador);
   
    if (result.contrasena != null || result.contrasena != undefined) {
      console.log("si se creo");
      let alertaRoja = document.querySelector("#alertaroja");
      
      alertaRoja.innerHTML = `
    <div class="alert alert-success" role="alert">
  Login correcto. Disfruta del juego y adquiere conocimiento
 </div>
   `;
      setTimeout(() => {
        window.location.href = "../../java.html";
      }, 2000);
    } else {
      console.log("no se creo");
      let alertaRoja = document.querySelector("#alertaroja");
      alertaRoja.innerHTML = `
       <div class="alert alert-danger" role="alert">
       ${result}
     </div>
       `;
      setTimeout(() => {
        alertaRoja.innerHTML = "";
      }, 2000);
    }



      }
      
    

  login();
}
