


class ContenidoIzq {
  

  cargarLogo(urlLogo, Titulo) {
    
    
      const logo = document.querySelector(".imagen")
      let imgLogo = `
      <a href=""><img
                src=${urlLogo}
                title=${Titulo}
            /></a>
      `
      logo.innerHTML = imgLogo
    
  }

//   reglasJuego(reglas){
      
//           const reglas = document.querySelector(".reglas")
//           let contenido = `
//           <p>
//               <h2>Reglas del Juego</h2>
//               <ol>
//                 <li>Ingresar nombre de usuario</li>
//                 <li>Leer preguntas</li>
//                 <li>Seleccionar la opción que considere correcta</li>
//                 <li>ndbnfli nbn oñ </li>
//                 <li>fikn gljbfhu vbvhgudfbju gñmkm </li>
//                 <li> nbghusgbdgy tbrt mtyp m gff</li>
//               </ol>
//             </p>
//           `
//           reglas.textContent = contenido
      
//   }

  premioDinamico(rondaActual, premioRonda){
    const rondaDinamica = document.querySelector("#rondaDin");
    const premioDinamico = document.querySelector("#premioDin");

    rondaDinamica.textContent = `Ronda N° ${rondaActual}`;
    premioDinamico.textContent = `$${premioRonda}`;
  }
}
export {ContenidoIzq}
