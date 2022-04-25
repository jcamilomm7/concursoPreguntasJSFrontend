
//Api

function signUpApi(data) {
  const url = `http://localhost:2750/api/v1/iniciarsesion-usuario`;
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

const btnIniciarSesion = document.querySelector("#btniniciarsesion")

btnIniciarSesion.addEventListener("click",registro,false)

function registro(){
  event.preventDefault();
  const nombre = document.querySelector("#nombreiniciarsesion").value
  const password = document.querySelector("#contrasenainiciarsesion").value
  const nombreJugador = {
      nombre:nombre,
      contrasena:password
  }
  localStorage.setItem('localNombreJugador',JSON.stringify(nombreJugador))
  const login = async () => {
    /*   e.preventDefault(); */
      const result = await signUpApi(nombreJugador);
   if(result == undefined){
     console.log("EL uusario no existe");
     //agregar un mensaje que el usuario ya existe
          window.location.href = "/registrarse";
      }else{
        //agregar la alerta que el usuario fue creado
          console.log("El usuario si existe"); 
          window.location.href = "/java.html"; 
      }   
  }
  login()
  
} 




