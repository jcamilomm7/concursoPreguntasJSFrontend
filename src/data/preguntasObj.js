import { encontrarPreguntas } from "../api/config.js";
import { api } from "../api/encontrarPreguntas.js";
import { Pregunta } from "../models/Pregunta.js";

const preguntasObj1 = [];
export const alamcenarPreguntasLocalStorage = async () => {
  const result = await api(encontrarPreguntas);
  let preguntasArry = result.preguntasJava;

  preguntasArry.map((categoria) => {
    let categoriaNueva = [];
    categoria.map((pregunta) => {
      categoriaNueva.push(
        new Pregunta(
          pregunta.pregunta,
          [
            pregunta.respuesta1,
            pregunta.respuesta2,
            pregunta.respuesta3,
            pregunta.respuesta4,
          ],
          pregunta.correcta
        )
      );
    });
    preguntasObj1.push(categoriaNueva);
  });

  localStorage.setItem("localPreguntas", JSON.stringify(preguntasObj1));
};
