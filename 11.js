//Arrays

/*
Los arrays son un tipo de estructura de datos en programación que permiten almacenar una colección de valores del mismo tipo. Estos valores se almacenan en una secuencia contigua en la memoria, y cada elemento del array puede ser accedido mediante un índice numérico.

Los arrays son muy útiles para almacenar datos relacionados, como una lista de nombres o una lista de precios, ya que permiten acceder a los datos de manera eficiente y rápida utilizando el índice correspondiente. Además, los arrays permiten realizar operaciones en todos los elementos de la lista de forma sencilla, como sumar todos los elementos de una lista de precios o buscar un elemento específico en una lista de nombres.
*/

const nombre = ["Rei", "MrOX", "Pascal"];
const DUI = [54857485, 452356742354, 83463489];

console.log(nombre);
console.table(nombre);
console.log(DUI);
console.table(DUI);
console.log(nombre, DUI);
console.table(nombre, DUI);

//Nota: existe una forma de crear un array utilizando el método de objetos en JavaScript mediante la palabra clave new seguida de la clase Array, y como argumento se le pasa los elementos que se quieren incluir en el array entre paréntesis.

const meses = new Array("Enero", "Febrero", "Marzo");
console.log(meses);

//---

/*
la idea principal de crear arrays en JavaScript es tener una colección de datos relacionados entre sí. Los arrays son estructuras de datos que permiten almacenar y acceder a una serie de valores en una única variable.

Al utilizar un array, se puede almacenar una lista de valores relacionados entre sí en una única variable, en lugar de tener que crear variables separadas para cada valor. Además, los arrays permiten acceder a los valores de manera sencilla mediante un índice, lo que facilita el procesamiento de los datos y su manipulación.

En resumen, los arrays son una herramienta muy útil para organizar y manejar datos relacionados entre sí en JavaScript y en otros lenguajes de programación.
*/

let miArray = [
  "Hola", // String
  25, // Number
  true, // Boolean
  null, // Null
  undefined, // Undefined
  { nombre: "MrOX", edad: 18 }, // Object
  ["Enero", "Febrero", "Marzo"], // Array
];
console.log(miArray);
console.table(miArray);

/*
→ "Hola", que es una cadena de texto (String).
→ 25, que es un número (Number).
→ true, que es un valor booleano (Boolean).
→ null, que es una referencia nula (Null).
→ undefined, que es un valor indefinido (Undefined).
→ {nombre: "MrOX", edad: 18}, que es un objeto (Object) que contiene un par de propiedades nombre y edad.
→ ["Enero", "Febrero", "Marzo"], que es otro array, con tres valores de cadena de texto.

---

Nota: Cabe destacar que aunque es posible crear un array con diferentes tipos de datos, en general es recomendable usar un array para almacenar un tipo de dato específico para una mejor organización y legibilidad del código.
*/

//--------------------

/*Acceder a cada valor de un arreglo de forma específica en JavaScript

Los arreglos en JavaScript están basados en índices numéricos, comenzando desde cero. Por lo tanto, cada elemento de un arreglo tiene un índice que indica su posición dentro del arreglo.

Para acceder a un valor específico de un arreglo, se utiliza la sintaxis de corchetes ([]) y se proporciona el índice del elemento que se desea obtener. 
*/

console.log(miArray[2]); //Imprime true
console.log(miArray[6]); //Imprime un array dentro de un array
console.log(miArray[9]); //Imprime *undefined*

let secondArray = miArray[6];
console.log(secondArray); // En este caso, la información se guardó dentro de una variable específica para acceder a los datos del array interno. Es importante tener en cuenta que se deben seguir buenas prácticas de programación para asegurar la calidad y legibilidad del código.

//---

// Métodos para trabajar con arrays

// 1. Obtener la longitud de un array

console.log(miArray.length);
console.log(nombre.length);
console.log(DUI.length);

