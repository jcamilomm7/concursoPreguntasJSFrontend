import {preguntas} from './preguntas.js'
import {Pregunta} from '../models/Pregunta.js'

//Aca recorremos cada categoria para inastanaciarlos con la clase 
const preguntasObj = [];
preguntas.map((categoria) => {
  const categoriaObj = [];
  categoria.map((pregunta) => {
    categoriaObj.push(
      new Pregunta(pregunta.pregunta, pregunta.respuestas, pregunta.correcta)
    );
  });
  preguntasObj.push(categoriaObj);
});

export { preguntasObj };
