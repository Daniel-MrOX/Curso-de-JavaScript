//Objeto Math

// Nota: Para visualizar las funciones y métodos disponibles en el objeto Math de JavaScript, no es necesario utilizar el comando window en la consola del navegador. En su lugar, se puede escribir directamente "Math" en la consola del navegador y presionar Enter. Esto mostrará una lista con todas las propiedades y métodos del objeto Math, lo que permitirá explorar y utilizar sus funcionalidades de manera más eficiente.

/*
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
Math: Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
*/

// Nota: Es recomendable realizar una investigación adicional sobre este tema para ampliar tus conocimientos y comprenderlo de manera más completa. Es importante que consultes fuentes confiables y actualizadas para obtener información precisa y relevante. De esta manera, podrás profundizar en el tema y tener una visión más completa sobre el mismo.

const pi_ = 3.1416;
console.log(pi_);
console.log("---");

// ---

const pi = Math.PI;
console.log(pi);
console.log("---");

// ---

const n1 = Math.round(3.5); // El método Math.round() es una función integrada (built-in) de JavaScript que redondea un número al entero más cercano.
console.log(n1);
console.log("---");

// ---

const n2 = Math.ceil(2.1); // En JavaScript, la función Math.ceil() se utiliza para redondear el número pasado como parámetro a su entero más cercano en una dirección ascendente de redondeo, es decir, hacia el valor mayor.
console.log(n2);
console.log("---");

// ---

const n3 = Math.floor(2.9); // La función Math.floor() en JavaScript se utiliza para redondear el número pasado como parámetro a su entero más cercano en una dirección descendente de redondeo, es decir, hacia el valor menor.
console.log(n3);
console.log("---");

// ---

const n4 = Math.sqrt(121); // La función Math.sqrt() en JavaScript se utiliza para calcular la raíz cuadrada de un número.
console.log(n4);
console.log("---");

// ---

const n5 = Math.abs(-900); // la función Math.abs() en JavaScript se utiliza para devolver el valor absoluto de un número. El valor absoluto de un número es su distancia desde cero, independientemente de si el número es positivo o negativo.
console.log(n5);
console.log("---");

// ---

const n6 = Math.min(
  496274032460324,
  9485945607456,
  444,
  954874957,
  582756576,
  434629837463,
  84658746584765569346,
  28470827046
); // La función Math.min() en JavaScript se utiliza para devolver el valor más bajo de cero o más números
console.log(n6);
console.log("---");

// ---

const n7 = Math.max(
  7645785473,
  84756984736594365,
  89570483759777777777,
  2039489284
); // La función Math.max() en JavaScript se utiliza para devolver el valor más alto de cero o más números.
console.log(n7);
console.log("---");

// ---

const n8 = Math.random(); // Genera un número decimal aleatorio.
console.log(n8);
console.log("---"); 

// ---

const n9 = Math.floor(Math.random() * 100); // Genera un número entero aleatorio.
console.log(n9);
console.log("---");



