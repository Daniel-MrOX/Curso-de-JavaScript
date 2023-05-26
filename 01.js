// Primeros Pasos:

/*
En JavaScript (JS), un comentario es una parte del código que se utiliza para agregar notas, explicaciones o anotaciones en el código fuente. Los comentarios no se ejecutan como parte del programa y no afectan el comportamiento del código. Su propósito principal es proporcionar información adicional a los programadores que leen el código.

En JS, existen dos tipos principales de comentarios:

→ 1 Comentario de una línea: Se utiliza para agregar un comentario en una sola línea. Puedes crearlo utilizando dos diagonales (//) seguidas del texto del comentario. Todo lo que sigue después de las diagonales se considera parte del comentario y no se ejecutará.

Ejemplo:

// Esto es un comentario de una línea

→ 2 Comentario de varias líneas: Se utiliza para agregar comentarios que abarcan varias líneas. Se inicia con una barra diagonal seguida de un asterisco (/) y se cierra con un asterisco seguido de una barra diagonal (/). Todo lo que se encuentra entre estos delimitadores se considera parte del comentario y no se ejecutará.

Ejemplo:

/*
Esto es un comentario
de varias líneas
*/

// Estos comentarios son útiles para explicar el propósito de ciertas secciones de código, documentar el código, desactivar temporalmente porciones del código o agregar notas para otros desarrolladores que trabajen en el proyecto.

//--------------------

/*V A R I A B L E S*/

/*
Las variables son una característica fundamental de cualquier lenguaje de programación. Se dice que un lenguaje de programación es un lenguaje de programación cuando tiene variables y funciones. En JavaScript, existen tres formas de crear variables: "var", "let" y "const".

La palabra clave "var" se utilizó originalmente para declarar variables en JavaScript, pero desde la introducción de "let" y "const" en ES6, su uso ha disminuido. "Var" declara variables con alcance de función, lo que significa que las variables declaradas con "var" pueden ser accedidas dentro de la función en la que se declararon. Sin embargo, si una variable se declara dentro de una función y se intenta acceder a ella fuera de la función, se considera que está en el ámbito global y puede ser accedida desde cualquier lugar del código.

"Let" y "const", por otro lado, tienen un ámbito de bloque, lo que significa que solo pueden ser accedidas dentro del bloque en el que se declararon. Además, "const" es una variable de solo lectura, lo que significa que una vez que se ha asignado un valor, no se puede cambiar. Esto hace que "const" sea útil para declarar constantes, como valores fijos que no deberían cambiar durante la ejecución del programa.

En resumen, las variables son una parte fundamental de JavaScript, y existen tres formas de crearlas: "var", "let" y "const". Cada forma de creación tiene diferentes características y alcances, lo que las hace adecuadas para diferentes situaciones de programación.

Que es una variable es JavaScript?
R/ Una variable en JavaScript es una ubicación en la memoria del ordenador que se utiliza para almacenar información que puede ser modificada durante la ejecución del programa. Una forma sencilla de entender lo que es una variable en JavaScript es imaginarla como una caja en la memoria del ordenador, dentro de la cual se pueden almacenar uno o más valores.

Cada variable en JavaScript tiene un nombre que la identifica, y el valor almacenado dentro de la variable puede cambiar durante la ejecución del programa. Por ejemplo, una variable "edad" puede almacenar un número entero que representa la edad de una persona, y ese valor puede cambiar a medida que la persona envejece.

En JavaScript, el tipo de valor que se puede almacenar en una variable depende del tipo de dato que se utiliza al declarar la variable. Por ejemplo, una variable que se declara con la palabra clave "var" puede almacenar cualquier tipo de valor, incluyendo números, cadenas de texto, booleanos, objetos, funciones y más. Sin embargo, es importante tener en cuenta que el valor almacenado en una variable debe ser compatible con el tipo de dato que se espera que la variable contenga.

En resumen, una variable en JavaScript es una ubicación en la memoria del ordenador que se utiliza para almacenar información que puede cambiar durante la ejecución del programa. Cada variable tiene un nombre y puede almacenar diferentes tipos de valores, lo que hace que las variables sean una parte esencial de la programación en JavaScript.
*/

