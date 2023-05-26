// Orden en que se ejecutan las operaciones aritméticas en JavaScript.

const res = 12 + 40 * 3;
console.log(res); // En JavaScript (y en la mayoría de los lenguajes de programación), las operaciones matemáticas se evalúan según una regla de precedencia de operadores, en la que las operaciones con mayor prioridad se realizan primero. En este caso, la multiplicación tiene una mayor prioridad que la suma, por lo que se realizará primero la operación 40 * 3 y luego se sumará el resultado con el valor de 12. Por lo tanto, el resultado de la expresión será 132.
console.log("---");

//--------------------

/*
Para forzar a JavaScript a evaluar primero una operación en particular antes que otras, puedes usar paréntesis para agrupar las operaciones que deseas que se realicen juntas. Los paréntesis le indican al intérprete que debe evaluar primero las operaciones dentro de los paréntesis antes de continuar con las operaciones restantes. Por ejemplo:
*/

let resultadoCompra = (12 + 40) * 3; // primero se realizará la suma dentro de los paréntesis y luego la multiplicación
console.log(resultadoCompra);
console.log("---");

let resultadoResta = 10 - (4 + 2); // primero se realizará la suma dentro de los paréntesis y luego la resta
console.log(resultadoResta);
console.log("---");

let resultadoDivision = 20 / (5 * 2); // primero se realizará la multiplicación dentro de los paréntesis y luego la división
console.log(resultadoDivision);
console.log("---");

let resultadoModulo = 15 % (7 + 1); // primero se realizará la suma dentro de los paréntesis y luego el módulo
console.log(resultadoModulo);
console.log("---");

// En cada uno de estos ejemplos, los paréntesis indican que la operación dentro de ellos debe evaluarse primero antes de continuar con el resto de la expresión. De esta manera, se puede controlar el orden en que se evalúan las operaciones matemáticas.

//--------------------

// Ejemplo 1 => Una persona compró 6 artículos, cada uno con un precio diferente. Para obtener la suma total de los artículos, se debe sumar el precio de cada uno de ellos. Además, se menciona que se aplicará un descuento del 20% sobre el total de la compra.

let artículo1 = 100;
let artículo2 = 200;
let artículo3 = 300;
let artículo4 = 400;
let artículo5 = 500;
let artículo6 = 600;

const res1 =
  artículo1 + artículo2 + artículo3 + artículo4 + artículo5 + artículo6;

console.log(`El precio total de las artículos es de: $${res1}`);

const descuento1 = res1 * 0.2;
console.log(`Cantidad de descuento: $${descuento1}`);

const res2 = res1 - descuento1;
console.log(`Descuento total: $${res2}`);
console.log("---");

// Ejemplo 2 => Un cliente ha realizado la compra de tres productos, sin especificar de qué tipo son, a los cuales se les ha agregado el impuesto sobre el valor añadido (IVA) correspondiente.

let artículo1_ = 1000;
let artículo2_ = 2000;
let artículo3_ = 3000;

const res_ = artículo1_ + artículo2_ + artículo3_;
console.log(`El precio total de las artículos es de: $${res_}`);

const iva = res_ * 0.13;
console.log(`El IVA correspondiente es de: $${iva}`);

const res2_ = res_ + iva;
console.log(`El precio total de la compra con IVA incluido es de: $${res2_}`);
console.log("---");

//--------------------

//Incrimentos

/*
Los incrementos en JavaScript son operadores aritméticos que se utilizan para aumentar el valor de una variable numérica en una unidad. El operador de incremento más común en JavaScript es el operador "++". Este operador incrementa el valor de una variable en 1.

Por ejemplo, si tenemos una variable "x" con un valor inicial de 5 y queremos incrementar su valor en 1, podemos usar el operador de incremento de la siguiente manera:
*/

let x = 5;
console.log(`x es igual a ${x}`);

x++;
console.log(`x es igual a ${x}`);
console.log("---");

// Nota: También se puede utilizar el operador de incremento antes de la variable, que se conoce como operador de incremento prefijo:

let y = 10;
console.log(`f(x) es igual a ${y}`);

++y;
console.log(`f(x) es igual a ${y}`);
console.log("---");

let x_ = 10; // Se declara y se inicializa una variable llamada x_ con un valor de 10

console.log(x_); // Se muestra el valor actual de la variable x_, que es 10

x_++; // Se incrementa el valor de la variable x_ en 1, ahora su valor es 11

console.log(x_); // Se muestra el valor actual de la variable x_, que es 11

