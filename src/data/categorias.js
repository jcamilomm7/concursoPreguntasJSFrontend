import { Categoria } from "../models/Categoria.js";

export const categorias = [
  {
    categoria: "Conceptos Generales",
    numeroPreguntas: 0,
  },
  {
    categoria: "Condicionales",
    numeroPreguntas: 0,
  },
  {
    categoria: "Ciclos",
    numeroPreguntas: 0,
  },
  {
    categoria: "Arreglos",
    numeroPreguntas: 0,
  },
  {
    categoria: "POO",
    numeroPreguntas: 0,
  },
];

//Instanciamos la clase categorias
export const categoriasObj = categorias.map(
  (categoria) => new Categoria(categoria.categoria, categoria.numeroPreguntas)
);
