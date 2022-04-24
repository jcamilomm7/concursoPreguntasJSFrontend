export const preguntas = [
  //Categoria 1
  [
    {
      pregunta: "¿Qué es JAVA?",
      respuestas: [
        "Una clase",
        "Un objeto",
        "Un pilar fundamental de POO",
        "Es un lenguaje de programación de alto nivel, multi-plataforma",
      ],
      correcta:
        "Es un lenguaje de programación de alto nivel, multi-plataforma",
    },
    {
      pregunta: "¿Cuáles son los pilares de POO?",
      respuestas: [
        "Constructor, método",
        "Encapsulamiento, polimorfismo, herencia, abstracción",
        "Polimorfismo, herencia, atributo, método",
        "abstraer, método, herencia",
      ],
      correcta: "Encapsulamiento, polimorfismo, herencia, abstracción",
    },
    {
      pregunta: "¿Qué significa IDE?",
      respuestas: [
        "Entorno de desarrollo integrado",
        "Entorno de desarrollo compilado",
        "Inspeccion de software",
        "Entorno integrado",
      ],
      correcta: "Entorno de desarrollo integrado",
    },
    {
      pregunta: "¿Qué es una variable en Java?",
      respuestas: [
        "Es un espacio en memoria donde se guarda un dato",
        "Es aquello que tiene un valor estático",
        "Es algo que puede variar",
        "Es un compilador que guardan datos",
      ],
      correcta: "Es un espacio en memoria donde se guarda un dato",
    },
    {
      pregunta: "¿Qué tipos de datos primitivos existen en Java?",
      respuestas: [
        "int, short, long, double, float, boolean, byte, char",
        "int, short, long, double, byte, char",
        "int, short, long, double, String",
        "int, short, char",
      ],
      correcta: "int, short, long, double, float, boolean, byte, char",
    },
    {
      pregunta: "¿Qué es una constante en Java?",
      respuestas: [
        "Es un dato cuyo valor no cambia durante la ejecución del programa",
        "Es un dato cuyo valor que cambia durante la ejecución del programa",
        "Es un dato cuyo valor no cambia si la instanciamos",
        "Una constante es igual a una variable estática",
      ],
      correcta:
        "Es un dato cuyo valor no cambia durante la ejecución del programa",
    },
  ],
  //Categoria 2
  [
    {
      pregunta: "Declaraciones de condicionales válidos en Java",
      respuestas: [
        "if, if-else, switch-case",
        "Class, switch-case, if",
        "while, for, if",
        "if, if-else, do-while",
      ],
      correcta: "if, if-else, switch-case",
    },
    {
      pregunta: "¿Qué tarea realiza una estructura de decisión?",
      respuestas: [
        "Realiza la repetición de tareas",
        "Evalúan una condición o pregunta y según su resultado toma un camino de acción.",
        "Es para determinar el valor de una variable",
        "Ninguna de las anteriores",
      ],
      correcta:
        "Evalúan una condición o pregunta y según su resultado toma un camino de acción.",
    },
    {
      pregunta: "¿Cuál de las siguientes NO es una estructura condicional?",
      respuestas: ["if", "while", "switch", "else-if"],
      correcta: "while",
    },
    {
      pregunta: "¿Qué hace este codigo: if(num <= 10)?",
      respuestas: [
        "Pregunta sí un número es mayor que 10",
        "Pregunta sí un número es igual a 10",
        "Pregunta sí un número es diferente de 10",
        "Pregunta sí un número es menor o igual que 10",
      ],
      correcta: "Pregunta sí un número es menor o igual que 10",
    },
    {
      pregunta: "¿Cuándo es preferible usar una instrucción del tipo switch?",
      respuestas: [
        "Cuando debemos evaluar solamente una condición",
        "Cuando debemos evaluar primero una condición y luego podemos evaluar una segunda condición",
        "Cuando debemos evaluar muchas alternativas o condiciones de forma simultánea.",
        "Cuando debemos efectuar la repetición de algunos comandos.",
      ],
      correcta:
        "Cuando debemos evaluar muchas alternativas o condiciones de forma simultánea.",
    },
  ],
  //Categoria 3
  [
    {
      pregunta: "¿Cuándo es preferible usar una estructura repetitiva for?",
      respuestas: [
        "Cuando sí sabemos cuantas repeticiones deben hacerse",
        "Cuando tenemos una clase anidada",
        "Cuando hay un if de por medio ",
        "Repuesta 1 y respuesta 2 son verdaderas ",
      ],
      correcta: "Cuando sí sabemos cuantas repeticiones deben hacerse",
    },
    {
      pregunta: "¿Qué es el ciclo while?",
      respuestas: [
        "Cuando si sabemos cuantas repeticiones deben hacerse",
        "Es aquel nos permite ejecutar varias líneas de código",
        "Es aquel nos permite ejecutar varias líneas de código de manera repetitiva sin necesidad de tener un valor inicial",
        "Repuesta 1 y respuesta 2 son verdaderas ",
      ],
      correcta:
        "Es aquel nos permite ejecutar varias líneas de código de manera repetitiva sin necesidad de tener un valor inicial",
    },
    {
      pregunta: "¿Qué es un ciclo en java?",
      respuestas: [
        "Es aquel que permite repetir una o varias instrucciones cuantas veces lo necesitemos",
        "Es aquel nos permite ejecutar acciones",
        "Respuesta 1 sólo es correcta",
        "Repuesta 1 y respuesta 2 son verdaderas ",
      ],
      correcta:
        "Es aquel que permite repetir una o varias instrucciones cuantas veces lo necesitemos",
    },
    {
      pregunta: "¿Cuántas partes tiene el ciclo for?",
      respuestas: [
        "Inicio del ciclo, condicion, incremento",
        "Inicio,fin",
        "Respuesta 1 solo es correcta",
        "Repuesta 1 y respuesta 2 son verdaderas ",
      ],
      correcta: "Inicio del ciclo, condicion, incremento",
    },
    {
      pregunta: "¿Podemos utilizar ciclos para sumar dos numeros?",
      respuestas: [
        "Si",
        "No",
        "Respuesta 1 y respuesta 2 son correcta",
        "Respuesta 2 es verdadera",
      ],
      correcta: "Si",
    },
  ],
  //Categoria 4
  [
    {
      pregunta: "¿Con qué otro nombre son conocidos los arreglos o arrays?",
      respuestas: [
        "Vectores o matrices",
        "Constantes y variables",
        "Operadores matemáticos y lógicos",
        "Polígonos y poliedros",
      ],
      correcta: "Vectores o matrices",
    },
    {
      pregunta: "Define qué es un arreglo en programación",
      respuestas: [
        "Es el elemento del lenguaje que nos permite guardar un valor",
        "Es aquel elemento del lenguaje que nos permite agrupar un conjunto de valores del mismo tipo",
        "Es el elemento de programación que define una variable",
        "Es el lenguaje que nos define la forma de hacer arreglos",
      ],
      correcta:
        "Es aquel elemento del lenguaje que nos permite agrupar un conjunto de valores del mismo tipo",
    },
    {
      pregunta: "¿El recorrido de un arreglo en Java requiere?",
      respuestas: [
        "Un ciclo For",
        "una sentencia If",
        "Una sentencia System.out.println();",
        "Ninguna respuesta es correcta",
      ],
      correcta: "Un ciclo For",
    },
    {
      pregunta:
        "int edades = new int{19, 25, 23} ¿Qué representa la anterior expresión?",
      respuestas: [
        "Define un arreglo de tres valores (19, 25, 23)",
        "Existe un error en el código",
        "Define un arreglo sin valores",
        "No es un arreglo",
      ],
      correcta: "Define un arreglo de tres valores (19, 25, 23)",
    },
    {
      pregunta:
        "Conjunto de datos de un mismo tipo almacenados en memoria.",
      respuestas: ["Variable", "Funciones", "Arreglos", "Condicionales"],
      correcta: "Arreglos",
    },
  ],
  //Categoria 5
  [
    {
      pregunta: "No es pilar de POO:",
      respuestas: ["Herencia", "Encapsulamiento", "Abstracción", "Funciones"],
      correcta: "Funciones",
    },
    {
      pregunta: "La sobrecarga de métodos permite:",
      respuestas: [
        "Aplicar la herencia",
        "La declaración de métodos con igual nombre pero recibe parámetros diferentes",
        "Aplicar métodos heredados con una diferente implementación",
        "No hacer nada",
      ],
      correcta:
        "La declaración de métodos con igual nombre pero recibe parámetros diferentes",
    },
    {
      pregunta: "¿Qué es una interfaz?",
      respuestas: [
        "En una instrucción que se da al IDE",
        "Es un modelo o plantilla",
        "Es una clase que indica solamente los métodos pero no la implementación de éstos",
        "Es la instanciación de un objeto",
      ],
      correcta:
        "Es una clase que indica solamente los métodos peo no la implementación de éstos",
    },
    {
      pregunta:
        "Es la forma de proteger u ocultar las propiedades de un objeto.",
      respuestas: [
        "Polimorfismo",
        "Herencia",
        "Encapsulamiento",
        "Abstracción",
      ],
      correcta: "Encapsulamiento",
    },
    {
      pregunta: "La definición de objeto en POO es:",
      respuestas: [
        "Entidad con estado y comportamientos",
        "Cosa material inanimada",
        "Cosa que es propio de un sujeto",
        "Motivo con que se ejecuta una cosa",
      ],
      correcta: "Entidad con estado y comportamientos",
    },
  ],
];
