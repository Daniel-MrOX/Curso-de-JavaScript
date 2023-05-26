// Funciones

/*
Las funciones son uno de los conceptos más importantes en JavaScript, y son la clave para crear código modular y reutilizable.

Una función en JavaScript es un bloque de código que realiza una tarea específica. Puedes pensar en ella como un mini-programa dentro de tu programa principal. Las funciones pueden tomar cero o más parámetros, y pueden devolver un valor.

Crear una función:

function nombreFuncion(parametro1, parametro2) {
  // código que realiza una tarea
  return valor; // opcional
}

La palabra reservada para crear funciones en JavaScript es "function", nombreFuncion es el nombre que le das a tu función. parametro1 y parametro2 son los parámetros que la función espera recibir. Dentro de las llaves {} escribirás el código que realizará la tarea deseada. Si la función debe devolver un valor, puedes usar la palabra clave return seguida del valor.

Antes de crear una función en JavaScript, es importante considerar los siguientes aspectos:

→ Propósito de la función: Definir claramente el propósito de la función, es decir, qué tarea o acción debe realizar la función. Esto ayudará a diseñar la lógica interna de la función de manera efectiva y a asegurar que la función cumpla con su objetivo.

→ Nombre de la función: Elegir un nombre adecuado para la función que describa claramente su función y sea fácil de recordar. Los nombres de las funciones deben seguir las convenciones de nomenclatura de JavaScript, que generalmente se escriben en camelCase.

→ Parámetros de entrada: Definir los parámetros de entrada que la función requerirá para ejecutarse. Estos son los valores que se pasan a la función al momento de llamarla y que la función utilizará para llevar a cabo su tarea.

→ Valor de retorno: Determinar el valor que la función devolverá una vez que se haya completado su tarea. Este valor puede ser una variable, un objeto o cualquier otro tipo de dato que sea relevante para el propósito de la función.

→ Reutilización: Considerar si la función puede ser reutilizada en diferentes partes del código para evitar la repetición innecesaria de código. La reutilización de funciones ayuda a hacer el código más modular y fácil de mantener a largo plazo.

→ Eficiencia: Optimizar el código de la función para que se ejecute de manera eficiente y no afecte el rendimiento general de la aplicación. Esto puede lograrse a través de técnicas como la minimización de variables, el uso de bucles en lugar de iteraciones manuales y la eliminación de código redundante.

// ---

Como se llama / invoca una función en JavaScript ?

En el lenguaje de programación JavaScript, una función es un objeto que encapsula un bloque de código y permite su reutilización. La invocación de una función es el proceso de ejecutar el código encapsulado en la función con los argumentos proporcionados, si los hay. La llamada a una función se realiza utilizando su nombre seguido de un par de paréntesis que contienen la lista de argumentos, separados por comas si hay más de uno.

Dentro de una función, las variables declaradas con la palabra clave "var", "let" o "const" se consideran variables locales y solo están disponibles dentro del ámbito de la función en la que se declaran. Esto se debe a que el ámbito de una variable se define por la función más cercana que la envuelve. Las variables globales, definidas fuera de cualquier función, son accesibles desde cualquier parte del código y pueden ser utilizadas dentro de una función si se las pasa como argumentos.

Es importante tener en cuenta que JavaScript utiliza el proceso de "hoisting" para mover todas las declaraciones de funciones al principio del ámbito actual antes de que se ejecute cualquier código. Sin embargo, sólo las declaraciones de función (function declarations) se ven afectadas por el hoisting, no las funciones definidas como expresiones o funciones creadas utilizando una función constructora.

En resumen, la llamada a una función en JavaScript implica la ejecución del bloque de código encapsulado con los argumentos proporcionados. Las variables locales en una función sólo son accesibles dentro del ámbito de la función, mientras que las variables globales pueden ser utilizadas dentro de una función si se las pasa como argumentos. Además, JavaScript utiliza el proceso de hoisting para mover las declaraciones de funciones al principio del ámbito actual antes de la ejecución del código.

Cuando se declara una función utilizando la sintaxis de declaración de función (function declaration) en JavaScript, la función completa se eleva (hoisted) al comienzo del ámbito actual antes de la ejecución del código, lo que significa que puede ser llamada antes de que se defina en el código. Esto ocurre debido al proceso de hoisting, que mueve todas las declaraciones de función al principio del ámbito actual antes de la ejecución del código, lo que permite que las funciones declaradas de esta manera se puedan llamar en cualquier parte del código, incluso antes de su declaración. Cabe destacar que este comportamiento no se aplica a las funciones declaradas como expresiones o las funciones creadas utilizando una función constructora, ya que estas no son afectadas por el hoisting.
*/

