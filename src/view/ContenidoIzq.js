class ContenidoIzq {
  cargarLogo(urlLogo, Titulo) {
    const logo = document.querySelector(".imagen");
    let imgLogo = `
      <a href=""><img
                src=${urlLogo}
                title=${Titulo}
            /></a>
      `;
    logo.innerHTML = imgLogo;
  }


  premioDinamico(rondaActual, premioRonda) {
    const rondaDinamica = document.querySelector("#rondaDin");
    const premioDinamico = document.querySelector("#premioDin");

    rondaDinamica.textContent = `Ronda N° ${rondaActual}`;
    premioDinamico.textContent = `$${premioRonda}`;
  }
}
export { ContenidoIzq };