//---

let ejemplo1 = "Hola Mundo"; // Variable inicializada
console.log(ejemplo1);
console.log("---");
/*
- Tipo de Variable + Nombre de la variable + Operador de asignación + Dato/Informacion.

- let = tipo de variable + ejemplo1 = nombre de la variable + *=* = operador de asignación + "Hola mundo" = tipo de dato de la variable
*/

//---

/*
En JavaScript, existen tres tipos de variables: var, let y const. Sin embargo, en la actualidad, se utilizan principalmente dos de estos tipos de variables: let y const.

La palabra clave "var" se utilizó anteriormente para declarar variables en JavaScript, pero su uso se ha vuelto menos común debido a sus comportamientos extraños en algunos casos. La palabra clave "let" se introdujo en la versión ES6 de JavaScript y se utiliza para declarar variables que pueden cambiar de valor durante la ejecución del programa. La palabra clave "const" también se introdujo en ES6 y se utiliza para declarar variables que no pueden cambiar de valor una vez que se han asignado.

Es importante tener en cuenta que todas estas palabras clave son reservadas en JavaScript, lo que significa que no se pueden utilizar como nombres de variables, funciones u otros identificadores. Además, el uso de "let" y "const" puede mejorar la claridad y la seguridad del código en comparación con el uso de "var".

En resumen, en JavaScript existen tres palabras clave para declarar variables: var, let y const. Actualmente, se utilizan principalmente "let" y "const" debido a sus comportamientos más predecibles y claros en comparación con "var".

Nota:  Es una buena práctica en JavaScript tener la menor cantidad de variables mutables posible, ya que esto puede evitar errores y hacer que el código sea más fácil de entender y mantener. En el caso de que sepamos que el valor de una variable no va a cambiar durante la ejecución del programa, es mejor utilizar const en lugar de let. const se utiliza para declarar variables que no pueden ser reasignadas después de su inicialización. Al utilizar const estamos asegurando que el valor de la variable no será modificado accidentalmente en ninguna otra parte del código. Además, el uso de const también puede ayudar a optimizar el rendimiento del programa, ya que el motor de JavaScript puede hacer algunas optimizaciones de compilación si sabe que una variable no cambiará su valor. Recuerda que en JavaScript, las variables mutables son aquellas que se declaran con let. Las variables declaradas con let pueden cambiar de valor en cualquier momento después de su inicialización. Por lo tanto, se consideran mutables.
*/

// Nota : En JavaScript, el uso del punto y coma (;) al final de una línea de código no es estrictamente necesario, ya que el intérprete de JavaScript puede inferir el final de una línea de código en función de la estructura sintáctica del código. Sin embargo, en otros lenguajes de programación como C o PHP, el uso del punto y coma es obligatorio al final de cada instrucción. Por lo tanto, aunque en JavaScript no sea necesario utilizar el punto y coma, es una buena práctica hacerlo para evitar problemas de interpretación del código en otros lenguajes de programación y para mejorar la legibilidad del código. Además, es importante tener en cuenta que JavaScript es un lenguaje de programación de tipado dinámico. Esto significa que el tipo de datos de una variable se infiere automáticamente en función del valor que se le asigna, y no está determinado por el nombre de la variable en sí. Esto puede tener implicaciones en la forma en que se manejan los datos y en la forma en que se diseñan los programas en JavaScript en comparación con otros lenguajes de programación de tipado estático, como Java o C#.

// Nota: En JavaScript, es posible cambiar el tipo de datos de una variable en cualquier momento simplemente asignándole un valor de un tipo diferente. Esto significa que no es necesario volver a declarar la variable utilizando la palabra reservada correspondiente (var, let o const) para cambiar su tipo de datos. En lugar de ello, podemos simplemente asignar un valor de un tipo diferente a la misma variable. Esto es posible gracias a que JavaScript es un lenguaje de programación de tipado dinámico, lo que significa que el tipo de datos de una variable se infiere automáticamente en función del valor que se le asigna, y puede cambiar en cualquier momento en función de los nuevos valores asignados a la variable.

