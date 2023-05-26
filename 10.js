// Bucles

/*
Los bucles son una estructura fundamental en la programación que te permiten ejecutar un bloque de código repetidamente. En JavaScript, hay tres tipos principales de bucles: el bucle 'for', el bucle 'while' y el bucle 'do-while'.

→ 1. Bucle for:
El bucle for se utiliza cuando conoces la cantidad exacta de repeticiones que deseas realizar. Aquí tienes la sintaxis básica del bucle for:

for (inicialización; condición; expresión de actualización) {
  // bloque de código a repetir
}

    → La "inicialización" se refiere a la variable de control y su valor inicial.

    → La "condición" es una expresión booleana que se evalúa antes de cada iteración. Si es verdadera, el bucle se ejecuta; si es falsa, el bucle se detiene.
    
    → La "expresión de actualización" se utiliza para actualizar la variable de control después de cada iteración.

Dentro del bloque de código del bucle for, puedes realizar cualquier acción que necesites repetir. Por ejemplo, imprimir valores en la consola, manipular elementos en una matriz, realizar cálculos, etc.
*/

console.log("---For---");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("-");

// Explicación del código: En este caso, i se inicializa en 1, la condición es i <= 5, lo que significa que el bucle se ejecutará mientras i sea menor o igual a 5, y i++ se utiliza para incrementar i en 1 después de cada iteración. En cada iteración, se imprime el valor actual de i en la consola.

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("-");

// Explicación del código: El código utiliza un bucle for para imprimir los números del 10 al 0 en la consola. Comienza con i igual a 10 y continúa ejecutándose mientras i sea mayor o igual a 0. En cada iteración, se imprime el valor actual de i en la consola y luego i se decrementa en 1. El bucle termina cuando i es menor que 0. Por lo tanto, en la consola se mostrarán los números del 10 al 0, uno en cada línea.

// ---

// El problema de Fizz Buzz: es un clásico en programación y se puede resolver utilizando un bucle for.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*
Explicación del código:

→ 1. En este código, el bucle for se ejecutará desde 1 hasta 100. En cada iteración, se verifica si el número actual (i) es divisible por 3 y 5 (es decir, si es un múltiplo de 3 y 5 al mismo tiempo). Si es así, se imprime "FizzBuzz".

→ 2. Si el número no es divisible por 3 y 5, se verifica si es divisible solo por 3. En ese caso, se imprime "Fizz". Si no es divisible por 3, se verifica si es divisible solo por 5, y en ese caso se imprime "Buzz".

→ 3. Si el número no es divisible por 3 ni por 5, simplemente se imprime el número.

Al ejecutar este código, verás una secuencia de números del 1 al 100, pero los números que son múltiplos de 3 se reemplazarán por "Fizz", los múltiplos de 5 se reemplazarán por "Buzz" y los múltiplos de ambos se reemplazarán por "FizzBuzz".
*/

console.log("-");

// La secuencia de Fibonacci utilizando un bucle for

function fibonacci(n) {
  let fib = [0, 1]; // Inicializamos la secuencia con los primeros dos números

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n); // Retornamos solo los primeros n términos de la secuencia
}

// Ejemplo de uso
const n = 10; // Número de términos de la secuencia que deseamos obtener
const sequence = fibonacci(n);

console.log(sequence); // Imprime la secuencia de Fibonacci

console.log("---");

/*
Explicación del código:

→ 1. Definición de la función fibonacci(n): La función fibonacci toma un parámetro n, que representa el número de términos de la secuencia de Fibonacci que deseamos obtener.

→ 2. Inicialización del array fib: Creamos un array llamado fib con los primeros dos números de la secuencia de Fibonacci, que son 0 y 1. Estos dos números actúan como los casos base de la secuencia.

→ 3. Bucle for para calcular los siguientes términos: Utilizamos un bucle for que comienza en 2, ya que los primeros dos números de Fibonacci ya están definidos en el array fib. El bucle se repite hasta n, que es el número de términos que queremos obtener.

→ 4. Cálculo de los siguientes números de Fibonacci: En cada iteración del bucle, calculamos el siguiente número de Fibonacci sumando los dos números anteriores en la secuencia (fib[i - 1] y fib[i - 2]). Guardamos el resultado en fib[i], lo que significa que estamos agregando el nuevo número al array fib.

→ 5. Retorno de los primeros n términos: Después de que el bucle for ha terminado de calcular los términos de Fibonacci, utilizamos el método slice() en el array fib para obtener solo los primeros n términos de la secuencia. Esto se hace con fib.slice(0, n), que crea una nueva copia del array fib que contiene solo los elementos desde el índice 0 hasta el índice n-1.

→ 6. Ejemplo de uso: Fuera de la función, definimos una variable n que representa el número de términos que deseamos obtener de la secuencia de Fibonacci. Luego, llamamos a la función fibonacci(n) y almacenamos el resultado en la variable sequence.

→ 7. Impresión de la secuencia: Finalmente, utilizamos console.log(sequence) para imprimir la secuencia de Fibonacci en la consola.
*/

//--------------------

console.log("---Bucle While---");