//Nota: En la programación, los iteradores son herramientas que permiten recorrer los elementos de un array o colección de datos de forma secuencial, ejecutando un bloque de código por cada elemento. De esta manera, se pueden realizar operaciones sobre cada elemento del array, como mostrarlos en pantalla, modificarlos, filtrarlos o realizar cálculos con ellos.

DUI.forEach(function (numero) {
  console.log(numero);
}); // ← ← ← forEach es propio de JavaScript

/*Nota: el método "forEach" se utiliza para recorrer los elementos de un array y ejecutar una acción específica para cada uno de ellos. La acción que se ejecuta en cada elemento del array puede ser una función que se le pase como argumento al método "forEach".

Por ejemplo, supongamos que tenemos un array de números y queremos mostrar en la consola cada uno de ellos multiplicado por 2. Podríamos utilizar el método "forEach" de la siguiente manera:
*/

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
  console.log(numero * 2);
});

//2. Agregar elementos a un Array

// Creamos un array con algunos números y objetos
const miArray2 = [
  1,
  2,
  { nombre: "MrOX", edad: 30 },
  4,
  { nombre: "Alucard", edad: 22 },
];

// Mostramos en consola el array completo
console.log(miArray2);
console.log(miArray2.length);

//Forma n#1 de agregar un nuevo elemento al Array:

miArray2[5] = 20;
console.table(miArray2);
console.log(miArray2.length); // ← No se aconseja agregar elementos a un Array de esta forma, ya que es necesario conocer tanto la longitud del array como la posición en la que se desea agregar el nuevo elemento.

// El método 'push()' se utiliza para agregar uno o más elementos al final de un Array en JavaScript.

miArray2.push(20, 90); // ← ← ← nuevos elementos agregados al final del Array
miArray2.push("Rei", "Misato"); // ← ← ← nuevos elementos agregados al final del Array
console.log(miArray2);
console.table(miArray2);

// El método unshift() se utiliza para agregar uno o más elementos al inicio de un Array en JavaScript.

miArray2.unshift("Hola", 18); //← ← ← nuevos elementos agregados al inico del Array
console.log(miArray2);
console.table(miArray2);

// Nota: recomiendo que dedique un tiempo regularmente a revisar y practicar aquello que ya ha aprendido. Esto le permitirá reforzar su memoria y comprensión.

// 3. Eliminar elementos de un Array

// El método 'pop()' en JavaScript elimina el último elemento de un array y devuelve ese elemento. Al mismo tiempo, este método también modifica el array original, reduciendo su longitud en 1.

console.log(miArray2.length);
miArray2.pop();
console.log(miArray2.length);
console.table(miArray2);

// El método 'shift()' elimina el primer elemento del array y desplaza todos los elementos restantes hacia la izquierda, reduciendo la longitud del array en 1.

console.log(miArray2);
miArray2.shift();
console.log(miArray2);
console.table(miArray2);

/*
El método 'splice()' en JavaScript se utiliza para modificar un array eliminando, reemplazando o agregando elementos en cualquier posición del array. Este método modifica el array original y devuelve un array que contiene los elementos eliminados.  

El método splice() acepta tres argumentos:

1. El índice de inicio, que indica la posición donde se iniciará la operación.

2. El número de elementos que se eliminarán a partir del índice de inicio (este argumento es opcional).

3. Los elementos que se agregarán al array, comenzando en el índice de inicio (también es opcional).
*/

console.log(miArray2);
console.table(miArray2);
console.log(miArray2.length);
miArray2.splice(5, 1);
console.log(miArray2.length);
console.table(miArray2);

//--------------------

// La desventaja principal de todos estos metodos esque modifican el Array original en donde se encuentran todos los elementos, es por eso que existe un enfoque el cual consite en mantener el Array original intacto y crear uno nuevo para rwealizar las modificaciones correspondientes.

//Rest Operator o Spread Operator

const meses_ = ["Enero", "Febrero", "Marzo", "Abril"];
console.log(meses_);