let ejemplo2 = "Hola amigo";
console.log(ejemplo2);
console.log("---");
ejemplo2 = "Hello Freund";
console.log(ejemplo2);
console.log("---");
ejemplo2 = 18;
console.log(ejemplo2);
console.log("---");
ejemplo2 = true;
console.log(ejemplo2);
console.log("---");
ejemplo2 = undefined;
console.log(ejemplo2);
console.log("---");
ejemplo2 = false;
console.log(ejemplo2);
console.log("---");
ejemplo2 = ["PC", "Papel", "Teclado", "Mouse"];
console.log(ejemplo2);
console.log("---");
ejemplo2 = {
  nombre: "MrOX",
  apellido: "Ayanami",
  edad: 18,
  trabajo: "Programador",
};
console.log(ejemplo2);
console.log("---Tabla---");
console.table(ejemplo2);
console.log("---");

// En JavaScript, es posible inicializar múltiples variables en una sola línea de código utilizando una sola palabra reservada. Esto se puede lograr mediante el uso de una lista separada por comas de nombres de variables, seguidos de la palabra reservada correspondiente (var, let o const), y sus valores correspondientes.

let ejemplo3 = 21,
  ejemplo4 = "El Salvador",
  ejemplo5 = true;

console.log(ejemplo3);
console.log(ejemplo3, ejemplo4, ejemplo5);
console.log("---");

let x, y;
x = y = 100;
console.log(x);
console.log(y);
console.log(x, y);
x = y = 100 - 50 + 10;
console.log(x);
console.log(y);
console.log(x, y);
console.log("---");

let x_, y_;
x_ = y_ = 25 - 10 - 5;
console.log(x_, y_);
console.log("---");

//--------------------

/*
Convenciones y reglas para nombrar variables en JavaScript

El tipo de dato de las variables en JavaScript puede incluir letras, números y ciertos caracteres. Es importante destacar que el nombre de la variable no debe contener la misma información que se está definiendo en el tipo de dato de la variable. Además, existen diversas reglas que debemos seguir al definir el nombre de una variable en JavaScript.

- 1. Los nombres de las variables deben comenzar con una letra, un guión bajo (_) o un símbolo de dólar ($). No pueden comenzar con un número.  Es importante tener en cuenta que, al definir el nombre de una variable en JavaScript, nunca debemos comenzar con un número. No obstante, es posible incluir un número después de la primera letra asignada al nombre de la variable, o en cualquier otra posición que el programador considere apropiada.
*/

// let 6ejemplo = 6; // Nombre de la variable escrito incorrectamente

let ejemplo6 = 6; // Nombre de la variable escrito correctamente
console.log(ejemplo6);
console.log("---");

/*
- 2. Los nombres de las variables pueden contener letras, números, guiones bajos (_) y símbolos de dólar ($). No se debe emplear ningún operador matemático al inicio del nombre de una variable, ya que esto provocará un error. Por lo general, se utiliza el guion bajo (_) para separar las palabras en el nombre de la variable.
*/

// let +ejemplo7_ = 7; → Nombre de la variable escrito  incorrectamente.

// let -ejemplo8_ = 8; → Nombre de la variable escrito incorrectamente.

// let *ejemplo9_ = 9; → Nombre de la variable escrito incorrectamente.

// let /ejemplo10_ = 10; → Nombre de la variable escrito incorrectamente.

// let ejemplo+11 = 11; → Nombre de la variable escrito incorrectamente.

// let ejemplo-12 = 12; → Nombre de la variable escrito incorrectamente.

let _7ejemplo = 7;
console.log(_7ejemplo);
console.log("---");

//--------------------

