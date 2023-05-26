//Condicionales

/*
A menudo cuando se escribe código se deben realizar diferentes acciones para diferentes condiciones. Las «instrucciones condicionales» se usan para realizar las diferentes acciones según una condición. 

Tipos de condicionales en JavaScript

→ if : se usa para ejecutar un bloque código si la condición es verdadera.

→ if / else : se usa para ejecutar un bloque de código si la condición es verdadera u otro bloque de código si la condición es falsa.

→ if / else if / else : se usa para seleccionar uno de los muchos bloques de código a ejecutar.

→ switch : se utiliza para ejecutar diferentes bloques de código en función del valor de una expresión. Se puede usar como una alternativa más legible a varias declaraciones if-else anidadas.
*/

// Nota: La estructura de las condicionales (if) es uniforme en todos los lenguajes de programación. Al emplear condicionales (if), se plantea una pregunta: ¿Qué sucede si se cumple cierta condición? ¿Y si dicha condición no se cumple? En consecuencia, se establecen distintos cursos de acción en función del cumplimiento o no de la condición.

/*
IF → Estructura de condicional simple
La estructura de control "if" permite evaluar una expresión booleana y ejecutar un bloque de código si se cumple la condición especificada.

Estructura:
if (condición) {
// bloque de código a ejecutar si la condición es verdadera
}

IF ELSE → Estructura de condicional compuesta
La estructura de control "if-else" permite evaluar una expresión booleana y ejecutar un bloque de código si se cumple la condición especificada, y otro bloque de código si no se cumple.

Estructura:
if (condición) {
// bloque de código a ejecutar si la condición es verdadera
} else {
// bloque de código a ejecutar si la condición es falsa
}
*/

console.log("---IF---");

let ejemplo0 = 5 === "5"; // Comprueba si el número 5 es estrictamente igual a la cadena "5"
console.log(ejemplo0); // Muestra el resultado de la comparación en la consola

// Evalúa si la variable ejemplo0 es verdadera y muestra un mensaje en la consola si es así
if (ejemplo0) {
  console.log("Verdadero");
}

let ejemplo1 = 5 === 5;
console.log(ejemplo1);

if (ejemplo1) {
  console.log("Verdadero");
}

// ---

console.log("---IF / ELSE---");

let ejemplo2 = 10 === "10";
console.log(ejemplo2);

if (ejemplo2) {
  console.log("Verdadero");
} else {
  console.log("Falso");
}

let ejemplo3 = 100 === 100;
console.log(ejemplo3);

if (ejemplo3) {
  console.log("Verdadero");
} else {
  console.log("Falso");
}

let numerosIguales = 10 !== "10"; // Compara el valor numérico 10 con la cadena "10" utilizando el operador de desigualdad estricta.

console.log(numerosIguales); // true

// Estructura de control condicional que evalúa la expresión booleana "numerosIguales".

if (numerosIguales) {
  // Si la expresión booleana es verdadera, ejecuta este bloque de código.
  console.log("Los números no son iguales.");
} else {
  // Si la expresión booleana es falsa, ejecuta este bloque de código.
  console.log("Los números son iguales.");
}

console.log("---");

/*
Nota: El orden en que escribimos las sentencias en un programa depende del contexto y de la estructura del mismo. Sin embargo, es recomendable que las variables se declaren y se inicialicen antes de que se utilicen en una sentencia if o if-else, para evitar errores de referencia a variables que aún no han sido declaradas o inicializadas.

Es decir, si una variable se utiliza en una sentencia if o if-else, pero aún no ha sido declarada o inicializada, el programa no podrá encontrar la variable y se producirá un error. Por lo tanto, es importante que las variables se declaren y se inicialicen antes de ser utilizadas en una sentencia condicional.

En cuanto al orden de las sentencias, es común que las sentencias if o if-else se coloquen después de la declaración de las variables que se van a validar, pero esto no es una regla fija. El orden de las sentencias puede variar dependiendo del contexto y de la estructura del programa.

En resumen, lo importante es que las variables se declaren y se inicialicen antes de ser utilizadas en una sentencia if o if-else, ya que esto evita errores de referencia a variables que aún no han sido declaradas o inicializadas. El orden de las sentencias puede variar dependiendo del contexto y de la estructura del programa, por lo que no hay una regla fija sobre el orden en que se deben colocar las sentencias if o if-else.
*/