function ejemplo0() {
    console.log("Hola Mundo");
  } // para visualizar una función en JavaScript es necesario haberla invocado o llamado previamente. La forma de hacerlo es mediante la escritura del nombre que se le ha asignado a la función seguido de los paréntesis () que indican su invocación. En otras palabras, para ejecutar el cuerpo de una función en JavaScript se requiere llamarla mediante su nombre y los paréntesis correspondientes.
  
  ejemplo0(); // En JavaScript, los paréntesis () se utilizan para indicar la invocación o llamada de una función. Es importante tener en cuenta que el orden en que se llaman las funciones puede afectar el resultado de la ejecución del programa, ya que las funciones pueden depender del resultado de otras funciones para su correcto funcionamiento. Además, no es necesario poner la invocación de la función antes de su definición en JavaScript. Es común definir una función al principio del código y luego invocarla más adelante en el programa. La única regla es que la función debe estar definida antes de ser invocada. Por lo tanto, las funciones pueden ser definidas en un orden lógico en función de las necesidades del programa, y luego ser invocadas en el orden en que se necesitan.
  
  ejemplo1();
  
  function ejemplo1() {
    console.log("Hola, bye");
  }
  
  ejemplo1();
  
  // Explicación del código: En este ejemplo, la función "ejemplo1" está siendo definida antes de ser invocada, lo que es una buena práctica. Además, el uso de paréntesis vacíos al llamar a la función indica que no se están pasando argumentos a la función, lo cual es apropiado si la función no espera recibir argumentos.
  
  /*
  Nota: En el caso de que en el código solo exista la línea "ejemplo1();", sin la definición previa de la función "ejemplo1", esto provocaría un error en tiempo de ejecución. JavaScript intentaría buscar una función previamente definida con el nombre "ejemplo1", pero al no encontrarla debido a que no ha sido definida antes de ser llamada, se lanzaría un error "Uncaught ReferenceError: ejemplo1 is not defined" y la ejecución del programa se detendría en ese punto.
  
  Por lo tanto, es importante que las funciones sean definidas antes de ser llamadas en el código, para evitar errores de referencia no definida.
  */
  
  ejemplo0();
  ejemplo1();
  ejemplo1();
  ejemplo0();
  
  console.log("---");
  
  //--------------------
  
  /*
  Tipos de funciones
  
  → Funciones declarativas:
      Las funciones declarativas, también conocidas como funciones nombradas, se definen utilizando la palabra clave "function" seguida de un nombre y un cuerpo de función.
  
        function sum(a, b) {
    return a + b;
  }
  
  ---
  
  → Funciones de expresión:
      Las funciones de expresión, también conocidas como funciones anónimas, se definen como valores de una expresión. Pueden ser asignados a variables o pasados como argumentos a otras funciones.
  
        const sum = function(a, b) {
    return a + b;
  }
  
  ---
  
  → Funciones flecha:
      Las funciones flecha son una forma abreviada de escribir funciones de expresión. Se definen utilizando la sintaxis de una flecha (=>), que reemplaza la palabra clave "function".
  
        const sum = (a, b) => {
      return a + b;
  }
  
  ---
  
  → Métodos de objeto:
      Los métodos de objeto son funciones que se definen dentro de objetos. Se acceden a ellos utilizando la sintaxis de punto o corchete.
  
        const obj = {
        name: "Nat",
        greet: function() {
        console.log(`Hola ${this.name}`);
        }
      }
  
  --- 
  
  → Funciones constructoras:
      Las funciones constructoras son una forma de crear objetos en JavaScript. Se definen utilizando la palabra clave "function" y el operador "new".
  
        function Person(name, age) {
      this.name = name;
      this.age = age;
      }
  
  const person1 = new Person("MrOX", 18);
  */
  
  //--------------------
  
  /*
  Función Void
      
  En JavaScript, una función de tipo "void" es aquella que no retorna ningún valor. Es decir, su único propósito es realizar una tarea o acción, sin devolver un resultado que pueda ser utilizado en otro lugar del código. Las funciones void pueden ser útiles en situaciones donde se necesita realizar una operación específica, como por ejemplo, mostrar un mensaje en la consola, actualizar una variable global, o interactuar con el DOM de una página web.
  
  Para declarar una función de tipo void en JavaScript, basta con definir la función y no utilizar la sentencia "return" dentro del cuerpo de la función. De esta forma, cuando la función sea invocada, realizará la tarea correspondiente y no devolverá ningún valor.
  
  Es importante mencionar que en JavaScript, aunque no se especifique explícitamente el tipo de retorno de una función, todas las funciones retornan undefined de forma implícita si no se especifica un valor de retorno mediante la sentencia "return".
  
  En resumen, una función de tipo void puede realizar cualquier tarea que se requiera, siempre y cuando no se necesite retornar un valor específico. La impresión de datos en la consola es solo una de las muchas tareas que pueden realizarse con una función void en JavaScript.
  */
  
  console.log("---Función Void---");
  
  function ejemplo2() {
    console.log("Soy una función de tipo void");
  }
  
  ejemplo2();
  
  console.log("-");
  
  // Función que imprime un mensaje de bienvenida en la consola:
  
  function ejemplo3() {
    console.log("¡Bienvenida!");
  }
  
  ejemplo3();
  
  console.log("-");
  
  // Función que modifica el valor de una variable global:
  
  let contador = 0;
  console.log(contador);
  
  function ejemplo4() {
    contador++;
    console.log(contador);
  }
  
  ejemplo4();
  
  console.log("-");
  
  /*
  Explicación del código : el siguiente código de JavaScript define una variable llamada contador e inicializa su valor en 0. Luego, se imprime el valor de contador en la consola utilizando la función console.log().
  
  Posteriormente, se define una función llamada ejemplo4(). Dentro de esta función, se incrementa el valor de contador en 1 mediante el operador ++, y luego se imprime el nuevo valor de contador en la consola usando console.log().
  
  Finalmente, se llama a la función ejemplo4() una vez, lo que hace que se ejecute el código dentro de ella. Como resultado, se imprimirá en la consola el valor de contador antes y después de ser incrementado en 1. El resultado final será 1.
  */
  
  let contador_ = 100;
  console.log(contador_);
  
  function ejemplo4_() {
    contador_++;
    console.log(contador_);
  
    if (contador_ >= 100) {
      console.log("El contador es mayor o igual a 100.");
    } else {
      console.log("El contador es menor a 100.");
    }
  }
  
  ejemplo4_();
  
  console.log("-");
  
  // Explicación del código: En primer lugar, se declara la variable contador_ con un valor inicial de 100. Luego se define la función ejemplo4_(), que incrementa el valor de la variable contador_ en 1 y luego verifica si el valor resultante es mayor o igual a 100. Dependiendo del resultado de la comparación, se muestra un mensaje correspondiente en la consola.
  
  // Función que realiza una operación matemática:
  
  // Declaración de dos variables numéricas globales
  let ejemplo5 = 50;
  let ejemplo5_ = 100;
  
  // Función que realiza una suma entre las dos variables globales y muestra el resultado en consola
  function suma() {
    let res = ejemplo5 + ejemplo5_;
    console.log(res);
  }
  
  // Llamada a la función "suma"
  suma();
  
  console.log("-");
  
  // Video Juego
  
  let poder = 100;
  let habilidad = 400;
  
  function evaluarPoderYHabilidad(poder, habilidad) {
    let suma = poder + habilidad;
  
    if (suma < 100) {
      console.log("Tu poder es muy bajo");
    } else if (suma <= 500) {
      console.log("Puedes realizar esta tarea");
    } else {
      console.log("Maestro I");
    }
  }
  
  evaluarPoderYHabilidad(poder, habilidad);
  
  console.log("-");
  
  // Explicacion del codigo: Este código define dos variables: poder con un valor de 100 y habilidad con un valor de 400. Luego define una función llamada evaluarPoderYHabilidad que toma dos parámetros, poder y habilidad. Dentro de la función, se suma el valor de poder y habilidad y se almacena en una variable llamada suma. Luego, se utiliza una estructura if-else para evaluar el valor de suma y mostrar un mensaje apropiado en función de su valor. Si suma es menor que 100, se muestra el mensaje "Tu poder es muy bajo". Si suma está entre 100 y 500, se muestra el mensaje "Puedes realizar esta tarea". Si suma es mayor que 500, se muestra el mensaje "Maestro I".
  
  // Función que realiza una operación matemática:
  
  function multiplyNumbers(a, b, c) {
    const result = a * b * c;
    console.log(result);
  }
  
  multiplyNumbers(1, 100, 1000);
  
  console.log("-");
  
  // Explicacion del codigo: Este código define una función llamada multiplyNumbers que toma tres parámetros: a, b y c. Luego, dentro de la función, se calcula el producto de estos tres valores y se almacena en la variable result. Finalmente, el resultado se imprime en la consola utilizando console.log(). Después de definir la función, se llama a la función multiplyNumbers con los argumentos 1, 100 y 1000. Esto significa que los valores 1, 100 y 1000 se asignarán a los parámetros a, b y c de la función, respectivamente. Por lo tanto, se calculará el producto de estos valores (1 * 100 * 1000 = 100000) y se imprimirá en la consola.
  
  // -
  
  // Nota: El orden en que se pasan los valores de los argumentos al llamar una función puede influir en la ejecución de la función, especialmente si la función depende del orden de los argumentos para realizar su tarea correctamente. Para entender esto mejor, es útil saber cómo los parámetros y argumentos funcionan en una función. Los parámetros son variables que se definen en la declaración de la función, mientras que los argumentos son los valores que se pasan a la función al llamarla. Cuando una función se llama con argumentos, los valores de los argumentos se asignan a los parámetros en el orden en que se pasan.
  
  // Función que presenta un Objeto
  
  const Rei = {
    nombre: "Rei Ayanami",
    edad: 14,
    EVA: {
      unidad: "00",
    },
    presentarPiloto: function () {
      console.log(
        `El nombre de la piloto es ${this.nombre}, edad del piloto ${this.edad} años, unidad a pilotar: ${this.EVA.unidad}`
      );
    },
  };
  
  Rei.presentarPiloto();
  
  // Explicacion del codigo: En este código se ha creado un objeto llamado "Rei" que tiene las siguientes propiedades: "nombre" con el valor "Rei Ayanami", "edad" con el valor de 14, y "EVA" que a su vez es otro objeto que tiene la propiedad "unidad" con el valor "00". Además, el objeto tiene un método llamado "presentarPiloto" que imprime un mensaje en la consola que presenta la información del piloto utilizando las propiedades del objeto. En la llamada a la función "Rei.presentarPiloto()", se ejecuta el método "presentarPiloto" del objeto "Rei", que imprime en la consola un mensaje que presenta el nombre del piloto, su edad y la unidad del EVA que pilotará.
  
  console.log("-");
  
  // Nota: Es una buena práctica crear variables locales para los parámetros de las funciones en JavaScript. Esto se debe a que las variables locales tienen un ámbito limitado dentro de la función y no pueden ser accedidas desde fuera de ella, lo que ayuda a evitar conflictos o errores en el código. Además, el uso de variables locales también puede mejorar la legibilidad y mantenibilidad del código, ya que hace más fácil entender qué está sucediendo con los valores que se pasan como argumentos a la función.
  
  /*
  Estos son algunos ejemplos de como poder utilizar una función de tipo "void", hay muchos mas.
  */
  
  //--------------------
  
  // Función Return
  
  /*
  Las funciones que tienen la palabra clave "return" al final del bloque de código son llamadas funciones de retorno y se utilizan para devolver un valor o resultado de una tarea específica que se lleva a cabo dentro de la función. Estas funciones pueden ser utilizadas en múltiples ocasiones en el código y el valor que devuelven puede ser almacenado en una variable o utilizado directamente en alguna operación. Es importante tener en cuenta que al llamar a una función de retorno, se debe capturar el valor que devuelve para utilizarlo posteriormente en el código.
  */
  
  console.log("---Función Return---");
  
  // Definición de la función ejemplo6 que no recibe parámetros y retorna una cadena de texto
  function ejemplo6() {
    return "Yo solo retorno datos";
  }
  
  // Llamado a la función ejemplo6 y uso de console.log para imprimir el valor devuelto por la función
  console.log(ejemplo6());
  
  /* Cuando se invoca una función de tipo "return", esta devuelve un valor que puede ser asignado a una variable mediante una declaración de variable (let, const, var). Luego, esta variable puede ser impresa en la consola o utilizada en otra parte del código. 
  
  → La función de tipo "return" puede retornar cualquier tipo de dato, no necesariamente un string o un number, sino también un objeto, un array, un boolean, entre otros. 
  
  → Además, es importante destacar que JavaScript no detecta automáticamente el tipo de dato que retorna la función, sino que es necesario especificar el tipo de dato en la declaración de la variable que almacena el valor devuelto por la función. En resumen, es importante que se especifique el tipo de dato del valor devuelto por una función al declarar la variable que almacena el valor devuelto, ya que JavaScript no puede inferir automáticamente el tipo de dato del valor devuelto.
  */
  
  // Asignación del valor devuelto por la función ejemplo6 a la variable ejemplo6_
  let ejemplo6_ = ejemplo6();
  
  // Impresión del valor de la variable ejemplo6_ en la consola
  console.log(ejemplo6_);
  
  /*
  La función ejemplo6() retorna una cadena de texto "Yo solo retorno datos" cuando es llamada. Esta función puede ser llamada y su valor de retorno puede ser asignado a una variable utilizando una declaración de variable, lo que permite almacenar el valor devuelto en la variable. En este caso, la variable ejemplo6_ almacena el valor devuelto por la función ejemplo6(), que es una cadena de texto.
  
  Para utilizar este valor en el código posteriormente, simplemente se debe hacer referencia a la variable donde se almacenó el valor devuelto por la función. Por ejemplo, para imprimir el valor en la consola, se puede utilizar una llamada a la función console.log() y pasar como argumento la variable que contiene el valor.
  */
  
  console.log(ejemplo6_ + ", no lo olvides");
  
  console.log("-");
  
  /* 
  Nota: La secuencia en que se declara una función y la variable que la almacena no afecta la capacidad de la función para devolver un valor o la impresión del mismo mediante console.log(). Lo que es fundamental es que la variable que almacena el resultado de la función esté dentro del alcance (scope) adecuado y tenga un valor asignado antes de ser utilizada en cualquier operación de impresión.
  
  Es factible imprimir el resultado de una función de tipo return a través de console.log() en cualquier lugar donde la variable que almacena el resultado esté en el alcance correcto, ya sea dentro o fuera de la función.
  
  Cabe destacar que utilizar el mismo nombre para una función y una variable puede generar conflictos y errores en el código. Por lo tanto, es necesario elegir nombres descriptivos y claros para las variables y funciones, y evitar emplear el mismo nombre para ambas. En caso de ser necesario utilizar el mismo nombre, es posible distinguirlas mediante la utilización de un guion bajo. Asimismo, al llamar una función almacenada en una variable, es fundamental recordar añadir los paréntesis al final del nombre de la variable para que la función sea invocada correctamente.
  */
  
  const usuario = {
    nombre: "MrOX",
    fechaNacimiento: 2004,
    anioActual: 2023,
    trabajo: "Programador",
  };
  
  function presentarUsuario(usuario) {
    const edad = usuario.anioActual - usuario.fechaNacimiento;
    const mensaje = `El nombre del usuario es ${usuario.nombre}, tiene ${edad} años y trabaja como ${usuario.trabajo}.`;
    return mensaje;
  }
  
  console.log(presentarUsuario(usuario));
  
  // Explicación del código:  Este código en JavaScript define una función llamada presentarUsuario que acepta un objeto con las propiedades nombre, fechaNacimiento, anioActual y trabajo. Dentro de la función, se calcula la edad del usuario restando el año actual (anioActual) menos el año de nacimiento (fechaNacimiento), y se guarda en una variable llamada edad. Luego, se construye un mensaje con el nombre, edad y trabajo del usuario utilizando una plantilla de cadena (template string) de ES6. La función devuelve el mensaje construido. En el código principal, se definen varias constantes, entre ellas el nombre del usuario (NOMBRE_USUARIO), su año de nacimiento (FECHA_NACIMIENTO_USUARIO), el año actual (ANIO_ACTUAL) y su trabajo (TRABAJO_USUARIO). Luego, se llama a la función presentarUsuario pasando un objeto con estas propiedades. El mensaje resultante de la función se guarda en una constante llamada mensajePresentacion. Finalmente, el mensaje se imprime en la consola utilizando console.log.
  
  console.log("-");
  
  function ejemplo7() {
    return 18;
  }
  
  let ejemplo7_ = ejemplo7();
  console.log(ejemplo7_);
  
  console.log("-");
  
  const tiempo = {
    hoy: "Nublado",
    mañana: "Soleado",
  };
  
  function obtenerPrevisionMeteorologica(tiempo) {
    const previsión = `La previsión meteorológica para hoy es ${tiempo.hoy} y para mañana es ${tiempo.mañana}.`;
    return previsión;
  }
  
  console.log(obtenerPrevisionMeteorologica(tiempo));
  
  console.log("-");
  
  // Explicación del código: El código define un objeto llamado tiempo que tiene dos propiedades, hoy y mañana, que representan las condiciones meteorológicas actuales y futuras. A continuación, se define una función llamada obtenerPrevisionMeteorologica que toma como argumento el objeto tiempo. Dentro de la función, se utiliza la sintaxis de plantilla de cadena (template string) para crear una cadena de texto que contiene las previsiones meteorológicas para hoy y mañana, basadas en las propiedades del objeto tiempo. Finalmente, se llama a la función obtenerPrevisionMeteorologica con el objeto tiempo como argumento y se imprime el resultado en la consola utilizando la función console.log. En resumen, este código utiliza un objeto y una función para generar una previsión meteorológica basada en las condiciones actuales y futuras, y la imprime en la consola.
  
  // Nota: Cuando se pasa un objeto como argumento a una función en JavaScript, sus propiedades se pueden acceder dentro de la función utilizando la notación de punto o la notación de corchetes. En lugar de pasar cada propiedad del objeto como un argumento separado, se puede pasar todo el objeto y luego acceder a las propiedades dentro de la función. Este enfoque puede resultar útil cuando se trabaja con objetos que tienen muchas propiedades, ya que se puede evitar tener una lista larga y difícil de manejar de argumentos de función.
  
  let hola_amigo = holamigo(); // Se define una variable llamada "hola_amigo" que llama a la función "holamigo()".
  
  console.log(hola_amigo); // Se imprime el valor almacenado en la variable "hola_amigo" en la consola.
  
  function holamigo() {
    // Se define la función "holamigo()" que retorna una cadena de caracteres.
    return "Mira la serie 'MR.Robot'";
  }
  
  console.log("-");
  
  //Recuerda: En JavaScript, una función que incluye la palabra clave return devuelve un valor que puede ser asignado a una variable o utilizado en otro lugar del programa. Por otro lado, una función que no incluye return o utiliza la palabra clave void simplemente realiza una acción sin devolver un valor.
  
  function ejemploConCondicional(valor) {
    let resultado;
  
    if (typeof valor === "number") {
      resultado = valor + 10;
    } else if (typeof valor === "string") {
      resultado = `¡Hola, ${valor}!`;
    } else if (typeof valor === "boolean") {
      resultado = valor ? "Sí" : "No";
    } else if (Array.isArray(valor)) {
      resultado = valor.length;
    } else {
      resultado = null;
    }
  
    return resultado;
  }
  
  console.log(ejemploConCondicional(42)); // 52
  console.log(ejemploConCondicional("Mundo")); // ¡Hola, Mundo!
  console.log(ejemploConCondicional(true)); // Sí
  console.log(ejemploConCondicional([1, 2, 3])); // 3
  console.log(ejemploConCondicional({})); // null
  
  console.log("-");
  
  /*
  Explicación del código: En este ejemplo, la función ejemploConCondicional toma un valor como argumento y utiliza condicionales para determinar qué tipo de dato es el valor y luego devuelve un resultado en función de ese tipo de dato.
  
    → El primer ejemplo toma un número y devuelve el valor sumado a 10.
  
    → El segundo ejemplo toma una cadena de texto y devuelve un saludo personalizado.
  
    → El tercer ejemplo toma un valor booleano y devuelve "Sí" si es verdadero y "No" si es falso.
  
    → El cuarto ejemplo toma una matriz y devuelve la longitud de la matriz.
  
    → El quinto ejemplo toma cualquier otro tipo de dato y devuelve null.
  
  La función "ejemploConCondicional" en JavaScript utiliza una estructura condicional para evaluar el tipo de valor pasado como argumento y realizar una acción en consecuencia. El argumento se pasa a la función como "valor".
  
  La función primero declara una variable llamada "resultado" sin asignarle un valor inicial. Luego, utiliza la palabra clave "if" para comprobar si el tipo de "valor" es igual a "number". Si es así, la variable "resultado" se asigna a la suma de "valor" y 10.
  
  En caso contrario, la función utiliza la palabra clave "else if" para comprobar si el tipo de "valor" es una cadena de caracteres (string). Si es así, la variable "resultado" se asigna a una cadena de caracteres que contiene "¡Hola," seguido del valor de "valor", y finalmente un signo de exclamación.
  
  Si el tipo de "valor" no es un número ni una cadena de caracteres, la función utiliza la palabra clave "else if" para comprobar si el tipo de "valor" es un valor booleano (boolean). Si es así, la variable "resultado" se asigna a "Sí" si "valor" es verdadero (true) y "No" si es falso (false).
  
  Si "valor" es un arreglo (array), la función utiliza la palabra clave "else if" para comprobar si es un arreglo y si es así, la variable "resultado" se asigna al valor de su propiedad "length", que indica el número de elementos en el arreglo.
  
  Por último, si el tipo de "valor" no es ni número, cadena de caracteres, booleano ni arreglo, la variable "resultado" se asigna a "null".
  
  La función devuelve el valor de la variable "resultado" al final. Los valores de "valor" son pasados a la función mediante llamadas a console.log(), y los resultados de cada llamada a la función se imprimen en la consola.
  
  Nota: "number", "string", "boolean" son palabras reservadas de JavaScript que representan tipos de datos primitivos. Al utilizar estas palabras reservadas, se hace referencia al tipo de dato correspondiente. En pocas palabras, "number", "string" y "boolean" son palabras reservadas que se utilizan en JavaScript para hacer referencia a tipos de datos primitivos específicos, mientras que cuando se utilizan dentro de typeof, se obtiene una cadena de caracteres que representa el tipo de dato del valor que se está evaluando.
  */
  
  //--------------------
  
  /*
  Parámetros 
  
  En JavaScript, los parámetros son los valores que se pasan a una función cuando se llama. Los parámetros se definen como variables dentro de los paréntesis de la definición de la función.
  
  En programación, un parámetro se refiere a un valor o dato que se utiliza como entrada en una función. En el contexto de JavaScript, los parámetros son definidos como variables locales en la declaración de una función y se utilizan para procesar los datos que se le pasan a la misma. Los parámetros permiten a las funciones aceptar diferentes valores de entrada, lo que las hace más versátiles y reutilizables. Por lo tanto, en JavaScript, los parámetros son una herramienta esencial para la definición y el uso de funciones eficientes y efectivas.
  
  El objetivo de tener una función que recibe parámetros es poder ejecutarla con diferentes valores para obtener diferentes resultados. Al pasar diferentes valores a los parámetros de la función, se pueden procesar y transformar esos valores de diferentes maneras para obtener diferentes salidas. La creación de variables adicionales con diferentes nombres que contienen la función declarada permite llamar a la misma función con diferentes valores y obtener diferentes resultados, ya que cada variable puede contener valores diferentes. Por ejemplo, si se tiene una función que calcula el área de un círculo y se la asigna a dos variables diferentes, se puede llamar a cada variable con diferentes valores para calcular el área de círculos con diferentes radios. En resumen, la capacidad de recibir diferentes valores a través de los parámetros y procesarlos de diferentes maneras es una de las características principales de las funciones, lo que las hace muy útiles y versátiles para resolver problemas en programación.
  */
  
  function Sumar(a, b, c) {
    // ← La función Sumar tiene tres parámetros: a, b y c.
    console.log(b + a + c); // El orden en que se suman los parámetros no afecta el resultado final, ya que la suma es una operación conmutativa.
  }
  
  Sumar(5, 5, 4); //La línea de código Sumar(5,5,4); es una invocación a la función Sumar con tres argumentos 5, 5 y 4. Estos valores corresponden con los parámetros b, a y c de la función, en ese orden. Por lo tanto, la función sumará los valores 5, 5 y 4 en ese orden, ya que los valores reales de los parámetros se corresponden con su posición en la definición de la función.
  
  console.log("-");
  
  // Llamando a la función Rei_() con un argumento de 5 y asignando su resultado a la variable 'misato'
  let misato = Rei_(5);
  
  // Imprimiendo el valor de 'misato' en la consola
  console.log(misato); // Salida esperada: 10
  
  // Definiendo la función Rei_(), que toma un parámetro llamado 'Ayanami' y devuelve su valor incrementado en 5
  function Rei_(Ayanami) {
    return Ayanami + 5;
  }
  
  // Imprimiendo el resultado de llamar a la función Rei_() con un argumento de 5 en la consola
  console.log(Rei_(5)); // Salida esperada: 10
  
  console.log("-");
  
  //--------------------
  
  // Funciones anónimas
  
  /*
  Las funciones anónimas son una característica de JavaScript que permite definir funciones sin asignarles un nombre específico. En lugar de utilizar la sintaxis tradicional de definición de funciones con la palabra clave "function" seguida de un nombre, las funciones anónimas se crean utilizando la sintaxis de la función literal, que implica definir una función dentro de un par de corchetes {}.
  
  En JavaScript, es posible asignar una función anónima a una variable utilizando el operador de asignación "=" después de crear la función. Estas funciones asignadas a variables se conocen como funciones anónimas o expresiones de función. A diferencia de las funciones declaradas, que se definen utilizando la palabra clave "function" seguida de un nombre, las funciones anónimas no tienen un nombre específico asociado.
  
  Las funciones anónimas son especialmente útiles cuando se necesitan funciones como argumentos para otras funciones, ya que se pueden pasar directamente como parámetros sin tener que asignarles un nombre previo. Además, las funciones anónimas pueden tener acceso a variables en su ámbito léxico, lo que permite encapsular datos y comportamiento en un contexto específico. Es importante tener en cuenta que, aunque la variable tiene un nombre descriptivo, la función en sí sigue siendo anónima. Por lo tanto, no se puede llamar directamente a la función fuera del ámbito de la variable en la que se encuentra definida.
  
  Las funciones anónimas pueden tener un nombre dentro de la variable en la que se encuentran, lo cual puede ser útil para la recursión o para referirse a sí mismas internamente. Sin embargo, a nivel de la declaración de la función, siguen siendo consideradas como funciones anónimas debido a su falta de un nombre específico.
  */
  
  console.log("---Funciones Anónimas---");
  
  // Ejemplo de función anónima que suma dos números:
  
  const sumar = function (a, b) {
    return a + b;
  };
  
  console.log(sumar(2, 3)); // Imprime: 5
  
  console.log("-");
  
  // Ejemplo de función anónima que verifica si un número es par:
  
  // Definición de la función "esPar" que verifica si un número es par.
  const esPar = function (numero) {
    return numero % 2 === 0;
  };
  
  // Llamada a la función "esPar" con el argumento 4.
  console.log(esPar(4)); // Imprime: true
  
  // Llamada a la función "esPar" con el argumento 5.
  console.log(esPar(5)); // Imprime: false
  
  /*
  Explicación del código: 
  
  → Se declara una variable llamada esPar y se le asigna una función anónima como valor. Esta función toma un parámetro llamado numero.
  
  → Dentro de la función, se utiliza el operador de módulo % para calcular el residuo de la división de numero entre 2.
  
  → Se compara si el resultado de la operación anterior es igual a 0 utilizando el operador de igualdad estricta ===. Si la condición se cumple, significa que numero es par y se retorna true.
  
  → Si la condición no se cumple, es decir, el resultado del módulo no es igual a 0, la función retorna false.
  
  → A continuación, se realiza una llamada a la función console.log() con el objetivo de imprimir el resultado de la función esPar cuando se le pasa el argumento 4.
  
  → Se realiza otra llamada a console.log() para imprimir el resultado de la función esPar cuando se le pasa el argumento 5.
  
  En resumen, el código define una función llamada esPar que verifica si un número es par o no. Luego, se utilizan dos llamadas a esta función para comprobar si los números 4 y 5 son pares respectivamente. Los resultados de estas llamadas se imprimen en la consola.
  */
  
  console.log("-");
  
  let noName = function () {
    return " Los parámetros pueden aceptar cualquier tipo de dato";
  };
  
  console.log(noName()); // Cuando se posiciona el cursor sobre la variable sinNombre, en determinados entornos de programación o editores de texto, es factible que se muestre una representación visual de una función en forma de flecha (=>). Esta notación específica denota que se trata de una función de flecha, que puede ser empleada como una alternativa a una función anónima con el propósito de obtener una sintaxis más concisa y legible.
  
  console.log("-");
  
  // Ejemplo de función anónima que calcula el área de un círculo:
  
  const calcularAreaCirculo = function (radio) {
    return Math.PI * radio * radio;
  };
  
  console.log(calcularAreaCirculo(3)); // Imprime: 28.274333882308138
  
  console.log("-");
  
  // Ejemplo de función anónima que ordena un arreglo de números de forma ascendente:
  
  const ordenarNumeros = function (numeros) {
    return numeros.sort(function (a, b) {
      return a - b;
    });
  };
  
  console.log(ordenarNumeros([5, 3, 8, 2, 1])); // Imprime: [1, 2, 3, 5, 8]
  
  console.log("-");
  
  // Ejemplo de función anónima que muestra un mensaje de saludo personalizado:
  
  const saludar = function (nombre) {
    console.log("¡Hola, " + nombre + "!");
  };
  
  saludar("MrOX");
  
  console.log("-");
  
  // -
  
  const empleadaBanco = function () {
    let nombre = "Ana";
    let apellido = "de Armas";
    let puesto = "Asesora Financiera";
  
    return {
      presentarse: function () {
        console.log(`Hola, mi nombre es ${nombre} ${apellido}`);
        console.log(`Soy ${puesto} en este banco.`);
      },
    };
  };
  
  const empleado = empleadaBanco();
  empleado.presentarse();
  
  console.log("-");
  
  /*
  Explicación del código: Este código en JavaScript define una función llamada empleadaBanco que crea un objeto con un método llamado presentarse. A continuación, se crea una instancia de este objeto y se llama al método presentarse.
  
  1. const empleadaBanco = function() { ... }: Se define una función anónima llamada empleadaBanco utilizando la sintaxis de función de expresión. Esta función no toma ningún argumento.
  
  2. let nombre = "Ana";, let apellido = "de Armas";, let puesto = "Asesora Financiera";: Dentro de la función empleadaBanco, se declaran tres variables locales: nombre, apellido y puesto, que almacenan respectivamente el nombre, apellido y puesto de la empleada del banco. Estas variables solo son accesibles dentro del alcance de la función empleadaBanco.
  
  3. return { ... }: La función empleadaBanco devuelve un objeto con una propiedad llamada presentarse, que contiene una función anónima.
  
  4. presentarse: function() { ... }: Dentro del objeto devuelto, se define una función anónima llamada presentarse. Esta función no toma ningún argumento.
  
  5. console.log(Hola, mi nombre es ${nombre} ${apellido});: Dentro de la función presentarse, se utiliza console.log para mostrar un mensaje en la consola que incluye el nombre y el apellido de la empleada, los cuales se obtienen de las variables nombre y apellido definidas en el alcance de la función empleadaBanco.
  
  6. console.log(Soy ${puesto} en este banco.);: También dentro de la función presentarse, se utiliza console.log para mostrar un mensaje en la consola que indica el puesto de la empleada en el banco, obtenido de la variable puesto definida en el alcance de la función empleadaBanco.
  
  7. const empleado = empleadaBanco();: Se crea una constante llamada empleado y se le asigna el resultado de llamar a la función empleadaBanco(). Esto crea una instancia del objeto devuelto por empleadaBanco.
  
  8. empleado.presentarse();: Se llama al método presentarse en la instancia empleado. Esto muestra los mensajes en la consola que se definen en la función presentarse del objeto devuelto por empleadaBanco.
  
  En resumen, el código define una función empleadaBanco que crea un objeto con un método presentarse. Luego, se crea una instancia de este objeto y se llama al método presentarse, lo que muestra mensajes en la consola que presentan el nombre, apellido y puesto de la empleada del banco.
  */
  
  //--------------------
  
  /*
  La función flecha
  
  La función flecha, también conocida como "arrow function" en inglés, es una característica introducida en JavaScript ES6 (ECMAScript 2015). Proporciona una sintaxis más concisa y una forma más breve de escribir funciones en comparación con la sintaxis tradicional de funciones.
  
  La sintaxis básica de una función flecha es la siguiente:
  
  const miFuncion = (parametro1, parametro2, ...) => {
    // cuerpo de la función
  };
  
  Elementos que componen una función de flecha en JavaScript:
  
  1. Sintaxis de flecha: la sintaxis de flecha se utiliza para definir una función de flecha en JavaScript. La sintaxis es la siguiente: () => {}, donde () representa los parámetros de la función (puede ser vacío si no hay parámetros) y {} representa el cuerpo de la función.
  
  2. Parámetros: los parámetros se especifican entre los paréntesis () en la sintaxis de flecha. Si la función no toma ningún parámetro, los paréntesis permanecen vacíos.
  
  3. Cuerpo de la función: el cuerpo de la función se especifica entre las llaves {} en la sintaxis de flecha. Aquí es donde se define el comportamiento de la función.
  
  4. Valor de retorno: si la función devuelve un valor, este valor se especifica después de la flecha => en la sintaxis de flecha. Por ejemplo, si la función devuelve el valor x + 1, la sintaxis sería x => x + 1.
  
  En resumen, los elementos que componen una función de flecha en JavaScript son: la sintaxis de flecha, los parámetros (opcional), el cuerpo de la función y el valor de retorno (opcional).
  
  Nota: Además, la función flecha tiene algunas particularidades en cuanto a cómo maneja el contexto this, lo cual puede hacerla especialmente útil en algunos casos.
  */
  
  console.log("---Función Flecha---");
  
  // Función flecha sin parámetros:
  
  const saludar_ = () => console.log("¡Hola!");
  saludar_(); // Imprime "¡Hola!"
  
  console.log("-");
  
  // Función flecha con un parámetro:
  
  const uno = (num) => num * 2;
  console.log(uno(5)); // Imprime 10
  
  console.log("-");
  
  // Función flecha con múltiples parámetros:
  
  const sumar_ = (a, b) => a + b;
  console.log(sumar_(3, 4)); // Imprime 7
  
  console.log("-");
  
  const sumaYResta = (a, b) => {
    const suma = a + b;
    const resta = a - b;
    return [suma, resta];
  };
  console.log(sumaYResta(10, 5)); // Imprime [15, 5]
  
  console.log("-");
  
  // Función flecha como método de objeto:
  
  const objeto = {
    nombre: "MrOX",
    saludar: () => console.log(`Hola, soy ${this.nombre}`),
  };
  objeto.saludar(); // Imprime "Hola, soy undefined"
  
  /*
  El código JavaScript proporcionado crea un objeto llamado "objeto" con una propiedad llamada "nombre" y un método llamado "saludar". El método "saludar" se define como una función de flecha, lo que significa que no tiene su propio this. En su lugar, this hace referencia al ámbito externo en el que se define el objeto.
  
  Cuando se ejecuta objeto.saludar(), la función de flecha intenta acceder a this.nombre. Sin embargo, dado que this no se refiere al objeto "objeto", sino al ámbito externo, this.nombre no está definido en ese contexto. Como resultado, se imprime "Hola, soy undefined", ya que no se puede obtener el valor de nombre.
  
  Para solucionar este problema, se puede utilizar una función regular en lugar de una función de flecha para definir el método "saludar". Al hacerlo, el this dentro del método "saludar" se referirá correctamente al objeto "objeto", lo que permitirá acceder a la propiedad "nombre" y obtener el resultado esperado.
  */
  
  const objeto_ = {
    nombre: "MrOX",
    saludar: function () {
      console.log(`Hola, soy ${this.nombre}`);
    },
  };
  
  objeto_.saludar(); // Hola, soy MrOX
  
  console.log("-");
  
  //--------------------
  
  /*
  principales diferencias entre una función flecha y una función anónima:
  
  1. Sintaxis:
  
  → Función flecha: Las funciones flecha se definen utilizando la sintaxis de flecha => y no tienen la palabra clave function. La sintaxis básica es (parámetros) => { ... }.
  
  → Función anónima: Las funciones anónimas se definen utilizando la palabra clave function seguida de paréntesis () y llaves {}. La sintaxis básica es function(parámetros) { ... }.
  
  2. this:
  
  → Función flecha: En las funciones flecha, el valor de this se hereda del contexto circundante en el que se define la función. No tienen su propio this.
  
  → Función anónima: En las funciones anónimas, el valor de this depende de cómo se llame la función. Puede variar según el contexto de ejecución.
  
  3. Retorno implícito:
  
  → Función flecha: Si la función flecha tiene una sola expresión, se puede omitir la palabra clave return y las llaves {}, y la expresión se toma como el valor de retorno implícito.
  
  → Función anónima: Para devolver un valor en una función anónima, se debe utilizar explícitamente la palabra clave return.
  
  4. Argumento arguments:
  
  → Función flecha: Las funciones flecha no tienen su propio objeto arguments. Si necesitas acceder a los argumentos, puedes usar la sintaxis de "rest parameters" (...).
  
  → Función anónima: Las funciones anónimas tienen acceso al objeto arguments, que es un objeto especial que contiene los argumentos pasados a la función.
  
  5. Constructor:
  
  → Función flecha: Las funciones flecha no pueden ser utilizadas como constructores para crear objetos. No pueden ser llamadas con new.
  
  → Función anónima: Las funciones anónimas pueden ser utilizadas como constructores para crear objetos cuando se llaman con new.
  */
  
  // Función flecha
  const sumaFlecha = (a, b) => a + b;
  
  // Función anónima
  const sumaAnonima = function (a, b) {
    return a + b;
  };
  
  console.log(sumaFlecha(2, 3)); // Salida: 5
  console.log(sumaAnonima(2, 3)); // Salida: 5
  
  const objeto1 = {
    valor: 10,
    funcionFlecha: () => {
      console.log(this.valor);
    },
    funcionAnonima: function () {
      console.log(this.valor);
    },
  };
  
  objeto1.funcionFlecha(); // Salida: undefined (this.valor no está definido en el contexto global)
  objeto1.funcionAnonima(); // Salida: 10 (this.valor se refiere a objeto.valor)
  
  // Nota: Recuerda que las funciones flecha son especialmente útiles cuando se desea conservar el valor de this del contexto circundante y cuando se necesitan funciones de una sola expresión. Por otro lado, las funciones anónimas ofrecen mayor flexibilidad en cuanto al uso de this y pueden ser utilizadas como constructores. La elección entre una u otra dependerá del contexto y los requisitos específicos de tu código
  
  console.log("-");
  
  //--------------------
  
  /*
  Repaso de Parámetros en funciones
  
  1. En JavaScript no existe un límite específico para el número de parámetros que se pueden pasar a una función. Es decir, una función puede definirse para recibir cualquier número de parámetros según las necesidades del programador.
  
  2. Si se necesita pasar una gran cantidad de parámetros a una función, se puede considerar utilizar un objeto o un arreglo para agrupar los valores y luego acceder a ellos mediante su índice o clave correspondiente. Sin embargo, esto no siempre es la mejor opción, ya que puede dificultar la legibilidad del código y puede llevar a errores si los valores no se encuentran en el orden correcto. 
  
  -
  
  En algunos casos, puede ser más fácil y legible simplemente pasar los parámetros individuales a la función, especialmente si la cantidad de parámetros es manejable. También es importante tener en cuenta que el uso de un arreglo o un objeto para pasar parámetros puede afectar el rendimiento de la función, ya que la lectura de valores de un arreglo es menos eficiente que la lectura de variables individuales.
  
  En resumen, la elección de utilizar un arreglo para pasar muchos parámetros a una función dependerá del contexto específico y de las necesidades de la función. Se deben considerar factores como la legibilidad del código, la eficiencia de la lectura de los valores y la facilidad de acceso a los mismos.
  */
  
  console.log("---Repaso---");
  
  // -
  
  //Ejemplo 1: Función expresada con "return".
  
  function sumar__(a, b, c) {
    return a + b + c;
  }
  
  const res1 = sumar__(5, 5, 5);
  console.log(`El resultado es: ${res1}`);
  
  // Nota: Es importante que la cantidad de argumentos que se pasan al invocar una función coincida con la cantidad de parámetros que se definieron en la declaración de la misma para que la función se ejecute correctamente. Si se proporciona un número diferente de argumentos, se pueden producir errores en la ejecución del código.
  
  const res1_ = sumar__();
  console.log(`El resultado es: ${res1_}`); // Si se llama a la función sumar__ sin proporcionar los argumentos requeridos, es decir, mediante sumar__(), el resultado será NaN (Not a Number) debido a que JavaScript no puede realizar correctamente la suma de los parámetros a, b y c sin los valores adecuados. La función sumar__ espera recibir tres argumentos para llevar a cabo la suma. Si no se proporcionan los argumentos necesarios, JavaScript interpretará los parámetros como undefined, y la operación de suma entre undefined y cualquier número dará como resultado NaN. Por lo tanto, al imprimir res1_ en la consola, se obtendrá NaN.
  
  // Nota: Una de las utilidades de las variables en las funciones es almacenar datos que se pueden utilizar en el proceso de la función o devolver como resultado. Las variables permiten almacenar temporalmente información dentro de una función, lo que facilita la manipulación de los datos y la ejecución de las operaciones necesarias en la función.
  
  // -
  
  //Ejemplo2: Función expresada con "return".
  
  function restar__(y, z, x, v) {
    return y - z - x - v;
  }
  
  const res2 = restar__(50, 10, 5, 10);
  console.log(`El resultado es: ${res2}`);
  
  console.log("----");
  
  // Aplicar lo aprendido
  
  // Calculadora básica: Crea una función llamada "calculadora" que tome dos números y una operación como parámetros y devuelva el resultado de la operación. Las operaciones pueden ser "suma", "resta", "multiplicacion" o "division".
  
  function calculadora(num1, num2) {
    return num1 + num2;
  }
  
  const resCalculadoraSuma = calculadora(2, 2);
  
  console.log(resCalculadoraSuma);
  
  console.log("--");
  
  // Contador de palabras: Escribe una función llamada "contarPalabras" que tome una cadena de texto como parámetro y devuelva el número de palabras en esa cadena.
  
  function contarPalabras(cadena) {
    return cadena.length;
  }
  
  const resContarPalabras = contarPalabras("Hola, esto es JavaScript");
  console.log(resContarPalabras);
  
  console.log("--");
  
  // Número mayor: Crea una función llamada "numeroMayor" que tome dos números como parámetros y devuelva el número mayor de los dos.
  
  function numeroMayor(num1, num2) {
    if (num1 > num2) {
      console.log("El primer número es mayor");
    } else {
      console.log("El segundo número es mayor");
    }
  }
  
  numeroMayor(5, 9);
  
  console.log("--");
  
  // Verificar si es par: Escribe una función llamada "esPar" que tome un número como parámetro y devuelva true si el número es par, o false si es impar.
  
  function esPar_(num) {
    return num % 2 === 0;
  }
  
  console.log(esPar_(90));
  
  function esPar1(num) {
    if (num % 2 === 0) {
      console.log("Es par");
    } else {
      console.log("No es par");
    }
  }
  
  esPar1(18);
  
  console.log("--");
  console.log("--");
  
  // Crea una función void llamada "saludar1_" que imprima en la consola el mensaje "¡Hola, mundo!".
  
  function saludar1_() {
    console.log("Hola, mundo!");
  }
  
  saludar1_();
  
  // ---
  
  let saludar1_1 = "Hola, mundo!";
  console.log(saludar1_1);
  console.log(typeof saludar1_1);
  
  function saludar1_1_(saludar1_1) {
    console.log(saludar1_1);
  }
  
  saludar1_1_(saludar1_1);
  
  console.log("---");
  console.log("---");
  
  // ---
  // ---
  
  // Escribe una función void llamada "mostrarNumeros" que imprima en la consola los números del 1 al 10.
  
  console.log("---");
  console.log("---");
  
  // Implementa una función void llamada "imprimirTablaMultiplicar" que tome un número como parámetro y muestre por consola la tabla de multiplicar del 1 al 10 de ese número.
  
  console.log("---");
  console.log("---");
  
  // Define una función void llamada "repetirPalabra" que tome una palabra y un número como parámetros, y muestre por consola la palabra repetida tantas veces como indique el número.
  
  console.log("---");
  console.log("---");
  
  // Crea una función void llamada "imprimirFecha" que obtenga la fecha actual y la imprima en formato "Día/Mes/Año".
  
  console.log("---");
  console.log("---");
  
  // ---
  
  // Implementa una función llamada "sumar_1" que tome dos números como parámetros y devuelva la suma de ambos.
  
  function sumar_1(num1, num2) {
    return num1 + num2;
  }
  
  console.log(sumar_1(100, 900));
  
  let sumar_1_ = sumar_1(50, 50);
  console.log(sumar_1_);
  
  // Escribe una función llamada "esPar_1" que tome un número como parámetro y devuelva true si es par, o false si es impar.
  
  function esPar_1(número) {
    return número % 2 === 0;
  }
  
  console.log(esPar_1(8));
  console.log(esPar_1(9));
  console.log(esPar_1(88));
  console.log(esPar_1(99));
  
  // Crea una función llamada "obtenerMayor_" que tome dos números como parámetros y devuelva el mayor de ellos.
  
  function obtenerMayor_(número1, número2) {
    return número1 > número2
      ? "El primer número es mayor"
      : "El segundo número es mayor";
  }
  
  console.log(obtenerMayor_(2, 8));
  console.log(obtenerMayor_(8, 22));
  console.log(obtenerMayor_(22, 12));
  console.log(obtenerMayor_(8, 2));
  
  let obtenerMayor_1 = obtenerMayor_(50);
  console.log(obtenerMayor_1);
  
  // Define una función llamada "calcularPromedio" que tome un arreglo de números como parámetro y devuelva el promedio de esos números.
  
  console.log("---");
  console.log("---");
  
  // Implementa una función llamada "invertirCadena" que tome una cadena de texto como parámetro y devuelva la cadena invertida.
  
  console.log("---");
  console.log("---");
  
  // ---
  
  // Crea una arrow function llamada "doble" que tome un número como parámetro y devuelva el doble de ese número.
  
  let doble = (num) => num * 2;
  
  console.log(doble(2));
  console.log(doble(500));
  
  console.log("---");
  
  // Implementa una arrow function llamada "esPositivo" que tome un número como parámetro y devuelva true si es positivo, o false si es negativo o cero.
  
  let esPositivo = (num) => {
    if (num <= 0) {
      console.log("Es Negativo");
    } else {
      console.log("Es Positivo");
    }
  };
  
  esPositivo(-10);
  esPositivo(0);
  esPositivo(10);
  esPositivo(1);
  
  console.log("---");
  
  // Define una arrow function llamada "obtenerLongitud" que tome una cadena de texto como parámetro y devuelva la longitud de esa cadena.
  
  let obtenerLongitud = (texto) => {
    return texto.length;
  };
  
  let resObtenerLongitud = obtenerLongitud(
    "Hola, soy MrOX, espero te guste JavaScript!"
  );
  console.log(resObtenerLongitud);
  
  console.log("---");
  
  // Escribe una arrow function llamada "convertirMayusculas" que tome una cadena de texto como parámetro y devuelva la cadena en mayúsculas.
  
  let convertirMayusculas = (texto) => {
    return texto.toUpperCase();
  };
  
  let resConvertirMayusculas = convertirMayusculas(
    "el mundo es un lugar de oportunidades"
  );
  
  console.log(resConvertirMayusculas);
  
  console.log("---");
  
  // Crea una arrow function llamada "sumarArray" que tome un arreglo de números como parámetro y devuelva la suma de todos los elementos.
  
  let sumarArray = (arreglo) => {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  };
  
  let resSumarArray = sumarArray([1, 2, 3]);
  console.log(resSumarArray);
  
  // Explicación del código : la función sumarArray toma un arreglo de números como parámetro. Luego, se utiliza un bucle for para iterar sobre cada elemento del arreglo y sumarlos a la variable suma. Finalmente, se devuelve el valor de suma, que es la suma de todos los elementos del arreglo. El resultado de la función sumarArray([1, 2, 3]) se almacena en la variable resSumarArray y se muestra en la consola mediante console.log(resSumarArray). En este caso, el resultado sería 6 porque la suma de los elementos [1, 2, 3] es igual a 6.
  
  console.log("---");
  
  // ---
  
  // Implementa una función anónima que tome dos números como parámetros y devuelva el producto de ambos.
  
  let eje1 = function (num1, num2) {
    return num1 + num2;
  };
  
  let resEje1 = eje1(40, 80);
  console.log(resEje1);
  
  console.log("---");
  
  // Crea una función anónima que tome un arreglo de números como parámetro y devuelva el número más pequeño.
  
  let encontrarNumeroMasPequeno = function (numeros) {
    return Math.min(...numeros);
  };
  
  // Ejemplo de uso
  const numeros = [10, 5, 8, 2, 4];
  const numeroMasPequeno = encontrarNumeroMasPequeno(numeros);
  console.log(numeroMasPequeno); // Imprimirá 2
  
  console.log("---");
  