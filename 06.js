// Booleans

// En JavaScript, los valores booleanos representan un tipo de datos que solo puede ser "true" o "false", lo que significa que solo hay dos posibles valores. Esto se debe a que los valores booleanos están diseñados para representar la verdad o la falsedad de una condición o expresión, lo que se puede ver como una representación binaria. En el código, los valores booleanos se utilizan a menudo en declaraciones condicionales, bucles y otras estructuras de control de flujo para tomar decisiones basadas en el resultado de una evaluación de verdad o falsedad.

let boolean0 = true; // variable que contiene valor boolean.
let boolean1 = false; // variable que contiene valor boolean.
let string0 = "true"; // variable que contiene valor string.

console.log(boolean0);
console.log(boolean1);
console.log(string0);

console.log(typeof boolean0);
console.log(typeof boolean1);
console.log(typeof string0);

// Los valores booleanos se utilizan con frecuencia en las estructuras de control de flujo, como los condicionales if y while, para tomar decisiones basadas en ciertas condiciones. Por ejemplo, si tenemos una variable edad que representa la edad de una persona, podríamos usar un condicional para determinar si esa persona es mayor de edad o no:

let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

console.log("---");

// Explicación del código: En este ejemplo, la expresión edad >= 18 es una expresión booleana que evalúa a true si la variable edad es mayor o igual a 18, y a false en caso contrario. Dependiendo del valor de esta expresión, se ejecuta uno u otro bloque de código.

//--------------------

// Valores "truthy" y "falsy"

/*
Los valores falsos son valores que no son exactamente falsos, pero que se convertirán en falsos cuando intente convertirlos a booleanos.

en JavaScript, hay 6 valores que se consideran "falsy", es decir, que se evalúan como "falso" en contextos booleanos. Estos son:

→ false

→ 0 (cero)

→ "" (cadena de texto vacía)

→ null

→ undefined

→ NaN (Not a Number)

Cualquier otro valor que no sea uno de estos 6 se considera "truthy" y se evalúa como "verdadero" en contextos booleanos.
*/

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log("---");

console.log(Boolean(true));
console.log(Boolean(10));
console.log(Boolean("Hola"));
console.log(Boolean(null)); // ← valores especiales que indican la ausencia de un valor, null se utiliza para indicar que una variable no tiene un valor definido intencionalmente
console.log(Boolean(undefined)); // ← valores especiales que indican la ausencia de un valor, undefined se utiliza para indicar que una variable no tiene un valor definido en absoluto.
console.log(Boolean(1));
console.log("---");

/*
La función Boolean() en JavaScript se utiliza para convertir un valor a su equivalente booleano. Si el valor es "truthy" (es decir, un valor que se evalúa como verdadero en una condición booleana), la función devolverá true. Si el valor es "falsy" (es decir, un valor que se evalúa como falso en una condición booleana), la función devolverá false.

Se puede utilizar la función Boolean() de dos maneras: como constructor o como función regular. Como constructor, se puede crear un objeto booleano utilizando la sintaxis new Boolean(valor). Como función regular, se puede pasar cualquier valor como argumento y la función devolverá true o false según corresponda.

Por ejemplo, si se pasa el número 5 a la función Boolean(), esta devolverá true, ya que 5 es un valor "truthy". Por otro lado, si se pasa el valor null a la función Boolean(), esta devolverá false, ya que null es un valor "falsy".
*/

// Nota: Normalmente nunca utilizaremos esta función en la práctica. La conversión booleana en JavaScript es implícita, no explícita. Probablemente la usaremos en 2 escenarios, usando operadores lógicos y contextos lógicos.

const dinero = 0;

if (dinero) {
  console.log("Ahorrar es bueno");
} else {
  console.log("No malgastes tu dinero");
}

console.log("---");

// Explicación del código: Se declara una variable 'dinero' con un valor de cero. Luego, se utiliza una estructura condicional if-else para imprimir un mensaje en la consola dependiendo del valor de dinero. En este caso, como dinero tiene un valor de cero, en el contexto lógico de una condición de declaración if-else, JavaScript intentará coaccionar cualquier valor en un booleano. No importa lo que pongamos aquí, si no es un booleano, JavaScript intentará convertirlo en un booleano. En JavaScript, los valores que son considerados falsos en un contexto lógico son 0, null, undefined, NaN, false, y una cadena vacía. Como dinero tiene un valor de 0, que es considerado falso, la condición en la sentencia if evalúa a false, lo que hace que el código dentro del bloque else se ejecute y se imprima en la consola el mensaje "No malgastes tu dinero".