// Nota: El siguiente código de JavaScript utiliza números en lugar de variables para crear estructuras "if-else". En este caso, los números mayores a 0 se considerarán como "verdaderos" (true), mientras que los números iguales o menores que 0 se considerarán como "falsos" (false).

console.log("--- < = 0 VS > = 1 ---");

// En este primer ejemplo, la condición es 0, que se considera falso
if (0) {
  console.log("true");
} else {
  console.log("false");
}

// En este segundo ejemplo, la condición es 5, que se considera verdadero
if (5) {
  console.log("Este ejemplo es verdadero");
} else {
  console.log("Este ejemplo es falso");
}

// En este tercer ejemplo, la condición es 10, que se considera verdadero
if (10) {
  console.log("Este ejemplo es true");
} else {
  console.log("Este ejemplo es false");
}

console.log("---");

/*
Explicación del código:

→ En el primer ejemplo, la condición es 0, lo que se considera falso, por lo que se ejecuta el bloque de código en el else y se imprime "false" en la consola.
    
→ En el segundo ejemplo, la condición es 5, lo que se considera verdadero, por lo que se ejecuta el bloque de código en el if y se imprime "Este ejemplo es verdadero" en la consola.
    
→ En el tercer ejemplo, la condición es 10, lo que también se considera verdadero, por lo que se ejecuta el bloque de código en el if y se imprime "Este ejemplo es true" en la consola.
*/

//---

// IF ELSE-IF ELSE

/*
La estructura de control "if-else if-else" permite evaluar múltiples expresiones booleanas y ejecutar diferentes bloques de código según se cumplan o no las condiciones especificadas.

La estructura general de este condicional es la siguiente:

if (condición1) {
  // bloque de código a ejecutar si la condición1 es verdadera
} else if (condición2) {
  // bloque de código a ejecutar si la condición1 es falsa y la condición2 es verdadera
} else if (condición3) {
  // bloque de código a ejecutar si la condición1 y la condición2 son falsas y la condición3 es verdadera
} else {
  // bloque de código a ejecutar si todas las condiciones anteriores son falsas
}
*/

// Nota: Es importante tener en cuenta que esta estructura se lee de arriba hacia abajo y se ejecuta la primera condición verdadera que se encuentre. Por lo tanto, es importante ordenar las condiciones de manera que la más específica y/o importante se evalúe primero.

let ejemplo4 = 5;
let ejemplo5 = 5;

if (ejemplo4 > ejemplo5) {
  console.log("ejemplo4 es mayor");
} else if (ejemplo4 < ejemplo5) {
  console.log("ejemplo5 es mayor");
} else {
  console.log("Son iguales");
}

let edadUsuario = 18;
let edadMinima = 18;

if (edadUsuario === edadMinima) {
  console.log("La edad del usuario es igual a la edad mínima requerida");
} else if (edadUsuario > edadMinima) {
  console.log("La edad del usuario es mayor que la edad mínima requerida");
} else {
  console.log("La edad del usuario es menor que la edad mínima requerida");
}

console.log("---");

//--------------------

console.log("---orden lexicográfico---");

// Orden Lexicográfico