console.log(x_++); // Se muestra el valor actual de la variable x_, que es 11, y luego se incrementa en 1, por lo que su valor ahora es 12

console.log(x_); // Se muestra el valor actual de la variable x_, que es 12

console.log("---");

// Nota: Este tipo de incremento se llama "post-incremento". El post-incremento es un operador de JavaScript que se utiliza para aumentar el valor de una variable en 1 después de que la variable se haya utilizado en una expresión. Es importante tener en cuenta que el post-incremento no cambia el valor de la variable en la expresión en la que se utiliza hasta después de que se haya evaluado la expresión.

let y_ = 100; // Se define una variable y_ con valor 100

console.log(y_); // Se muestra en consola el valor de y_, que es 100

++y_; // Se incrementa el valor de y_ en 1 usando el operador pre-incremento

console.log(y_); // Se muestra en consola el valor actualizado de y_, que es 101

console.log(++y_); // Se incrementa el valor de y_ en 1 usando el operador pre-incremento y se muestra el valor resultante, que es 102

console.log(y_); // Se muestra en consola el valor actualizado de y_, que sigue siendo 102

console.log("---");

// Nota: Puedes asignar cualquier valor que desees a la cantidad de incrementos que quieras dar.

let suma10 = 10;
console.log(suma10);
suma10 += 5; // Incrementa en 5
console.log(suma10);
suma10 += 5; // Incrementa en 5 de nuevo
console.log(suma10);
console.log("---");

let x1 = 5;
let y1 = x1;
y1 += 3;
x1 = y1;
console.log(x1);
console.log(y1);
console.log(y1, x1);
console.log(x1, y1);
console.log("---");

//--------------------

//Decrementos

/*
En JavaScript, un decremento es una operación que disminuye el valor de una variable en una unidad. Es lo opuesto a un incremento, que aumenta el valor en una unidad.

En JavaScript, el decremento se puede realizar de dos formas: pre-decremento y post-decremento. El pre-decremento disminuye el valor de la variable en una unidad antes de ser evaluada en la expresión. El post-decremento disminuye el valor de la variable en una unidad después de ser evaluada en la expresión.
*/

let a = 50; // Declaración e inicialización de la variable "a" con el valor 50

console.log(a); // Imprime en consola el valor actual de "a", que es 50

a--; // Decrementa la variable "a" en 1, por lo que su valor ahora es 49

console.log(a); // Imprime en consola el nuevo valor de "a", que es 49

console.log(a--); // Imprime en consola el valor actual de "a" (49) y luego lo decrementa en 1, por lo que su valor será 48 después de esta línea

console.log(a); // Imprime en consola el valor actual de "a", que es 48

console.log("---");

// Este código define una variable "a" con valor de 50, lo muestra por consola, y luego disminuye su valor en 1 mediante el operador de decremento "a--". Posteriormente, muestra el valor actual de "a" por consola, primero imprimiendo su valor actual y luego disminuyéndolo en 1 con el operador de post-decremento "--a". En resumen, este código realiza una operación de decremento en la variable "a" y utiliza tanto el operador de decremento postfijo como el prefijo.

let b = 500; // se inicializa la variable b con el valor 500

console.log(b); // se imprime el valor de b, que es 500

--b; // se decrementa en 1 el valor de b usando el operador de pre-decremento

console.log(b); // se imprime el nuevo valor de b, que es 499

console.log(--b); // se decrementa en 1 el valor de b usando el operador de pre-decremento y se imprime el nuevo valor de b, que es 498

console.log(b); // se imprime el valor actual de b, que es 498

console.log("---");

// En resumen, este código inicializa la variable b con el valor 500, luego se decrementa en 1 usando el operador de pre-decremento (--b) en dos ocasiones y se imprime el valor de b después de cada decremento. Al final, se imprime el valor actual de b.

// Nota: Puedes asignar cualquier valor que desees a la cantidad de decrementos que quieras dar.

let a_ = 200; // Declara la variable "a_" y le asigna un valor de 200

console.log(a_); // Imprime en la consola el valor actual de "a_", que es 200

a_ -= 50; // Resta 50 a la variable "a_" usando el operador de asignación "-="

console.log(a_); // Imprime en la consola el nuevo valor de "a_", que es 150

a_ -= 100; // Resta 100 a la variable "a_" usando el operador de asignación "-="

console.log(a_); // Imprime en la consola el nuevo valor de "a_", que es 50

console.log("---");

// En resumen, el código define una variable llamada "a_" y le asigna un valor inicial de 200. Luego, la variable se actualiza restando 50 y luego 100, y se imprime el valor actualizado en la consola en cada paso.


