/*
Se requiere implementar un bucle que genere la secuencia de números naturales del 1 al 50, con la particularidad de que, en caso de que un número termine en el dígito 3, se debe imprimir el mensaje "¿Querés jugar?", mientras que si el número termina en 7, se debe imprimir "Algo?". En caso contrario, es decir, cuando el número no cumple ninguna de estas condiciones, se imprimirá el propio número correspondiente en la secuencia. La presente especificación busca garantizar una solución robusta, precisa y legible para el problema planteado.
*/

for (let i = 1; i <= 50; i++) {
  if (i % 10 === 3) {
    console.log(i + " Querés jugar?");
  } else if (i % 10 === 7) {
    console.log(i + " Algo");
  } else {
    console.log(i);
  }
}

//---

/*
Para resolver el problema planteado, se requiere definir una variable denominada "Secreta", la cual contendrá un número entero aleatorio en el rango del 1 al 30, ambos inclusive. Una vez que se ha establecido esta variable, se debe implementar un bucle que recorra los números enteros del 1 al 30, imprimiendo cada uno de ellos en la consola. En caso de que el número secreto coincida con el número que se está imprimiendo en ese momento, se debe mostrar el mensaje "Este es tu número" en la consola.
*/

// Generar número aleatorio entre 1 y 30
let Secreto = Math.floor(Math.random() * 30) + 1;

// Recorrer los números del 1 al 30 e imprimirlos
for (let i = 1; i <= 30; i++) {
  if (i === Secreto) {
    console.log("Este es tu número");
  } else {
    console.log(i);
  }
}

//---

/*
Se requiere implementar una función que reciba como parámetros cinco números, con la finalidad de multiplicar cada uno de ellos por 5 y devolver el resultado de la operación. Posteriormente, se debe imprimir este resultado en la consola o en cualquier otra salida deseada.
*/

function x5(num1, num2, num3, num4, num5) {
  let resultados = [num1 * 5, num2 * 5, num3 * 5, num4 * 5, num5 * 5];
  return resultados;
}

let res = x5(1, 2, 3, 4, 5);
console.log(res);

//---

/*
"Se solicita la creación de una función que reciba como argumento un arreglo de números enteros. La función deberá realizar la suma de todos los elementos del arreglo y posteriormente, validar si el resultado obtenido es múltiplo de 3. En caso afirmativo, la función deberá imprimir el mensaje 'Si es múltiplo'. En caso contrario, la función deberá imprimir el mensaje 'No es múltiplo'."
*/

function validarMultiploDeTres(arr) {
  const suma = arr.reduce((acc, curr) => acc + curr);
  const mensaje = suma % 3 === 0 ? "Si es múltiplo" : "No es múltiplo";
  console.log(mensaje);
}

const miArreglo = [1, 2, 3, 4, 5];
validarMultiploDeTres(miArreglo);

// En esta solución, se utiliza el método reduce para sumar todos los elementos del arreglo "arr". Luego, se utiliza un operador ternario para asignar el mensaje correspondiente en función del resultado de la validación. Finalmente, se imprime el mensaje en la consola.

//---

/*
Genere un array de 20 elementos, donde cada elemento sea un número aleatorio entero entre 1 y 100. Posteriormente, calcula la suma de todos los elementos del array y la media de dichos números. Finalmente, muestra por consola el array generado, la suma y la media obtenida con dos decimales de precisión.
*/

// Crear un array de 20 posiciones con números del 1 al 100
const numeros = Array.from(
  { length: 20 },
  () => Math.floor(Math.random() * 100) + 1
);

// Obtener la suma de los números del array
const suma = numeros.reduce((acc, curr) => acc + curr, 0);

// Obtener la media de los números del array
const media = suma / numeros.length;

console.log(`El array de números es: ${numeros}`);
console.log(`La suma de los números es: ${suma}`);
console.log(`La media de los números es: ${media}`);

//---

