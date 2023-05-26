//Tipos de datos en JavaScript

/*
En programación, cuando se habla de los tipos de datos que tiene un lenguaje, se hace referencia al tipo de valor que va a tener una variable. Cada tipo de dato nos permite realizar diferentes operaciones. Por ejemplo, si creamos un número en una variable, podemos sumarlos, restarlos, multiplicarlos o dividirlos con otra variable cuyo tipo de dato sea un número (number).
*/

//--------------------

/*
Strings o Cadenas de Texto.

El tipo de dato "string" representa, en pocas palabras, el tipo de texto que se puede asignar a una variable en JavaScript. La forma correcta de asignar un "string" a una variable en JavaScript es colocando comillas dobles o sencillas al inicio del texto y el cierre de comillas al final del mismo. JavaScript siempre detectará que esto es un "string" o cadena de texto. Es importante mencionar que existen tres formas de codificar "strings" en JavaScript.
*/

let string = "Mi nombre es"; // Esta es la forma más utilizada para asignar a una variable que su valor es (string). En esta línea de código, se utiliza la palabra reservada "let" para declarar la variable "string" y se le asigna el valor de "Mi nombre es", el cual está encerrado entre comillas dobles, indicando que es una cadena de texto.

let string1 = String("Oficial K"); // La segunda forma de asignar valores de tipo "string" en JavaScript se llama "constructor". El "constructor" es una propiedad que se utiliza en la programación orientada a objetos (POO) para crear objetos y definir sus propiedades. Es importante mencionar que esta forma es mucho más específica para crear un tipo de dato dentro de una variable u objeto.

let string2 = new String("a su servicio"); // En este caso, la variable string2 se está utilizando para almacenar un objeto de tipo String.

// Nota: La diferencia entre crear una cadena de texto con comillas simples o dobles y crear una cadena utilizando el constructor String() es que, en este último caso, se crea un objeto de tipo String. Esto significa que, a diferencia de una cadena de texto simple, un objeto String tiene ciertas propiedades y métodos que se pueden utilizar para manipular la cadena de texto.

//--------------------

/*
Typeof

En JavaScript, se puede utilizar la función "typeof" para conocer el tipo de dato de una variable, ya sea "string", "boolean", "number", "object", entre otros. Sin embargo, la forma más utilizada en la sintaxis de los "strings" en JavaScript es la primera forma que recientemente vimos. Es importante mencionar que al utilizar comillas dobles o sencillas para definir un "string", se deben utilizar las mismas comillas al inicio y al final de la cadena, sin mezclar ambos tipos de comillas. Es decir, si se utiliza comillas dobles para definir un "string", se deben utilizar comillas dobles tanto al inicio como al final de la cadena, y lo mismo aplica para las comillas simples.
*/

const ejemplo0 = "Hola";
console.log(typeof ejemplo0);
console.log("---");

const ejemplo1 = 12345;
console.log(typeof ejemplo1);
console.log("---");

const ejemplo2 = true;
console.log(ejemplo2);
console.log("---");

const ejemplo3 = false;
console.log(ejemplo3);
console.log("---");

const ejemplo4 = null;
console.log(typeof ejemplo4);
console.log("---");

const ejemplo5 = undefined;
console.log(typeof ejemplo5);
console.log("---");

const ejemplo6 = {};
console.log(typeof ejemplo6);
console.log("---");

const ejemplo7 = {};
console.log(typeof ejemplo7);
console.log("---");

/*
La función "typeof" se puede utilizar en cualquier tipo de variable en JavaScript, ya sea que se haya creado con la palabra clave "new" o no. Por ejemplo, podemos utilizar "typeof" para conocer el tipo de dato de una variable que contiene un número, un booleano o una cadena de texto. Sin embargo, es importante tener en cuenta que cuando utilizamos "new" para crear objetos en JavaScript, la variable que los almacena se convierte en un objeto. En este caso, al utilizar "typeof" para conocer el tipo de dato de esta variable, nos devolverá el valor "object". 

En resumen, "typeof" se puede utilizar en cualquier tipo de variable en JavaScript, incluyendo las creadas con "new", pero debemos tener en cuenta que al utilizar "new" para crear objetos, la variable que los almacena se convierte en un objeto y al utilizar "typeof" en esta variable, nos devolverá "object". También es importante mencionar que podemos imprimir el valor de una variable sin utilizar "typeof", siempre y cuando queramos imprimir su valor y no su tipo de dato.

Si no deseamos imprimir el tipo de dato contenido en una variable, podemos eliminar el uso del operador typeof. Posteriormente, procederemos a imprimir la variable de manera convencional y podremos observar que esta vez se imprimirá el valor o dato contenido en la misma. Esta técnica es aplicable para todo tipo de variables y datos.
*/

