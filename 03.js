// NUMBER

/*
En programación, es importante tener en cuenta los tipos de datos que se utilizan en una aplicación. En el caso de los valores de una variable cuyo tipo se define como "number", se espera que siempre contengan valores numéricos. En el lenguaje de programación JavaScript, los números siempre se consideran del tipo "number", independientemente de si son enteros o decimales. Es fundamental comprender estas características para garantizar el correcto funcionamiento de los programas y evitar errores en el procesamiento de los datos numéricos.
*/

const numero0 = 300;
const numero1 = 600;

console.log(numero0);
console.log("---");

console.log(numero1);
console.log("---");

//--------------------

//IMPORTANTE: En programación, es esencial comprender las diferencias entre los diferentes tipos de variables para utilizarlas adecuadamente en la aplicación. Una de las principales diferencias entre una variable definida como "string" y otra definida como "number" radica en el tipo de datos que contienen. Las variables de tipo "string" almacenan cadenas de texto o texto en general, mientras que las variables de tipo "number" almacenan valores numéricos como números enteros, decimales, entre otros. Es importante tener claridad sobre estas diferencias para utilizar los tipos de variables correctos en las diferentes situaciones y asegurar la correcta manipulación de los datos en la aplicación.

const numero2 = 900;
console.log(numero2);
console.log("---");

const string1 = "900";
console.log(string1); // //Es importante tener en cuenta que en el lenguaje de programación JavaScript, si se intenta imprimir una variable de tipo "string" que contenga un valor numérico, no saltará ningún error, ya que JavaScript puede interpretarlo como una cadena de texto sin ningún problema. Sin embargo, es importante ser cuidadosos al manipular los datos de esta manera, ya que podría generar confusiones o errores en la aplicación en caso de que se necesite realizar operaciones matemáticas con dichos valores. Por lo tanto, es recomendable utilizar los tipos de variables correspondientes a los datos que se van a manipular para asegurar la correcta interpretación y procesamiento de los mismos.
console.log("---");

//let numero_3 = ggggg;
//console.log(numero_3); // → Es importante tener en cuenta que al asignar valores a las variables en JavaScript, debemos utilizar el tipo de comillas adecuado para cada tipo de variable. Si intentamos asignar un valor de tipo "string" a una variable de la misma manera que lo hacemos con una variable de tipo "number", es probable que JavaScript genere un error. Por lo tanto, es necesario utilizar comillas dobles o simples para definir el valor de una variable de tipo "string", mientras que las variables de tipo "number" no necesitan comillas. Es recomendable siempre utilizar las convenciones y reglas de sintaxis adecuadas al manipular variables y valores en JavaScript para evitar errores y garantizar el correcto funcionamiento de la aplicación. Comenta la variable numero_3.

let numero3 = 55555;
console.log(numero3);
console.log("---");

//--------------------

// En caso de encontrar errores en el código, se pueden comentar las líneas correspondientes para eliminarlos.

//--------------------

//Operaciones aritméticas con variables de tipo "number":

// 1. suma

let precioGato1 = 300;
let precioGato2 = 100;
//Suma el precio de las dos variables (precioGato1) y (precioGato2).

console.log(precioGato1 + precioGato2);

const total1 = precioGato1 + precioGato2;
console.log(`El precio total por los dos gatitos 1 y 2 es de: $ ${total1}`);
console.log("---");

// 2. resta

let precioGato_1 = 600;
let precioGato_2 = 100;
//Resta el precio de las dos variables (precioGato_1) y (precioGato_2).

console.log(precioGato_1 - precioGato_2);

const total2 = precioGato_1 - precioGato_2;
console.log(`El precio total por los dos gatitos 1_ y 2_ es de: $ ${total2}`);
console.log("---");

// 3. multiplicación

let precioGato_3 = 6;
let precioGato_4 = 100;
//Multiplica el precio de las dos variables (precioGato_3) y (precioGato_4)

console.log(precioGato_3 * precioGato_4);

const total3 = precioGato_3 * precioGato_4;
console.log(`El precio total por los dos gatitos 3_ y 4_ es de: $ ${total3}`);
console.log("---");

// 4. división

let precioGato_5 = 1400;
let precioGato_6 = 2;
//Divide el precio de las dos variables (precioGato_5) y (precioGato_6).

console.log(precioGato_5 / precioGato_6);

const total4 = precioGato_5 / precioGato_6;
console.log(`El precio total por los dos gatitos 5_ y 6_ es de: $ ${total4}`);
console.log("---");

// Nota : Existe otro operador matemático de gran importancia en el ámbito de JavaScript, conocido como "módulo" o simplemente "%". Este operador es de gran utilidad en el dominio de la programación, ya que permite obtener el resto de la división entre dos números. Es decir, al utilizar el operador de módulo A%B, se obtiene como resultado el resto de la división de A entre B.