/*
En JavaScript, el orden lexicográfico se basa en la comparación de los valores Unicode de cada carácter en las cadenas de texto. Para comparar dos cadenas de texto, JavaScript compara los valores Unicode de los caracteres en las mismas posiciones de ambas cadenas. Si los valores Unicode son iguales, se comparan los siguientes caracteres y así sucesivamente hasta que se encuentre una diferencia o hasta que se llegue al final de ambas cadenas.

Si el valor Unicode del carácter en la posición actual de la primera cadena es menor que el valor Unicode del carácter en la misma posición de la segunda cadena, entonces la primera cadena se considera menor que la segunda. Si el valor Unicode del carácter en la posición actual de la primera cadena es mayor que el valor Unicode del carácter en la misma posición de la segunda cadena, entonces la primera cadena se considera mayor que la segunda. Si los valores Unicode de los caracteres en ambas cadenas son iguales, se comparan los caracteres en las siguientes posiciones de ambas cadenas hasta que se encuentre una diferencia o hasta que se llegue al final de ambas cadenas.
*/

let string1 = "Alemania";
let string2 = "Rusia";

if (string1 > string2) {
  console.log(`"${string1}" es mayor que "${string2}"`);
} else if (string1 < string2) {
  console.log(`"${string1}" es menor que "${string2}"`);
} else {
  console.log(`"${string1}" y "${string2}" son iguales`);
}

console.log("---");

/*
Explicación del código:    

Este código compara dos variables de tipo string string1 y string2 utilizando la comparación lexicográfica.

La comparación se realiza mediante la estructura condicional if-else, que evalúa si string1 es mayor, menor o igual a string2. En la primera condición, se utiliza el operador > para verificar si string1 es mayor que string2. Si esto es cierto, se imprime por consola un mensaje indicando que string1 es mayor que string2 utilizando template strings.

En la segunda condición, se utiliza el operador < para verificar si string1 es menor que string2. Si esto es cierto, se imprime por consola un mensaje indicando que string1 es menor que string2 utilizando template strings.

Finalmente, si string1 y string2 son iguales, se ejecuta la última condición, donde se imprime por consola un mensaje indicando que string1 y string2 son iguales utilizando también template strings.
*/

//--------------------

// Condicional Ternario

/*
El condicional ternario en JavaScript es una alternativa compacta al condicional "if-else". En lugar de usar una estructura "if-else", el condicional ternario utiliza una única línea de código para evaluar una expresión y devolver un valor en función de si la expresión es verdadera o falsa.

La sintaxis del condicional ternario es la siguiente:

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
condicion ? valor si verdadero : valor si falso;
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

La "condicion" es la expresión que se evalúa para determinar si es verdadera o falsa. Si la condición es verdadera, se devuelve el valor especificado después del signo de interrogación "?". Si la condición es falsa, se devuelve el valor especificado después de los dos puntos ":".

Por ejemplo, el siguiente código utiliza un condicional ternario para verificar si un número es positivo o negativo:
*/

console.log("---Condicional Ternario---");

const numero = -3;
const resultado =
  numero > 0 ? "Es un número positivo" : "Es un número negativo o cero";
console.log(resultado); // En este caso, la condición es numero > 0, que devuelve false porque -3 es menor que 0. Por lo tanto, se devuelve el valor después de los dos puntos, que es "Es un número negativo o cero".

const mumero1 = 18;
const resultado1 = mumero1 >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(resultado1);

const a = 5;
const b = 10;

const result =
  a >= b ? `${a} es mayor o igual que ${b}` : `${a} es menor que ${b}`;
console.log(result);

18 === 18 && "MrOX" === "MrOX"
  ? console.log("Verdadero")
  : console.log("Falso");

(25 === 25 && 100 === 100) || (true === true && 20 === 30)
  ? console.log("Verdadero")
  : console.log("Falso");

let z = 150;
let y = 90;

const res = z >= y ? "z es mayor" : "z es menor";
console.log(res);

// ---

// Ejemplo → Supongamos que en una tienda en línea, un cliente realiza una compra y el sistema calcula el costo total de la orden, incluyendo los impuestos y los gastos de envío. Dependiendo del país de origen del cliente, los impuestos pueden variar. Entonces, si el cliente es de un país donde los impuestos son bajos, el sistema mostrará un mensaje indicando que los impuestos son bajos, de lo contrario, mostrará un mensaje indicando que los impuestos son altos.

