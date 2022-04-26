//Api

function signUpApi(data) {
  const url = `http://localhost:2750/api/v1/registrar-usuario`;
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

const btnregistro = document.querySelector("#btnregistro");

btnregistro.addEventListener("click", registro, false);

function registro() {
  event.preventDefault();
  const nombre = document.querySelector("#nombreregistro").value;
  const password = document.querySelector("#contraseñaregistro").value;
  const nombreJugador = {
    nombre: nombre,
    contrasena: password,
  };

  const login = async () => {
    const result = await signUpApi(nombreJugador);

    console.log(result.contrasena);
    if (result.contrasena != null || result.contrasena != undefined) {
      console.log("si se creo");
      let alerta = document.querySelector("#alerta");
      alerta.innerHTML = `
    <div class="alert alert-success" role="alert">
  El registro fue exitoso
 </div>
   `;
      setTimeout(() => {
        window.location.href = "../../iniciarSesion.html";
      }, 2000);
    } else {
      console.log("no se creo");
      let alerta = document.querySelector("#alerta");
      alerta.innerHTML = `
       <div class="alert alert-danger" role="alert">
       ${result}
     </div>
       `;
      setTimeout(() => {
        alerta.innerHTML = "";
      }, 2000);
    }
  };
  login();
}