const dinero_ = 100;

if (dinero_) {
  console.log("Ahorrar es bueno");
} else {
  console.log("No malgastes tu dinero");
}

console.log("---");

//--------------------

// ¿Cómo comprobar si una variable está realmente definida o no?

// Declaramos la variable altura sin asignarle ningún valor.
let altura;

// Evaluamos si la variable altura contiene algún valor.
if (altura) {
  console.log("La variable altura contiene un valor.");
} else {
  console.log("La variable altura no contiene ningún valor.");
}

console.log("---");

let altura_ = 1.8;

if (altura_) {
  console.log("La variable altura_ contiene un valor.");
} else {
  console.log("La variable altura no contiene ningún valor.");
}

console.log("---");

//--------------------

// Conversión de datos

/*La conversión de tipos se produce cuando convertimos manualmente un tipo de datos en otro.
 */

const formularioAño = "1991";
console.log(formularioAño);
console.log(formularioAño + 18); // ← Tenemos que arreglar esto

// Nota: Básicamente podemos convertir una cadena en un número utilizando la función: Number()

const formularioAño_ = "1991";
console.log(Number(formularioAño_));
console.log(Number(formularioAño_) + 18); // ← Hemos resuelto el problema
console.log("---");

// Nota: La función Number() en JavaScript intenta convertir una cadena en un número. Si la cadena contiene un valor numérico, entonces la función devolverá ese valor numérico. Sin embargo, si la cadena no contiene un valor numérico, entonces la función devolverá un valor NaN (Not a Number).

const num = Number("123");
console.log(num);

const num_ = Number("MrOX"); // Devuelve NaN
console.log(num_);
console.log(typeof NaN);
console.log("---");

// ---

// También podemos convertir números en cadenas de texto utilizando la función String().

let edad_ = 18;
console.log(edad_);
console.log(typeof edad_); // ← number
console.log(String(18));
console.log(typeof String(18)); // ← string
console.log("---");

//--------------------

// JavaScript puede convertir varios tipos de datos. 

// → De number a string: usando el método toString() o concatenando el número con una cadena vacía ("").

let num1 = 42;
let str1 = num1.toString();
console.log(typeof str1, str1); 
console.log("---");

let num2 = 422;
let str2 = "" + num2;
console.log(typeof str2, str2); 
console.log("---");

//-

// → De string a number: usando la función parseInt() o parseFloat() para convertir una cadena en un número entero o decimal respectivamente. También se puede utilizar el operador + antes de la cadena para convertirla en número, pero si la cadena contiene caracteres no numéricos, el resultado será NaN.

let numeroComoString = "10";
console.log(numeroComoString);
console.log(typeof numeroComoString);


let numeroComoEntero = parseInt(numeroComoString);
console.log(numeroComoEntero);
console.log(typeof numeroComoEntero); 
console.log("-");

let numeroComoString_ = "3.14";
console.log(numeroComoString_);
console.log(typeof numeroComoString_);

let numeroComoDecimal = parseFloat(numeroComoString_);
console.log(numeroComoDecimal);
console.log(typeof numeroComoDecimal);
console.log("-");

let numeroComoString1 = "10";
console.log(numeroComoString1);
console.log(typeof numeroComoString1);

let numeroComoEntero1 = +numeroComoString1;
console.log(numeroComoEntero1); 
console.log(typeof numeroComoEntero1);

let cadenaNoNumerica = "hola";
console.log(cadenaNoNumerica);
console.log(typeof cadenaNoNumerica);

let resultado = +cadenaNoNumerica;
console.log(resultado); // devuelve NaN
console.log(typeof resultado); // devuelve "NaN"
console.log("---");

// -

// → De number a boolean: utilizando una doble negación !!, donde cualquier número diferente de cero se convierte en true y el cero se convierte en false.

let num1_ = 10;
console.log(num1_);
console.log(typeof num1_);

let bool1 = !!num1_;
console.log(bool1); // true

// Explicación del código: En este ejemplo, la variable num1 contiene el número 10. Al aplicar la doble negación !! sobre num1, se convierte en el valor booleano true, ya que cualquier número diferente de cero se convierte en true.

let num2_ = 0;
console.log(num2_);
console.log(typeof num2_);

let bool2 = !!num2_;
console.log(bool2); // false