const nuevoArreglo = [...meses_, "Mayo"];
console.log(nuevoArreglo);

const nuevoArreglo_ = ["Diciembre", ...meses_];
console.log(nuevoArreglo_);

/*
Nota: En JavaScript, los arreglos también se conocen como matrices y son objetos que contienen una serie de elementos ordenados. En términos generales, se puede decir que no existen los arrays asociativos en JavaScript, ya que los arrays se indexan numéricamente y no por claves de cadena como en algunos otros lenguajes de programación.

Sin embargo, es cierto que podemos tener arrays de objetos en JavaScript, donde cada objeto puede tener propiedades con claves de cadena. De esta manera, podemos simular un array asociativo utilizando un array de objetos, donde cada objeto representa un par clave-valor.
*/

const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "TV 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

console.log(carrito);
console.table(carrito);

//Comprobar si existe algun elemento dentro de un Array

//forEach

carrito.forEach(function (products) {
  console.log(products); // Imprime todos los productos
});

meses_.forEach(function (mes) {
  if (mes == "Enero") {
    console.log(1); //Imprime la validación de la existencia del elemento denominado 'Enero' dentro del arreglo denominado 'meses_'."
  }
});

meses.forEach(function (meses) {
  console.log(meses); //Imprime todos los elementos (meses) que estan presentes en el array
});

/*
Explicación:
 En el código que presentas, primero estás iterando sobre cada elemento del arreglo 'meses_' mediante la función forEach(). Luego, en cada iteración se realiza una validación para verificar si el elemento actual es igual a la cadena de texto "Enero". Si se cumple esta condición, se ejecuta la acción de imprimir en consola el número 1, lo que indica la existencia del elemento "Enero" dentro del arreglo. En resumen, se está validando dentro de la iteración si existe o no el elemento "Enero" en el arreglo.
*/

//-----

// El método de Array que permite comprobar de manera booleana si un elemento existe dentro de un Array es Array.includes(). Este método devuelve true si el elemento buscado está presente en el Array y false si no lo está.

const miArray3 = [1, 2, 3, 4, 5];
const res = miArray3.includes(2);
console.log(res); // Imprime true

const elementoBuscado = 3;

if (miArray3.includes(elementoBuscado)) {
  console.log("El elemento buscado existe en el Array.");
} else {
  console.log("El elemento buscado no existe en el Array.");
}

//Nota: Método de Array ideal para Arrays de objetos, puedes usar el método Array.some(), que devuelve true si al menos un elemento del Array cumple con la condición especificada en una función de prueba y false si ninguno lo hace.

let resultado;

resultado = carrito.some(function (producto) {
  return producto.nombre === "Celular";
});
console.log(resultado); // Imprime true

const miArray4 = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 25 },
];

const existeJuan = miArray4.some((elemento) => elemento.nombre === "Juan");

if (existeJuan) {
  console.log("Hay un objeto con nombre Juan en el Array.");
} else {
  console.log("No hay ningún objeto con nombre Juan en el Array.");
}

// Método Reduce

let result__;
result__ = carrito.reduce(function (total, productos) {
  return total + productos.precio;
}, 0);

console.log(result__); //Imprime la suma total del precio de cada producto

// Método Filter

const usuarios = [
  { id: 1, nombre: "Ana", edad: 24 },
  { id: 2, nombre: "Juan", edad: 31 },
  { id: 3, nombre: "María", edad: 27 },
  { id: 4, nombre: "Pedro", edad: 29 },
  { id: 5, nombre: "Lucía", edad: 26 },
];
console.log(usuarios);

const usuariosMenoresDe30 = usuarios.filter((usuario) => usuario.edad < 30);
console.log(usuariosMenoresDe30);

// Método Sort, ordena el Array a,b,c

usuarios.sort();
console.log(usuarios);

//Método Reverse, invierte el orden del Array

usuarios.reverse();
console.log(usuarios);
