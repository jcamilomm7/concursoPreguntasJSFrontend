
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
  const password = document.querySelector("#contraseñaregistro").value
  const nombreJugador = {
      nombre:nombre,
      contrasena:password
  }


  const login = async () => {
    /*   e.preventDefault(); */
      const result = await signUpApi(nombreJugador);
   console.log(result);
   if(result == undefined){
     console.log("El usuario ya existe");
     //agregar un mensaje que el usuario ya existe
          window.location.href = "/iniciarSesion.html";
      }else{
        //agregar la alerta que el usuario fue creado
          console.log("No puedes ingresar, debes registrarte"); 
          window.location.href = "/iniciarSesion.html"; 
      }   
  }
  login()
  
} 




