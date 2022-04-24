
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

const btnregistro = document.querySelector("#btnregistro")

btnregistro.addEventListener("click",registro,false)

function registro(){
  event.preventDefault();
  const nombre = document.querySelector("#nombreregistro").value
  const nombreJugador = {
      nombre:nombre
  }
  localStorage.setItem('localNombreJugador',JSON.stringify(nombreJugador))

  const login = async () => {
     /*  e.preventDefault(); */
      const result = await signUpApi(nombreJugador);
      if(result === undefined){
          window.location.href = "/java.html";
      }else{
          console.log("No puedes ingresar, debes registrarte");
      }
  }
  login()
  
} 