/* Bucle While

El bucle while es una estructura de control que permite repetir un bloque de código siempre que se cumpla una condición específica. La sintaxis básica del bucle while es la siguiente:

while (condición) {
  // Bloque de código a ejecutar
}

→ 1. La condición es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la condición es verdadera, el bloque de código se ejecuta; de lo contrario, si la condición es falsa, el bucle se detiene y la ejecución continúa con la siguiente línea de código después del bucle while.

→ 2. Es importante tener en cuenta que si la condición es falsa desde el principio, el bloque de código dentro del bucle nunca se ejecutará.
*/

// Ejemplo: imprimir los números del 1 al 5:

let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}

console.log("-");

/* Explicación del código: 

→ 1. inicializamos una variable llamada contador con el valor 1. La condición del bucle while es contador <= 5, lo que significa que el bucle se ejecutará siempre que el valor de contador sea menor o igual a 5.

→ 2. Dentro del bloque de código del bucle, imprimimos el valor actual de contador y luego incrementamos su valor mediante contador++. Esto asegura que en cada iteración, el valor de contador se incremente en 1.

Nota: Es importante tener cuidado al utilizar el bucle while, ya que si la condición no se cumple correctamente, se puede crear un bucle infinito que provocará que el programa se ejecute indefinidamente. Para evitar esto, asegúrate de que la condición se actualice dentro del bucle para que en algún momento se vuelva falsa y se salga del bucle.
*/

// Contador ascendente:

let contador2 = 1;
while (contador2 <= 5) {
  console.log(contador2);
  contador2++;
} // Este bucle imprimirá los números del 1 al 5 en la consola.

console.log("-");

// -

// Contador descendente:

let contador3 = 10;
while (contador3 >= 1) {
  console.log(contador3);
  contador3--;
} // Este bucle imprimirá los números del 10 al 1 en la consola.

console.log("-");

// -

// Generación de números aleatorios:

let suma = 0;
while (suma < 100) {
  let numero = Math.floor(Math.random() * 10) + 1;
  suma += numero;
}
console.log("La suma final es: " + suma); // Este bucle generará números aleatorios del 1 al 10 y los sumará hasta que la suma alcance o supere 100.

console.log("-");

// -

// Validación de entrada:

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nombre = "";

rl.question("Ingrese su nombre: ", (answer) => {
  nombre = answer;

  if (nombre === "") {
    console.log("El nombre no puede estar vacío.");
    rl.close();
    return;
  }

  console.log("¡Hola, " + nombre + "!");
  rl.close();
});
*/

/*
En este código, hemos creado una interfaz readline utilizando createInterface. Luego, usamos el método question para mostrar el mensaje de solicitud de entrada y capturar la respuesta del usuario. La respuesta se asigna a la variable nombre. Si el nombre está vacío, se muestra un mensaje de error.

Una vez que se obtiene el nombre válido, se muestra el mensaje de saludo y se cierra la interfaz readline utilizando el método close.
*/

console.log("-");

// Do-While

console.log("---Do-While---");

/*
El bucle do-while es una estructura de control de flujo en JavaScript que permite repetir un bloque de código mientras se cumpla una condición especificada. La sintaxis básica del bucle do-while es la siguiente:

do {
  // Bloque de código
} while (condición);

→ 1. El bloque de código: Es el conjunto de instrucciones que deseas repetir. Puede contener cualquier cantidad de declaraciones, sentencias y expresiones válidas en JavaScript.

→ 2. La palabra clave do: Marca el inicio del bloque de código del bucle. Indica que el bloque se ejecutará al menos una vez, sin importar si la condición es verdadera o falsa.

→ 3. La palabra clave while: Es seguida de una condición entre paréntesis. La condición es evaluada después de ejecutar el bloque de código. Si la condición es verdadera, el bucle se repetirá; de lo contrario, el bucle se detendrá y la ejecución continuará con el código que sigue después del bucle.

→ 4. La condición: Es una expresión que se evalúa como verdadera o falsa. Si la condición es verdadera, el bucle se repetirá; si es falsa, el bucle se detendrá. Es importante tener en cuenta que la condición debe ser una expresión que eventualmente se vuelva falsa para evitar bucles infinitos.

→ 5. Punto y coma: Después de la declaración while, se debe colocar un punto y coma para indicar el final del bucle.

-----

El flujo de ejecución de un bucle do-while es el siguiente:

→ El bloque de código dentro del do se ejecuta.

→ Se evalúa la condición después de ejecutar el bloque de código.

→ Si la condición es verdadera, se repite el paso 1 y se ejecuta nuevamente el bloque de código. Si la condición es falsa, el bucle se detiene y la ejecución continúa con el código después del bucle.

-----

Nota: Es importante tener en cuenta que el bucle do-while se utiliza cuando se desea que el bloque de código se ejecute al menos una vez, independientemente de si la condición es verdadera o falsa.
*/

// Contar hasta 5 e imprimir los números.

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

console.log("-");

// -

// Generar números aleatorios hasta que se genere un número mayor que 0.8.

let numero;
do {
  numero = Math.random();
  console.log(numero);
} while (numero <= 0.8);

console.log("-");

// -

// Imprimir los caracteres de una cadena en orden inverso.

const palabra = "Hola";
let indice = palabra.length - 1;
do {
  console.log(palabra[indice]);
  indice--;
} while (indice >= 0);

console.log("-");