/*
Recomendaciones

→ Los nombres de las variables deben ser descriptivos y reflejar el propósito o contenido de la variable. Deben ser fácilmente entendibles por cualquier persona que lea el código.

→ Los nombres de las variables en JavaScript son sensibles a mayúsculas y minúsculas, lo que significa que "miVariable" y "mivariable" son dos variables diferentes.

→ Es recomendable utilizar el estilo de escritura camelCase para nombrar variables en JavaScript. Esto significa que la primera palabra se escribe en minúsculas, y cada palabra adicional comienza con una letra mayúscula. Por ejemplo: miVariableEjemplo.

→ Es importante evitar utilizar nombres de variables que ya están reservados en JavaScript, como "function", "let", "var", entre otros.

→ En JavaScript y en la programación orientada a objetos en general, es común utilizar la convención de nomenclatura llamada "PascalCase" para nombrar clases, constructores y otros objetos que representen tipos de datos. PascalCase consiste en escribir la primera letra de cada palabra en mayúscula, sin utilizar espacios ni guiones bajos. Por ejemplo, en una aplicación de JavaScript orientada a objetos, se podría tener una clase llamada "Persona".
*/

//--------------------

// Estilos de sintaxis para variables en JavaScript.

// Underscore

let ejemplo_8 = "El nombre de mi variable contiene un (_)";
console.log(ejemplo_8);
console.log("---");

// Camelcase → es una convención de nomenclatura muy utilizada en programación, especialmente en JavaScript, que consiste en escribir el nombre de las variables sin espacios y con la primera letra de cada palabra en mayúscula, excepto la primera. Esta práctica facilita la legibilidad del código y es ampliamente recomendada como buena práctica.

let ejemploNueve =
  "La primera letra del nombre de mi variable va en minúscula mientras que la segunda palabra que contiene el nombre de mi variable va en mayúscula";
console.log(ejemploNueve);
console.log("---");

// PascalCase → se utiliza comúnmente en la definición de nombres de clases y otros tipos de definiciones en JavaScript. En PascalCase, la primera letra de cada palabra en el nombre de la variable comienza con una letra mayúscula y todas las demás letras están en minúsculas.

let EjemploDiez =
  "La primera letra de cada palabra que este designada al nombre de mi variable estará en mayúsculas";
console.log(EjemploDiez);
console.log("---");

// Nota : la siguiente forma de nombrar variables en JavaScript nunca se debe de realizar, ya que puede causar confusiones en el código y hacer que sea más difícil de mantener y depurar.

let ejemplodiez = "No declares el nombre de una variable de este modo porfavor";
console.log(ejemplodiez);
console.log("---");

//--------------------

// Como ver (imprimir) el valor que contiene cada variable en JavaScript?

//console.log(); // → Datos primitivos
//console.table(); // → Objetos

let ejemplo111 = 111;
let ejemplo222 = 222;
console.log(ejemplo111);
console.log(ejemplo222);
console.log("---");

let ejemplo333 = 333;
let ejemplo444 = 444;
let ejemplo555 = 555;
console.log(ejemplo333, ejemplo444, ejemplo555);
console.log("---");

ejemplo333 = 555;
ejemplo444 = 444;
ejemplo555 = 555;
console.log(ejemplo333, ejemplo444, ejemplo555);
console.log("---");

//--------------------

/*
IMPORTANTE
Una variable no puede ser creada con el mismo nombre que otra dentro de un bloque. Sin embargo, una variable puede utilizar el mismo nombre que otra variable siempre y cuando esté fuera de un bloque. Esta regla aplica para las variables var y let, pero en el caso de la variable const es diferente.
*/

//--------------------