// Ejemplo 1

let precioGato999 = 10;
let precioGato1000 = 5;

console.log(precioGato999 % precioGato1000); // En este caso, la respuesta es 0 ya que 10 dividido entre 5 es una división exacta, por lo tanto no existen residuos.
console.log("---");

// Ejemplo 2

let precioCasa = 120000;
let precioApa = 100000;

console.log(precioCasa / precioApa);
console.log(precioCasa % precioApa);
console.log("---");

/*
La división entre 120k y 100k da como resultado 1.2, el cual es el cociente de la división. Para realizar una división en JavaScript se utiliza el operador "/".

En cambio, el operador "%" (porcentaje o módulo) en JavaScript se utiliza para obtener el residuo de una división entera. En el ejemplo que se plantea, si se utiliza el operador "%", se obtendrá el residuo de la división 120k entre 100k, el cual es 20k.

Es importante recordar que el operador "%" se utiliza para obtener el residuo de una división entera, y no es adecuado para obtener resultados precisos en divisiones decimales. Para divisiones decimales, es necesario utilizar el operador "/" y manejar adecuadamente los decimales resultantes.
*/

//--------------------

/*
Nota: En JavaScript, si intentamos realizar una operación matemática, como sumar, restar, multiplicar o dividir, con variables de tipo "string" (cadena de texto), JavaScript interpretará esto como un error de tipo NaN (Not a Number), ya que no puede realizar operaciones matemáticas con cadenas de texto.

Por lo tanto, es importante asegurarse de que las variables que se utilicen en operaciones matemáticas sean de tipo numérico, como "number", para que JavaScript pueda interpretar correctamente la operación. En caso contrario, se pueden utilizar funciones como "parseInt" o "parseFloat" para convertir la variable de tipo "string" a "number" antes de realizar la operación matemática.
*/

const nombre1 = "Juana";
const nombre2 = "Juan";

console.log(nombre1 % nombre2); // → NaN

// Que pasa si queremos hacerlo con una variable (string) y un variable de tipo (number)?

const saludar = "Hola, puedo ayudarte en algo?";
const numero4 = 100;

console.log(saludar % numero4);
console.log(saludar - numero4);
console.log(saludar / numero4);
console.log(saludar * numero4);
console.log("---");

// La operación aritmética entre una variable que contiene texto y otra que contiene números no es posible, sin importar el operador matemático que se utilice (%), (+) → en ciertos casos, (-), (*), (/), etc. Por lo tanto, se producirá un error de tipo NaN al intentar llevar a cabo dicha operación.

//--------------------

//Concatenación en Strings

/*
En JavaScript, la concatenación se refiere a la unión de dos o más cadenas de texto (strings) en una sola cadena de texto. El operador "+" se utiliza para concatenar cadenas de texto en JavaScript.

Si intentamos concatenar números en JavaScript utilizando el operador "+", en lugar de sumarlos, se concatenarán como si fueran cadenas de texto. Es decir, el resultado será una cadena de texto que contiene los números concatenados en el orden en que aparecen en el código.

En JavaScript, la única manera de imprimir correctamente una variable de tipo (number) y una variable de tipo (string), o viceversa, es mediante la concatenación a través del operador de concatenación (+). 
*/

// Ejemplo 1

let a = 10;
let b = "5";

console.log(a + b);

const res = a + b;
console.log(res);
console.log("---");

/*
El resultado de la operación a + b es una cadena de texto que contiene la concatenación de la representación de la variable a (10) y la representación de la variable b ("5"). Esto se debe a que JavaScript intenta convertir ambos operandos al mismo tipo de dato antes de realizar la operación. En este caso, la variable a es un número y la variable b es una cadena de texto, por lo que JavaScript intenta convertir la variable a en una cadena de texto antes de concatenarla con la variable b.

Nota: El operador "+" en JavaScript tiene diferentes comportamientos según los tipos de datos que se le pasen como operandos. Si ambos operandos son números, el operador "+" realiza una suma aritmética. Si uno de los operandos es una cadena de texto, JavaScript trata de convertir el otro operando en una cadena de texto y luego realiza una concatenación de cadenas.
*/

// Ejemplo 2

const planeta = "Marte";
const persona = "Mark";

const res_ = planeta + " " + persona; // ← Concatenamos las variables planeta y persona con un espacio en blanco en el medio

console.log(res_);
console.log("---");

// Ejemplo 3

let numero5 = 42;

console.log("Tu número de asiento es:" + numero5);
console.log("---");

