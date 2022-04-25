
//Api

export function guardarEstadisticas(data) {
  const url = `http://localhost:2750/api/v1/estadisticas-usuario`;
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


/* export function registroEstadisticas(estadisticasJugador){ */
 
/*   localStorage.setItem('localNombreJugador',JSON.stringify(estadisticasJugador)) */

 /*  const login = async () => {
      const result = await signUpApi(nombreJugador);
      if(result === undefined){
          window.location.href = "/java.html";
      }else{
          console.log("No puedes ingresar, debes registrarte");
      }
  }
  login()
  
}  */