const paisCliente = "El Salvador";
const impuestos =
  paisCliente === "El Salvador" || paisCliente === "Argentina"
    ? "bajos"
    : "altos";

console.log(`Los impuestos para este país son ${impuestos}.`);

//---

const tienda = {
  nombre: "Tienda de electrónica en línea",
  envio: "Gratis",
  productos: {
    Laptop: { precio: 600, cantidad: 1 },
    Teclado: { precio: 100, cantidad: 1 },
    Monitor: { precio: 400, cantidad: 1 },
    Ventilador: { precio: 50, cantidad: 1 },
  },
};

const seleccionarProducto = (producto, cantidad) => {
  if (tienda.productos[producto].cantidad < cantidad) {
    console.log(`Lo siento, no hay suficiente ${producto} en stock.`);
  } else {
    tienda.productos[producto].cantidad -= cantidad;
    console.log(
      `El cliente ha seleccionado ${cantidad} ${producto}(s) con un precio total de $${
        cantidad * tienda.productos[producto].precio
      }.`
    );
  }
};

seleccionarProducto("Laptop", 2);
seleccionarProducto("Teclado", 1);
seleccionarProducto("Monitor", 1);
seleccionarProducto("Ventilador", 5);

console.log("---");

//--------------------

// Condicional Switch

/*
El condicional switch es una estructura de control de flujo en JavaScript que permite tomar decisiones basadas en diferentes casos o valores predefinidos de una variable. A diferencia del condicional if, que se evalúa una condición booleana, el switch evalúa diferentes casos y ejecuta el bloque de código correspondiente al caso que coincide con el valor de la variable.

La sintaxis básica de un switch es la siguiente:


switch (variable) {
  case valor1:
    // código a ejecutar si variable es igual a valor1
    break;
  case valor2:
    // código a ejecutar si variable es igual a valor2
    break;
  //...
  default:
    // código a ejecutar si variable no coincide con ningún caso anterior
    break;
}

En resumen, el switch es una herramienta útil para tomar decisiones en función de una variable que puede tener múltiples valores posibles predefinidos.
*/

console.log("---Switch--");

let dia = 3;

switch (dia) {
  case 1:
    console.log("Hoy es lunes");
    break;
  case 2:
    console.log("Hoy es martes");
    break;
  case 3:
    console.log("Hoy es miércoles");
    break;
  case 4:
    console.log("Hoy es jueves");
    break;
  case 5:
    console.log("Hoy es viernes");
    break;
  case 6:
    console.log("Hoy es sábado");
    break;
  case 7:
    console.log("Hoy es domingo");
    break;
  default:
    console.log("Día inválido");
    break;
}

// Explicación del código: En este ejemplo, el switch evalúa la variable dia y ejecuta el bloque de código correspondiente al caso que coincide con el valor de la variable.

let fruta = "manzana";

switch (fruta) {
  case "manzana":
    console.log("La manzana es una fruta deliciosa");
    break;
  case "naranja":
    console.log("Las naranjas tienen mucho vitamina C");
    break;
  case "banana":
    console.log("Las bananas son una buena fuente de potasio");
    break;
  default:
    console.log("No tengo información sobre esa fruta");
    break;
}

// Explicación del código: En este ejemplo, el switch evalúa la variable fruta y ejecuta el bloque de código correspondiente al caso que coincide con el valor de la variable.

let esLunes = true;

switch (esLunes) {
  case true:
    console.log("Hoy es lunes");
    break;
  case false:
    console.log("Hoy no es lunes");
    break;
}

// Explicación del código: En este ejemplo, el switch evalúa la variable esLunes que es un booleano y ejecuta el bloque de código correspondiente al caso que coincide con el valor de la variable.

let mes = 3;

switch (mes) {
  case 1:
  case 2:
  case 12:
    console.log("Es invierno");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Es primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Es verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Es otoño");
    break;
  default:
    console.log("Mes inválido");
    break;
}

