//Aca se debe mandar a llamar el api de historico personal
const url = `http://localhost:2750/api/v1/historico-personal`;

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log(result);

    //Cuando activan la informaciom del historial del juego
    const btnHistoricoPersonal = document.querySelector("#historicopersonal");

    btnHistoricoPersonal.addEventListener("click", formulario, false);

   const table = document.querySelector("#table")
   let cadena = `<table>
   <tr>
   <th>Nombre</th>
   
   <th>ronda Superada</th>
   <th>Scores</th>
   <th>Victoria</th>
   </tr>
   </table>`;
   result.map((usuario) => {
    cadena += `<tr>
         <td>${usuario.nombre}</td>
         <td>${usuario.rondaSuperada}</td>
         <td>${usuario.score}</td>
         <td>${usuario.victoria}</td>
         </tr>`;
  });


  let contador = 0;
  function formulario() {
    if(contador == 0) {
        table.innerHTML = cadena
        contador++
      
    }else{
      table.innerHTML = ""
      contador = 0
    }
  }

  //Para mostrar las estadisticas personales del juego
  const btnBuscar = document.querySelector("#btnbuscar")
 
  btnBuscar.addEventListener("click",historial,false)
  const tablePersonal = document.querySelector("#tablepersonal")

 

  
  function historial(){
    let cadena2 = `<table>
    <tr>
    <th>Nombre</th>
    
    <th>ronda Superada</th>
    <th>Scores</th>
    <th>Victoria</th>
    </tr>
    </table>`;
   
    const input = document.querySelector("#buscarestadisticas").value
    result.map((usuario) => {
      tablePersonal.innerHTML = ""
      if(usuario.nombre === input  ){
     cadena2 += `<tr>
          <td>${usuario.nombre}</td>
          <td>${usuario.rondaSuperada}</td>
          <td>${usuario.score}</td>
          <td>${usuario.victoria}</td>
          </tr>`;}
          
    });
   let contador2 = 0;

     if(contador2 == 0) {
         tablePersonal.innerHTML = cadena2
         contador2++
       
     }else{
       tablePersonal.innerHTML = ""
       contador2 = 0
   }

   const btnBorrar = document.querySelector("#btnborrar")
   btnBorrar.addEventListener("click",borrar,false)

   function borrar(){
     tablePersonal.innerHTML=""
   }
  }
})
     
  

   

  