/*
Diferencias que poseen las variables (var) y (let) en JavaScript.

En cuanto a la declaración de variables, la forma antigua de hacerlo era utilizando la palabra reservada "var". Sin embargo, al crear una variable utilizando "var", esta se convierte en una variable de tipo global. Una variable de tipo global es aquella que puede ser accedida y modificada desde diferentes bloques de código, lo que puede afectar su funcionamiento en el programa.

Hoy en día, la recomendación es utilizar la declaración de variables con la palabra reservada "let". A diferencia de "var", "let" no crea variables de tipo global, lo que significa que su alcance es más específico. De esta manera, una variable creada con "let" no afectará bloques o funciones en los que no se le haya dado acceso.

En resumen, es recomendable no utilizar "var" y en su lugar utilizar "let" para la declaración de variables en JavaScript, ya que esto permite un manejo más específico y controlado del alcance de las variables en el programa.

//  let=> "La palabra reservada 'let' es utilizada en JavaScript para declarar una variable cuyo alcance está limitado al bloque donde fue definida. Esto significa que una variable declarada con 'let' no puede ser redeclarada dentro del mismo bloque. Por lo tanto, es importante tener en cuenta que una variable definida con 'let' no puede ser utilizada fuera del bloque en el que fue declarada. Esta característica hace que el uso de 'let' sea más seguro y más específico que el uso de la palabra reservada 'var' en JavaScript."
*/

let nombreCliente = "Rei"; // → Global
console.log(nombreCliente);
console.log("---");

if (true) {
  let nombreCliente = "Shinji"; // → Bloque if
  console.log(nombreCliente);
}
console.log("---");

// Nota : La estructura de var y let para declarar variables es similar, aunque hay algunas diferencias clave. La principal diferencia entre var y let es que var tiene un ámbito de función, lo que significa que la variable declarada con var puede ser accesible desde cualquier lugar dentro de la función donde fue declarada, incluso antes de su declaración. Por otro lado, let tiene un ámbito de bloque, lo que significa que la variable declarada con let solo es accesible dentro del bloque donde fue declarada. Es cierto que se considera una buena práctica utilizar let en lugar de var en la mayoría de los casos, ya que ayuda a evitar problemas como la redeclaración accidental de variables en un mismo ámbito de bloque. Además, el uso de let y const en lugar de var también ayuda a garantizar un código más limpio y fácil de mantener.

//--------------------

/*
Variable (const)

Las variables constantes presentan un ámbito de bloque (block scope) tal y como lo hacen las variables definidas usando la instrucción let, con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. Las constantes no se pueden redeclarar. La diferencia entre let y const son:

- 1. No podemos inicializar una variable (const) sin valor ya que todas las variable declaradas con (const) deben llevar un valor/dato/info de cualquier tipo por ley, con let si se puede iniclaizar una variable para posteriormente darle uno alor/dato/info.

- 2. No se puede reasignar un valor/dato/info a (const) debido a que no se permite redeclarar una variable constante.
*/

const errorDefinido = 404;
console.log(errorDefinido);
// errorDefinido = 401; → Al imprimir una variable declarada como constante, la consola mostrará el último valor modificado de dicha variable. Sin embargo, si intentamos redeclarar el valor de una variable constante, la consola mostrará un error en la línea anterior a la impresión del último valor modificado. Es importante destacar que no está permitido redeclarar una variable constante en JavaScript.
console.log("---");

// Nota : La redeclaración de la misma variable bajo un mismo ámbito léxico terminaría en un error de tipo SyntaxError. Esto también es extensible si usamos var dentro del ámbito léxico. Esto nos salvaguarda de redeclarar una variable accidentalmente y que no era posible solo con var. Const es una variable de ambito global, a que voy con esto, var anteriormente era utilizada para definir ambitos globales, hoy en dia se utiliza (const) como una variable global.

//--------------------

// Resumen General

/*
En JavaScript tenemos tres tipos de variables, estas son :

→ var

→ let

→ const

"Cada una de ellas tiene sus propias características y usos específicos."
*/

/*
Variables de tipo (var)

"Prohibido su uso" al menos en la mayoría del código. Las variables de tipo "var" eran la forma en cómo se declaraban las variables anteriormente. Las variables de tipo "var" son globales, es decir, no importa dónde se declaren, ya que se puede acceder a ellas desde cualquier parte del código. Esto aumenta la probabilidad de que, sin darnos cuenta, existan errores.
*/

