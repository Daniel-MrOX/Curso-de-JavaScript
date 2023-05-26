//Aplica tus conocimientos

/*
Ejercicio 1 => Crea una variable de tipo number para luego sumarla con otra variable de tipo number
*/

let ej1 = 50;
let ej2 = 100;

console.log(ej1 + ej2);
let ej1_ej2 = ej1 + ej2;
console.log(ej1_ej2);
console.log("---");

//---

/*
Ejercicio 2 => Crear tres variables de tipo string, cada una con un valor de texto que se relacione con el anterior, y concatenarlas en una cuarta variable de tipo string. Utilizar operadores de concatenación adecuados para obtener la unión correcta de los valores y asegurarse de que el resultado final muestre una oración coherente y legible.
*/

let ej3 = "Hola";
let ej4 = "Amigo";
let ej5 = "En que puedo ayudarte?";

console.log(`${ej3} ${ej4} ${ej5}`);

let ej3_ej4_ej5 = `${ej3} ${ej4} ${ej5}`;

console.log(ej3_ej4_ej5);
console.log("---");

//---

/*Ejercicio 3 => Crear una variable que contenga al menos seis tipos de datos diferentes, los cuales pueden incluir cadenas de caracteres, números enteros, números decimales, valores booleanos, valores nulos, y objetos. Una vez definida la variable, imprimir su valor en pantalla.*/

let variable = ["Hola", 5, 3.14, true, null, { nombre: "Juan", edad: 25 }]; // ← Array
console.log(variable);
console.log("---Tabla---");
console.table(variable);

// Declaración de la variable con diferentes tipos de datos sin array.

let variable1 = "Hola mundo! ";
variable1 += 5;
variable1 += 3.14;
variable1 += true;
variable1 += null;
variable1 += { nombre: "Juan", edad: 25 };

// Impresión de la variable
console.log(variable1);
console.log("---");

//---

/*Ejercicio 4 => Crear una variable de tipo string con el valor 'El Ave de Hermes es mi nombre, comiéndome las alas para domarme'. Luego, imprimir la posición o índice en la cadena de caracteres donde se encuentra la frase 'comiéndome las alas'.*/

let alucard = "El Ave de Hermes es mi nombre, comiéndome las alas para domarme";
console.log(alucard.indexOf("comiéndome las alas")); //Se encuentra en la posicion 31.
console.log("---");

//---

/*Ejercicio 5 => Dada una división cualquiera, imprimir el residuo de la misma.*/

let div = 75;
let div_ = 33;

console.log(div % div_);

let residuo = div % div_;
let div1 = div / div_;

console.log(`El residuo de la división es: ${residuo}`);
console.log(`La división es: ${div1}`);
console.log("---");

//---

/*Ejercicio 6 => Crea una variable que genere un número aleatorio decimal y una variable que genere un número aleatorio entero */

let random_ = Math.random(); // ← número aleatorio decimal
console.log(random_);

//-

let random_1 = Math.floor(Math.random() * 100); // Generamos un número aleatorio entre 0 y 100, y lo redondeamos al entero más cercano con Math.floor.

// Imprimimos en la consola el valor de la variable random_1.
console.log(random_1);
console.log("---");

//---

/*Ejercicio 7 => Crea una variable en JavaScript que contenga un número negativo, conviértelo a su valor absoluto (número positivo), redondea este número hacia arriba y finalmente saca su raíz cuadrada.*/

let negative_Number = -894.86;
console.log(negative_Number); //Imprime el número en negativo.

let positive_Number = Math.abs(negative_Number);
console.log(positive_Number); //Imprime el número en positivo.

let ceil_ = Math.ceil(positive_Number);
console.log(ceil_); //Imprime el número redondeado hacia arriba.

let root = Math.sqrt(positive_Number);
console.log(root); //Imprime la raíz cuadrada del numero 895.
console.log("---");

//---

/*Ejercicio 8 => Imprime el valor de la constante matemática PI.*/

const pi_ = Math.PI;
console.log(pi_);

//---
