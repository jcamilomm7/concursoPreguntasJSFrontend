//consumo de api para el registro de preguntas
 function crearPregunta(data) {
    const url = `http://localhost:2750/api/v1/registrar-preguntas`;
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


const enviarPregunta = document.querySelector("#enviarpregunta");
enviarPregunta.addEventListener("click", enviar, false);


function enviar() {
    let contador = 0;
  const containerpreguntas = document.querySelector("#containerpreguntas");
  if (contador == 0) {
    contador++;
    const selection = document.getElementById("categorias");
    selection.addEventListener("click", select, true);
    function select() {
      return selection.options[selection.selectedIndex].value;
    }
    const categoria = select();
    let pregunta = document.querySelector("#pregunta").value;
    let respuesta1 = document.querySelector("#respuesta1").value;
    let respuesta2 = document.querySelector("#respuesta2").value;
    let respuesta3 = document.querySelector("#respuesta3").value;
    let respuesta4 = document.querySelector("#respuesta4").value;
    let correcta = document.querySelector("#correcta").value;

    const objetoPregunta = {
      categoria,
      pregunta,
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      correcta
    };
    console.log(objetoPregunta);

    const crear = async () => {
      const result = await crearPregunta(objetoPregunta);
      const alertaPregunta = document.querySelector("#alertapregunta")
      alertaPregunta.innerHTML = `
      <div class="alert alert-primary" role="alert">
    ${result}
   </div>
     `;
        setTimeout(() => {
          alertaPregunta.innerHTML = ""
        }, 3000);

    };
  crear()
    

  } 
  
}