// Nota: Es importante tener en cuenta que al concatenar un string con una variable de otro tipo, JavaScript convierte automáticamente dicha variable a una cadena de caracteres. Sin embargo, esto no ocurrirá cuando operemos variables de cadena con variables numéricas utilizando diferentes operadores matemáticos.

// Ejemplo 1
let numero6 = 99;
let numero7 = 1;

console.log(numero6 + numero7);
console.log("---");

// Ejemplo 2

let a_ = "100";
let b_ = 1;

console.log(a_ - b_);
console.log("---");

/*
Explicación del código: Al intentar restar una cadena de texto y un número, JavaScript convierte automáticamente la cadena de texto en un número. En este caso, la cadena de texto "100" se convierte en el número 100.

Por lo tanto, la operación de resta se realiza entre el número 100 y el número 1, resultando en 99.
*/

// Nota: JavaScript intentará convertir automáticamente los tipos de datos en una operación aritmética en todos los operadores aritméticos binarios, incluyendo la resta ("-"), la multiplicación ("*"), la división ("/") y el operador de módulo ("%").

let numero8 = "30";
let numero9 = "25";

const res1 = numero8 * numero9;
console.log(res1);
console.log("---");

let numero10 = 18;
let numero11 = 2;

const res2 = numero10 / numero11;
console.log(res2);
console.log("---");

let numero12 = "89";
let numero13 = "6";

const res3 = numero12 % numero13;
console.log(res3);
console.log("---");

// Template Strings

/*
en ECMAScript 6 (también conocido como ES6 o ES2015) se introdujo una nueva forma de crear cadenas de texto llamada "template strings", que proporciona una manera más fácil y legible de concatenar cadenas de texto con otras variables o expresiones.

Las template strings se crean utilizando comillas invertidas (`) en lugar de comillas simples o dobles. Dentro de las template strings, se pueden utilizar placeholders (marcadores de posición) utilizando la sintaxis ${}, que permiten incluir variables o expresiones dentro de la cadena de texto.
*/

// Ejemplo

let nombre = "Mrox";
let edad = 18;
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje);
console.log("---");

// Las template strings son una forma más fácil y legible de concatenar cadenas de texto con otras variables o expresiones en JavaScript, y se introdujeron como una característica importante en ECMAScript 6.

const Producto1 = {
  producto: "Laptop",
  marca: "HP",
  modelo: "PAVILION",
  precio: 600,
  RAM: 12,
  almacenamiento: 500,
  mostrarProducto: function () {
    console.log(
      `El producto que has seleccionado es: ${this.producto} marca ${this.marca} modelo ${this.modelo}, por un precio de: $${this.precio}, memoria RAM: ${this.RAM} Gigabytes, almacenamiento: ${this.almacenamiento} Gigabytes`
    );
  },
};

Producto1.mostrarProducto();
console.log("---");

// Más adelante aprenderemos más sobre programación orientada a objetos en JavaScript.

//--------------------

//Otros tipos de datos en JavaScript

/*
JavaScript es un lenguaje de programación que se caracteriza por su tipado dinámico, lo que implica que no es preciso especificar el tipo de dato al momento de declarar una variable. Esta particularidad distingue a JavaScript de otros lenguajes de programación, en los cuales se requiere identificar el tipo de dato de las variables. En lugar de ello, JavaScript determina automáticamente el tipo de dato contenido en una variable durante la ejecución del programa. Este proceso de determinación de tipos se lleva a cabo en tiempo de ejecución.

Principales tipos de datos en JavaScript:

→ number = pueden ser enteros o decimales.

→ string = se escriben entre comillas simples o dobles.

→ boolean = true o false

→ object = conjuntos de pares clave-valor que representan una entidad.

→ array = listas ordenadas de valores.

→ function = bloques de código que se pueden ejecutar más tarde.

//Valores especiales : null y undefined.
*/

let ejemplo6 = {}; // ← objeto
console.log(ejemplo6);
console.log(typeof ejemplo6);


let ejemplo7 = []; // ← array
console.log(ejemplo7);
console.log(typeof ejemplo7); //En JavaScript los Arrays tambien son objetos.


let ejemplo8 = function(){}; // ← function
console.log(ejemplo8); //Imprime una funcion la cual no ejecuta nada
console.log(typeof ejemplo8); //Imprime el tipo de dato, en este caso es una funcion


let ejemplo9 = null; // ← null
console.log(ejemplo9);
console.log(typeof ejemplo9); //Imprime que es un objeto, esto debido a que null es considerado un objeto

let ejemplo10 =undefined; // ← undefined
console.log(ejemplo10); //Imprime undefined
console.log(typeof ejemplo10); //Imprime undefined
console.log("---");