const ejemplo8 = "Zelda";
console.log(ejemplo8);
console.log("---");

const ejemplo9 = 789456123;
console.log(ejemplo9);
console.log("---");

//--------------------

//Métodos de string

//Los métodos de string son funciones que pueden ser invocadas en objetos de tipo cadena (strings) en JavaScript.


// 1. Length → Devuelve la longitud de la cadena

const mensaje1 = "Hola Mundo";
console.log(mensaje1.length); //Imprime 10
console.log("---");

//---

// 2. toUpperCase → Convierte la cadena a mayúsculas.
const mensaje2 = "hola mundo";
console.log(mensaje2.toUpperCase()); // Algunos métodos en JavaScript llevan paréntesis porque son considerados funciones dentro del lenguaje.
console.log("---");

//---

// 3. toLowerCase → Convierte la cadena a minúsculas.
const mensaje3 = "HOLA MUNDO";
console.log(mensaje3.toLocaleLowerCase());
console.log("---");


// 4. Indexof → Su objetivo es buscar una subcadena dentro de una cadena determinada y devolver la posición en la que se encuentra dicha subcadena. El método indexOf() nos permite buscar la posición de una subcadena dentro de una cadena de texto determinada. Al utilizar este método, podemos verificar si una palabra o un conjunto de palabras específicas existen en la cadena de texto, así como conocer su posición exacta en caso de existir. Es importante destacar que el método indexOf() es de gran utilidad en la programación, ya que nos permite realizar búsquedas de manera eficiente y precisa dentro de una cadena de texto.

const mensaje4 = "Hola Mundo";
console.log(mensaje4.indexOf("Mundo")); //Imprime 5
console.log("---");

//NOTA: Si intentamos imprimir un substring que no se encuentra dentro del valor de una variable utilizando el método indexOf() en JavaScript, este nos devolverá un valor de -1. Esto se debe a que el valor -1 indica que la subcadena que se está buscando no se encuentra en la cadena de texto especificada. Por lo tanto, debemos tener cuidado al utilizar el método indexOf() para buscar subcadenas dentro de una cadena de texto y asegurarnos de que la subcadena exista en la cadena antes de imprimir o utilizar su posición.

//---

// 5. Includes → El método includes() en JavaScript es una función que se utiliza para determinar si un valor específico se encuentra dentro de un array o una cadena de texto. El método devuelve un valor booleano (true o false) indicando si el valor especificado se encuentra o no dentro del array o la cadena.

let frase = "El perro marrón corre por el parque";
let subcadena = "marrón";

if (frase.includes(subcadena)) {
  console.log("La subcadena '" + subcadena + "' se encuentra en la frase.");
} else {
  console.log("La subcadena '" + subcadena + "' no se encuentra en la frase.");
}
console.log("---");

//En este ejemplo, la variable frase contiene una cadena de texto y la variable subcadena contiene la subcadena que queremos buscar dentro de la cadena de texto. El método includes() se utiliza para comprobar si la subcadena se encuentra dentro de la frase y se imprime un mensaje en la consola indicando si la subcadena se encuentra o no en la frase. En este caso, el método devolverá true ya que la subcadena "marrón" se encuentra en la frase.

//---

// 6. substring → El proceso de extracción de subcadenas consiste en obtener una parte específica de una cadena de texto original. Para ello, se deben indicar la posición inicial y final de la subcadena deseada dentro de la cadena original. El método utilizado para llevar a cabo esta operación en JavaScript es el método substring(), el cual toma dos parámetros: la posición inicial de la subcadena y la posición final de la subcadena (no inclusiva). Una vez especificados estos parámetros, el método substring() extrae la subcadena de la cadena original y la devuelve como resultado.

const mensaje5 = "Hola Mundo";
console.log(mensaje5.substring(5,10));
console.log("---");

//---

// 7. replace → reemplza una subcadena por otra.
const mensaje6 = "Hola Mundo";
console.log(mensaje6.replace("Mundo" , "Universo")); 
console.log("---");

