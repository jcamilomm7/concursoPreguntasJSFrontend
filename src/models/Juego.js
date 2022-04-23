//@ts-check

//Por facilidad me parecio mejor tener este model de Quiz, son los metodos que mas se utilizan
class Juego {
  categoriaIndex = 0;
  alazar = 0;
  cantidadPreguntas = 0;
  /**
   *
   * @param {Array} preguntasObj Recibe un array de array de objetos, en los cuales van todas las categorias
   */
  constructor(preguntasObj) {
    this.preguntasObj = preguntasObj; //Apenas inicie le juego no hay necesidad de instanciar, ya estan listos
  }

  //Este metodo me seleccion alazar una pregunta de cada categoria
  randomPreguntas(categoria) {  
    let indiceAleatorio = Math.floor(Math.random() * categoria.length);
    if (indiceAleatorio === 0) {
      indiceAleatorio++;
    }
    this.alazar = indiceAleatorio;
    this.cantidadPreguntas = categoria.length;
    return categoria[indiceAleatorio];
  }

  //Me retorna la pregunta al lazar
  preguntaAlAzar(preguntasObj) {
    let categoria = preguntasObj[this.categoriaIndex];
    let preguntaAlAzar = this.randomPreguntas(categoria);
    return preguntaAlAzar;
  }

  //Saber cuando termina el quiz
  finJuego() {
    return this.preguntasObj.length === this.categoriaIndex;
  }

  //Si la respuesta es correcta
  respuestaCorrecta(opcionSeleccionada, correcta) {
    this.categoriaIndex++;
    if (opcionSeleccionada === correcta) {
      return true;
    } 
      return false;
  }
}
export { Juego };