/*
"Se requiere implementar un programa en JavaScript que reciba como entrada un array de números enteros. El programa debe calcular y mostrar en la consola el número mayor, el número menor y la media de los números del array con dos decimales de precisión. Para ello, se debe utilizar la función Math.max para obtener el número mayor, la función Math.min para obtener el número menor, y el método reduce para obtener la suma de todos los números y luego dividir esa suma entre la longitud del array para calcular la media. Finalmente, se mostrarán los resultados obtenidos en la consola, junto con el array de números de entrada."
*/

const numeros_ = [5, 99, 43, 12, 37, 100, 25, 33, 123];

// Obtener el mayor número del array
const maximo = Math.max(...numeros_);

// Obtener el menor número del array
const minimo = Math.min(...numeros_);

// Obtener la media de los números del array
const suma_ = numeros_.reduce((acc, curr) => acc + curr, 0);
const media_ = suma_ / numeros_.length;

console.log(`El array de números es: ${numeros_}`);
console.log(`El número mayor es: ${maximo}`);
console.log(`El número menor es: ${minimo}`);
console.log(`La media de los números es: ${media_.toFixed(2)}`);

//---

/*
Se requiere desarrollar una función en JavaScript que reciba como parámetro un array de números y retorne un nuevo array con los elementos invertidos. Es decir, el primer elemento del array original se ubicará en la última posición del array resultante, el segundo elemento se ubicará en la penúltima posición y así sucesivamente, hasta que el último elemento del array original sea el primer elemento del array resultante. Es importante mencionar que la función no debe utilizar el método reverse, ya que se busca implementar una solución alternativa. 
*/

function invertirArray(arr) {
  const newArr = [];
  let index = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    newArr[index] = arr[i];
    index--;
  }
  return newArr;
}

const arrOriginal = [1, 2, 3, 4, 5];
const arrInvertido = invertirArray(arrOriginal);

console.log(`Array original: ${arrOriginal}`);
console.log(`Array invertido: ${arrInvertido}`);

//---

/*
Concatena dos arrays de enteros A y B de forma decendente
[11,4,18,46,25,22,100]
[200,159,142,3,1,88,37]
*/

const A = [11, 4, 18, 46, 25, 22, 100];
const B = [200, 159, 142, 3, 1, 88, 37];

const C = A.concat(B);

C.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(C);

//---

/*Se desea implementar una función en JavaScript que permita insertar un nuevo número en una posición específica de un array predefinido que contiene únicamente valores enteros. El array inicial tiene una longitud de 8 elementos y está compuesto por los siguientes valores: [28, 15, 12, 36, 24, 67, 86, 35]. La función debe recibir como argumentos el número a insertar y la posición del array donde se desea insertar el nuevo número. Por ejemplo, si se desea insertar el número 9 en la posición 5 del array, el resultado final sería el siguiente: [28, 15, 12, 36, 24, 9, 67, 86, 35]. Es importante mencionar que los índices del array comienzan desde 0."
 */

function insertNumber(array, num, position) {
  array.splice(position, 0, num);
  return array;
}

const array__ = [28, 15, 12, 36, 24, 67, 86, 35];
const num = 9;
const position = 5;

const newArray = insertNumber(array__, num, position);

console.log(newArray);

//---

/*
Se solicita implementar una función en JavaScript que permita realizar dos operaciones sobre un array predefinido de enteros: ordenar los elementos en orden ascendente y eliminar los elementos repetidos. El array inicial está compuesto por los siguientes elementos: [7, 3, 25, 2, 42, 85, 34, 22, 42, 48, 63, 2, 9, 19, 22]. La función debe recibir el array como argumento y devolver un nuevo array con los elementos ordenados y sin repeticiones.

Es importante destacar que la solución debe tener en cuenta que los valores del array son únicamente enteros y que el ordenamiento de los elementos debe hacerse en orden ascendente. Además, la eliminación de los elementos repetidos debe asegurar que no haya duplicados en el nuevo array resultante."
*/

function sortAndRemoveDuplicates(array) {
  array.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i + 1, 1);
      i--;
    }
  }

  return array;
}

const array___ = [7, 3, 25, 2, 42, 85, 34, 22, 42, 48, 63, 2, 9, 19, 22];
const sortedArray = sortAndRemoveDuplicates(array___);

console.log(sortedArray);