// Explicación del código: En este ejemplo, el switch evalúa la variable mes y ejecuta el bloque de código correspondiente al caso que coincide con el valor de la variable. Los casos de invierno tienen un comportamiento similar, al igual que los de primavera, verano y otoño.

let persona_ = { nombre: "MrOX", edad: 18 };

switch (persona_.nombre) {
  case "MrOX":
    console.log("Hola MrOX");
    break;
  case "María":
    console.log("Hola María");
    break;
  default:
    console.log("No tengo información sobre esa persona");
    break;
}

// Explicación del código: El switch evaluará la propiedad nombre del objeto persona_ y ejecutará el bloque de código correspondiente al caso que coincida con el valor de esa propiedad. En este caso, el código imprimirá "Hola MrOX" en la consola. Si hubiera otro valor diferente en la propiedad nombre, el switch ejecutaría el bloque de código correspondiente al caso default y escribiría "No tengo información sobre esa persona".

// Nota: La palabra reservada break en una estructura de control de flujo switch en JavaScript se utiliza para detener la ejecución del bloque de código en el caso actual y salir del switch. Es decir, si se encuentra un caso que coincide con el valor evaluado, el switch ejecuta el bloque de código correspondiente a ese caso y luego sale del switch, a menos que encuentre un break que lo detenga. Si no se utiliza break, el switch continuará ejecutando el código en los casos siguientes, incluso si no coinciden con el valor evaluado. Si no usamos la instrucción "break" en el switch, se ejecutarán todos los casos a partir del caso que se ha designado, lo que puede generar resultados inesperados en el algoritmo.

// Nota: En una estructura de control de flujo switch en JavaScript, la palabra reservada default se utiliza como un caso predeterminado en caso de que ninguno de los casos definidos coincida con el valor evaluado. Si se llega al caso default, el bloque de código correspondiente se ejecutará. Es decir, el default es una especie de "plan de respaldo" que se ejecutará si no se encuentra ninguna otra coincidencia en los casos previamente definidos.

let nota = 10;

if (nota <= 6.9) {
  console.log("Reprobado");
} else if (
  nota === 7.0 &&
  7.1 &&
  7.2 & 7.3 & 7.4 & 7.5 &&
  7.6 &&
  7.7 &&
  7.8 &&
  7.9
) {
  console.log("Aprobado");
} else if (
  nota === 8.0 &&
  8.1 &&
  8.2 &&
  8.3 &&
  8.4 &&
  8.5 &&
  8.6 &&
  8.7 &&
  8.8 &&
  8.9
) {
  console.log("Bien");
} else if (
  nota === 9.0 &&
  9.1 &&
  9.2 &&
  9.3 &&
  9.4 &&
  9.5 &&
  9.6 &&
  9.7 &&
  9.8 &&
  9.9
) {
  console.log("Muy Bien");
} else if (nota === 10) {
  console.log("Excelente");
}

// -

let nota_ = 10;

if (nota_ < 7) {
  console.log("Reprobado");
} else if (nota_ >= 7 && nota < 8) {
  console.log("Aprobado");
} else if (nota_ >= 8 && nota < 9) {
  console.log("Bien");
} else if (nota_ >= 9 && nota < 10) {
  console.log("Muy Bien");
} else if (nota_ === 10) {
  console.log("Excelente");
}

// Nota: Si bien el uso de switch puede ser más legible y eficiente que usar muchos if-else if, no siempre es la mejor opción. La sentencia switch es más adecuada para casos en los que una variable tiene un número limitado de valores posibles y se quiere ejecutar un bloque de código diferente para cada valor. Por lo tanto, si se tiene una serie de condiciones que se deben cumplir, cada una con una respuesta diferente, switch es una buena opción. Sin embargo, si se tienen condiciones más complejas que involucran múltiples variables y operaciones, if-else if puede ser más apropiado. En resumen, la elección entre switch y if-else if dependerá de la complejidad del problema y la claridad del código resultante.