var X = 5; // Declaración global

//Bloque de código:

if (true) {
  var Y = 10; //declaración de bloque dentro de if.
}

console.log(X); //Imprime 5
console.log(Y); //Imprime 10 apesar que este dentro de un bloque de código
console.log("---");

// Nota: Sé que en estos momentos puede ser difícil entender por qué no debemos usar (var). Sin embargo, debes tener en cuenta que las variables de tipo (var) son globales, lo que significa que si tenemos una variable de tipo (var) a la que le asignamos el mismo nombre que otra variable de tipo (var), esta última reescribirá sus datos. Esto podría afectar el código en el futuro.

var i = 10; // Declaración global

// Bloque de código:

if (true) {
  var i = 100; //declaración de bloque dentro de if
}

console.log(i); // Imprime 100.
console.log("---");

//--------------------

/*
Variables de tipo (let)

A diferencia de las variables de tipo (var), las variables declaradas con (let) tienen un alcance de bloque y son visibles solo desde el punto de declaración hasta el final del bloque en el que se encuentran.
*/

let o = "Hola Amigo"; // Declaración de la varible (o) de forma global

// Bloque de código:

if (true) {
  let z = 100; // Declaración de la variable (z) en bloque if
}

console.log(o); // Imprime "Hola Amigo". Esto se debe a que la variable (o) es de tipo global.
console.log("---");

// console.log(z); → Al momento de imprimir la variable (z), dará error, esto se debe a que las variables de tipo (let) son visibles solo desde el punto de declaración hasta el final del bloque en el que se encuentran. Para solucionar este error, debemos imprimir el valor de la variable (z) dentro del bloque en el que esta se encuentra.

let ejemplo = 70; // Declaración de la varible (ejemplo) de forma global

// Bloque de código:

if (true) {
  let ejemplo_ = 100;
  console.log(ejemplo_); // Impresión de la variable (ejemplo_) dentro de su bloque
  console.log("---");
}

console.log(ejemplo);
console.log("---");

// Nota: Es posible que se utilice el mismo nombre para una variable en un ámbito global y en uno de bloque. Recuerde que se puede acceder a las variables globales dentro de diferentes bloques de código, ya que están presentes en el ámbito global dentro del código.

let ejemplox = 900; // Declaración global

if (true) {
  let ejemplox = 90; // Declaración de bloque
  console.log(ejemplox); // Al ser una variable declarada globalmente, se puede acceder a ella desde cualquier parte del código
  console.log("---");
}

console.log(ejemplox); // Impresión correcta dentro de su ámbito
console.log("---");

//--------------------

/*
Variables de tipo (const)

La palabra reservada "const" se utiliza para declarar variables que no pueden ser reasignadas después de su declaración inicial. Al igual que las variables declaradas con la palabra reservada "let", las variables declaradas con "const" tienen un alcance limitado al bloque en el que se declaran. Recuerda que en JavaScript, las variables mutables son aquellas que se declaran con let. Las variables declaradas con let pueden cambiar de valor en cualquier momento después de su inicialización. Por lo tanto, se consideran mutables. En contraste, las variables declaradas con const no pueden cambiar su valor después de su inicialización, por lo que se consideran inmutables o constantes.
*/

const _pi = 3.1416; //declaración Global.

//bloque de código:

if (true) {
  const pi_ = 3.1517; //declaración de bloque.
  console.log(pi_); //Imprime 3.1517
  console.log("---");
}

console.log(_pi); //Imprime 3.1416
console.log("---");

/*
_pi = 4.1416; //Produce un error, ya que la variable _pi es una constante y por lo tanto no puede ser reasignada.
pi_ = 4.1517; //Produce un error, ya que la variable pi_ es una constante y por lo tanto no puede ser reasignada.
*/

//Resumen → Nosotros vamos a crear siempre variables de tipo (const) cuando sabemos que un dato no debe de cambiar, excepto cuando ese valor que guardemos no sea constante, utilizaremos las variables de tipo (let).
