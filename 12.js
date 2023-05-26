// Programacion Orientada a Objetos

//Que es POO?

/*
La Programación Orientada a Objetos (POO) es un paradigma de programación que se enfoca en la creación y manipulación de objetos, que son entidades que pueden contener datos y funciones que operan sobre esos datos. El término "Object Oriented Programming" (OOP) viene del inglés y se refiere a este paradigma.

Un paradigma es un conjunto de principios, métodos y prácticas que se utilizan en una disciplina para resolver problemas. En el caso de la programación, un paradigma es una forma de abordar la resolución de problemas mediante un conjunto de recomendaciones y técnicas.

La POO modela objetos de la vida real mediante entidades que llamamos objetos. Los objetos se caracterizan por su estado (los datos que contienen) y su comportamiento (las funciones que operan sobre esos datos). Al modelar objetos de la vida real, se busca crear un software que refleje de manera precisa y eficiente el comportamiento de esos objetos.

En resumen, la POO es un paradigma de programación que se enfoca en la creación y manipulación de objetos, que se modelan a partir de entidades de la vida real. Este paradigma utiliza un conjunto de recomendaciones y técnicas para resolver problemas de programación de manera eficiente y precisa.
*/

//---

//Los objetos en JavaScript

/*
¿Por qué casi todo en JavaScript es un objeto?

Para comprender por qué casi todo en JavaScript es un objeto, es importante conocer los objetos básicos y los tipos de datos que ofrece este lenguaje.

En JavaScript, existen seis tipos de datos primitivos: número, cadena de texto, booleano, null, undefined y símbolo. Estos tipos de datos se almacenan como valores simples y se pasan por valor.

Además de los tipos de datos primitivos, JavaScript también ofrece dos tipos de datos compuestos: objetos y arreglos. Los objetos son una colección de propiedades, que pueden ser valores primitivos o funciones. Las propiedades se acceden mediante una sintaxis de puntos o corchetes. Los arreglos son una colección ordenada de elementos, que pueden ser de cualquier tipo de datos, incluyendo otros arreglos y objetos.

En JavaScript, todo se trata como un objeto, incluso los tipos de datos primitivos. Por ejemplo, las cadenas de texto tienen propiedades y métodos asociados con ellas, lo que significa que se pueden manipular como objetos. Los métodos de cadena comunes incluyen la concatenación de cadenas, la búsqueda de subcadenas y la conversión de mayúsculas y minúsculas.

Además, en JavaScript, las funciones son objetos de primera clase, lo que significa que se pueden tratar como cualquier otro objeto. Las funciones pueden tener propiedades y métodos, y pueden ser asignadas a variables y pasadas como argumentos a otras funciones.

En conclusión, JavaScript es un lenguaje de programación que ofrece tipos de datos primitivos y compuestos, incluyendo objetos y arreglos. Aunque los tipos de datos primitivos no son objetos en sí mismos, en JavaScript, todo se trata como un objeto, lo que significa que incluso los tipos de datos primitivos tienen propiedades y métodos asociados con ellos. Las funciones también se tratan como objetos de primera clase en JavaScript, lo que permite una gran flexibilidad en la programación.
*/

console.log(typeof {}); // Imprime objeto
console.log(typeof []); // Imprime objeto
console.log(Date()); // Imprime un string
console.log(typeof new Date()); // Imprime objeto
console.log(RegExp()); // Imprime una expresión regular. Esto se debe a que la función RegExp() es un constructor de objetos que crea una nueva instancia de una expresión regular. Si se llama sin argumentos, la expresión regular creada es una cadena vacía "".
console.log(typeof RegExp()); //Imprime objeto
console.log(typeof new RegExp()); //Imprime objeto

//Nota : En JavaScript, los tipos de datos primitivos son aquellos que no son objetos, lo que significa que son valores simples.

/*
→Número: representa números enteros o de punto flotante.

→ Cadena de texto: representa una cadena de caracteres.

→ Booleano: representa un valor lógico verdadero o falso.

→ Null: representa un valor nulo intencionalmente asignado a una variable.

→ Undefined: representa una variable que no tiene un valor asignado.

→ Símbolo: representa un valor único e inmutable que se utiliza como clave de propiedad en objetos.

Los valores de los tipos de datos primitivos se asignan por valor, lo que significa que cuando se asigna un valor a una variable, se copia el valor real en la variable. En cambio, los objetos se asignan por referencia, lo que significa que cuando se asigna un objeto a una variable, se asigna la referencia a la ubicación en memoria del objeto.

Es importante tener en cuenta que aunque los tipos de datos primitivos no son objetos, JavaScript proporciona métodos y propiedades para trabajar con ellos. Por ejemplo, las cadenas de texto tienen propiedades y métodos como length, toUpperCase() y substring().
*/

console.log(100);
console.log(typeof 100);
console.log(new Number(100));
console.log(typeof new Number(100));

console.log("Hola Mundo");
console.log(typeof "Hola Mundo");
console.log(new String("Hola Mundo"));
console.log(typeof new String("Hola Mundo"));

console.log(true);
console.log(typeof true);
console.log(new Boolean(true));
console.log(typeof new Boolean(true));

/*
En JavaScript, aunque los tipos de datos primitivos no son objetos, se puede crear un objeto a partir de un tipo de dato primitivo mediante lo que se conoce como "envoltorio" o "wrapper".

Por ejemplo, el tipo de dato primitivo string tiene un objeto envoltorio correspondiente llamado String. De esta manera, se puede crear un objeto String a partir de un valor string primitivo de la siguiente manera:
*/

let cadena = "Hola Mundo";
console.log(cadena);
let objetoCadena = new String(cadena);
console.log(objetoCadena);

// Nota : Se debe tener en cuenta que a diferencia de los valores primitivos, los objetos envoltorios son objetos complejos y tienen un mayor costo en términos de memoria y procesamiento. Por esta razón, generalmente se prefieren los tipos de datos primitivos a los objetos envoltorios en situaciones donde se desea un alto rendimiento o se necesita trabajar con grandes cantidades de datos.

//-----

// Objeto Literal

console.log({}); // Al ejecutar la instrucción console.log({}) se imprimirá en la consola un objeto literal vacío. Un objeto literal es una colección de pares de clave-valor encerrados entre llaves {}. Cada clave es una cadena de texto que actúa como identificador para el valor asociado. Los objetos literales se utilizan en JavaScript para agrupar datos que pertenecen a una misma entidad y se pueden utilizar para representar estructuras de datos complejas, como registros, listas, diccionarios y árboles, entre otros.

let persona = {
  nombre: "Daniel",
  apellido: "Mrox",
  edad: 25,
  email: "daniel.mrox@example.com",
};

console.log(persona);

/*

→ nombre

→ apellido
 
→ edad

→ email

En JavaScript, las propiedades de un objeto se pueden nombrar utilizando cadenas de texto que actúan como identificadores para el valor asociado. A estas cadenas de texto se les conoce como "claves" o "propiedades".

Cada uno de los nombres "nombre", "apellido", "edad" y "email" son claves que hacen referencia a los valores asociados.

Nota: Cabe destacar que en JavaScript no existen variables dentro de un objeto, ya que las variables son elementos independientes que se utilizan para almacenar valores. En cambio, los objetos utilizan propiedades que se utilizan para almacenar valores asociados a claves específicas.

Nota: Si bien es cierto que los objetos en JavaScript están formados por un conjunto de pares de clave y valor, no se limitan únicamente a esto. Los objetos también pueden tener métodos, que son funciones asociadas a un objeto específico. Por lo tanto, en JavaScript, un objeto se puede definir como una colección de propiedades, donde cada propiedad se compone de una clave (también llamada "nombre de la propiedad") y un valor asociado a esa clave. Además, los objetos pueden contener métodos, que son funciones que se ejecutan en el contexto del objeto.
*/

const user = {
  name: "Rodrigo",
  lastName: "Camilo",
  age: 20,
  hobbies: ["read", "programming", "run"],
  address: {
    street: "Japan, Tokyo",
    city: "San Salvador",
  },
};

console.log(user);

//-----

/*
Propiedades

En JavaScript, las propiedades son datos que describen a un objeto.  Cada propiedad de un objeto consiste en un par clave-valor, donde la clave es una cadena (también llamada "nombre de la propiedad") y el valor puede ser cualquier tipo de dato válido en JavaScript, como un número, una cadena, un objeto, una función, etc.

En la visión de la POO, los datos que contiene un objeto se llaman propiedades del objeto. En JavaScript, estas propiedades son simplemente pares de clave y valor. Cuando hablamos de POO, es importante tener en cuenta que el código va de la mano con la teoría y que estas propiedades de un objeto son fundamentales en su definición.

Cabe destacar que no siempre tiene que ser un objeto real, también podemos tener objetos virtuales o abstractos, como por ejemplo una tarjeta de crédito.
*/

//-----

// Métodos

/*
La Programación Orientada a Objetos (POO) es un paradigma de programación en el que se modelan entidades del mundo real o abstracto como objetos, los cuales contienen datos (propiedades) y comportamientos (métodos) asociados. En este enfoque, los objetos no solo almacenan información, sino que también pueden realizar acciones y ejecutar comportamientos específicos.

En JavaScript, un método es una función que está asociada a un objeto y que puede ser invocada para realizar alguna acción específica. Por ejemplo, si se tiene un objeto que representa un automóvil, los métodos podrían incluir acciones como avanzar, retroceder, frenar, entre otros.

Cada objeto en JavaScript tiene sus propias propiedades y métodos que pueden ser accedidos mediante la notación de punto. Esto permite la manipulación y transformación de los datos contenidos en el objeto, y la ejecución de las acciones asociadas a los métodos.

En conclusión, en la POO los objetos no son solo entidades estáticas que almacenan información, sino que son entidades dinámicas y versátiles que pueden realizar acciones específicas y ejecutar comportamientos definidos por los métodos asociados.
*/

function mostrarNombreCompleto() {
  return "Rei Ayanami";
}

const rei = {
  name: "Rei",
  lastName: "Ayanami",
  age: 20,
  mostrar: mostrarNombreCompleto,
  nivel: function () {
    return 255;
  },
  ventaja() {
    return "Muerte";
  },
};

console.log(rei.mostrar());
console.log(rei.nivel());
console.log(rei.ventaja());

/*
Nota: En términos generales, se puede decir que las funciones que se ejecutan en los objetos deben ser coherentes con las propiedades del objeto en cuestión, para evitar errores y asegurar un funcionamiento correcto del programa. Sin embargo, no es una regla estricta que la función deba depender necesariamente de las propiedades del objeto.

En algunos casos, es posible que la función deba actuar sobre el objeto en sí mismo, sin tener en cuenta necesariamente las propiedades específicas. Por ejemplo, una función que elimine un objeto de una lista no necesitaría depender de las propiedades del objeto en sí mismo.

En cualquier caso, es importante que las funciones sean diseñadas de manera coherente y cohesiva con la estructura y propósito del objeto en cuestión, para garantizar la consistencia y fiabilidad del programa.
*/

//-----

// This

const userCeo = {
  name: "Elon",
  lastName: "Musk",
  age: 51,
  showFullName() {
    return "Shinji Ikari";
  },
};

console.log(userCeo);
console.log(userCeo.showFullName());

const userAdmin = {
  name: "Sebastian",
  lastName: "Castellanos",
  age: 51,
  showFullName() {
    console.log(this); // → hace referencia a este mismo objeto "userAdmin"
    return "Alucard";
  },
};

console.log(userAdmin.showFullName());

// Explicación : En JavaScript, la palabra clave "this" se refiere al objeto en el que se está ejecutando el código en ese momento. Dentro de un objeto, "this" se refiere al objeto mismo, lo que permite acceder a sus propiedades y métodos. Al utilizar "this" dentro de un objeto, se hace referencia a todas las propiedades del objeto y se evita tener que utilizar nombres específicos de propiedades.

const userPerson = {
  name: "Daniel",
  lastName: "MrOX",
  age: 18,
  showFullName() {
    return this.name + " " + this.lastName;
  }, // esta basado en las propiedades que tiene el objeto
};

console.log(userPerson.showFullName());

const cuenta = {
  number: "1234512345",
  monto: 100,
  depositar() {
    this.monto = this.monto + 100;
  },
  retirar() {
    this.monto = this.monto - 200;
  },
};

cuenta.depositar(); // Suma 100
cuenta.depositar(); // Suma 100
cuenta.depositar(); // Suma 10

console.log(cuenta);

cuenta.retirar();
cuenta.retirar();
console.log(cuenta);

// Mediante el uso de métodos, estamos manipulando las propiedades de un objeto con el objetivo de alterar o modificar su comportamiento. Este enfoque nos permite obtener resultados precisos y personalizados de acuerdo con las necesidades específicas de cada situación.

/*Si estás interesado en mejorar tus habilidades en Programación Orientada a Objetos (POO) en JavaScript, te recomendamos que busques más información en la web. La POO es un paradigma de programación popular en JavaScript, y su dominio te permitirá escribir código más modular, escalable y fácil de mantener.

En la web encontrarás una gran cantidad de recursos que te ayudarán a profundizar en los conceptos clave de POO en JavaScript. Por ejemplo, puedes buscar tutoriales, videos y artículos que expliquen cómo definir clases, crear objetos, heredar propiedades y métodos, y aplicar conceptos de encapsulamiento y polimorfismo.

Además, hay comunidades en línea donde puedes hacer preguntas y compartir tus conocimientos con otros programadores que comparten tus intereses. Algunos lugares en los que podrías empezar son Stack Overflow, Reddit o GitHub.

Recuerda que la práctica es clave para mejorar tus habilidades en POO en JavaScript, así que intenta aplicar lo que aprendas en proyectos reales. Esto te ayudará a entender cómo funcionan los conceptos y a cómo aplicarlos en situaciones prácticas.

En resumen, si deseas mejorar tus habilidades en POO en JavaScript, busca más información en la web y practica. Con el tiempo y la práctica, podrás escribir código más eficiente, legible y fácil de mantener. ¡Buena suerte en tu viaje de aprendizaje!
*/

//---

/*
¡Felicidades a todos los estudiantes que han llegado hasta el final del curso de JavaScript! Han demostrado su dedicación y compromiso al aprender este lenguaje de programación tan poderoso y versátil. A medida que terminamos este curso, quiero recordarles que este es solo el comienzo de su viaje en el mundo de la programación.

Ahora que tienen una base sólida en JavaScript, les animo a seguir explorando y aprendiendo. Hay una gran cantidad de recursos disponibles en línea, desde tutoriales y videos hasta comunidades en línea donde pueden hacer preguntas y compartir sus conocimientos con otros programadores.

Recuerden que la práctica es clave para mejorar en programación, así que sigan trabajando en proyectos y desafíos que les ayuden a aplicar lo que han aprendido en el curso. ¡No tengan miedo de cometer errores, ya que son una parte normal del proceso de aprendizaje!

En resumen, el aprendizaje de JavaScript es una habilidad valiosa y en constante demanda en el mundo de la tecnología. Espero que este curso les haya proporcionado una base sólida para seguir explorando y aprendiendo más sobre este lenguaje y la programación en general. Les deseo mucho éxito en sus futuros proyectos y en su viaje como programadores. ¡Sigan aprendiendo y disfrutando del proceso!
*/

//---

// This => Repaso

// Objetos Literales en JavaScript

const reservacion = {
  nombre: "Daniel",
  apellido: "Flores",
  total: 500,
  pagado: false,
};

console.log(reservacion);

let persona89 = {
  nombreCompleto: "Daniel Flores",
  edad: 30,
  ciudadResidencia: "El Salvador",
  saludar: function () {
    console.log(
      `Hola, mi nombre es ${this.nombreCompleto} y tengo ${this.edad} años.`
    );
  },
};

persona89.saludar(); // Output: Hola, mi nombre es Juan Pérez y tengo 30 años.

let coche = {
  marca: "Ford",
  modelo: "Mustang",
  anioFabricacion: 2022,
  precioVenta: 50000,
  describir: function () {
    console.log(
      `Este es un ${this.marca} ${this.modelo} fabricado en ${this.anioFabricacion}. Se vende por $${this.precioVenta}.`
    );
  },
};

coche.describir(); // Output: Este es un Ford Mustang fabricado en 2022. Se vende por $50000.

let producto = {
  nombre: "Camiseta",
  talla: "M",
  color: "Rojo",
  precioVenta: 25.99,
  enStock: true,
  mostrarDetalles: function () {
    console.log(
      `Este es un/a ${this.nombre} de talla ${this.talla} y color ${
        this.color
      }. Se vende por $${this.precioVenta}. ${
        this.enStock
          ? "Está disponible en stock."
          : "Actualmente no está disponible."
      }`
    );
  },
};

producto.mostrarDetalles(); // Output: Este es un/a Camiseta de talla M y color Rojo. Se vende por $25.99. Está disponible en stock.

let estudio = {
  nombreCompleto: "Daniel Flores",
  edad: 18,
  lugarDeEstudio: "algun lugar de prestigio",
  casado: false,
  saludar: function () {
    console.log(
      `Hola me llamo ${this.nombreCompleto}, tengo ${this.edad} años y me gustaría estudiar en ${this.lugarDeEstudio}. `
    );
  },
};

estudio.saludar();

//-----

// Constructor => es un método reservado para crear clases en JavaScript. El constructor es una función especial que se utiliza para crear e inicializar un objeto creado a partir de una clase en particular.

function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

// Funcionamiento del código : se define una función constructora llamada Producto que toma tres parámetros: nombre, precio y disponible. Dentro de la función, se utiliza la palabra clave this para asignar los valores pasados como argumentos a las propiedades nombre, precio y disponible del objeto que se está creando con el operador new.

const producto99 = new Producto('Monitor Curvo de 49"', 900, true);
const producto100 = new Producto("Laptop", 800, false);

// Funcionamiento del código : se crean dos objetos producto99 y producto100 utilizando la función constructora Producto con diferentes valores para los parámetros nombre, precio y disponible. La sintaxis new Producto() crea una instancia de la clase Producto con las propiedades especificadas.

const producto101 = new Producto("Laptop", 900, false);
const producto102 = new Producto("Laptop", 1000, true);
const producto103 = new Producto("Laptop", 878, true);
const producto104 = new Producto("Laptop", 565, true);
const producto105 = new Producto("Laptop", 365, false);
const producto106 = new Producto("Laptop", 1256, true);

// Funcionamiento del código : se crean otras seis instancias de la clase Producto utilizando la función constructora Producto, con diferentes valores para las propiedades nombre, precio y disponible.

console.log(producto99);
console.log(producto100);
console.log(producto101);
console.log(producto102);
console.log(producto103);
console.log(producto104);
console.log(producto105);
console.log(producto106);

// Funcionamiento del código : Por último, se utilizan las funciones console.log() para registrar los valores de las propiedades nombre, precio y disponible de cada objeto creado en la consola.

//-----

// Prototypes

/*
Los prototipos en JavaScript son una forma de compartir funcionalidades entre objetos y no necesariamente están limitados a un solo objeto.

Los prototipos se utilizan para agregar métodos o propiedades a un objeto a través de su cadena de prototipos, permitiendo que otros objetos también hereden dichas funcionalidades. Por ejemplo, si tienes varios objetos Producto, puedes definir un método en el prototipo que se comparta entre todas las instancias de Producto, en lugar de tener que definirlo individualmente para cada objeto.

En otras palabras, las funciones que se definen en un prototipo pueden ser compartidas entre varias instancias de un objeto o incluso entre diferentes objetos.

En resumen, los prototipos en JavaScript permiten agregar funciones y propiedades compartidas entre objetos, lo que facilita la organización del código y la reutilización de funcionalidades.
*/

// Supongamos que vamos a crear una función que le dé formato al producto y también agregue el precio.

function Producto2000(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

const producto777 = new Producto2000("Camisa", 53);
const producto888 = new Producto2000("Gorra", 90);

function formatearProducto(producto) {
  return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}

console.log(formatearProducto(producto777));
console.log(formatearProducto(producto888));

// El problema que se plantea radica en la eventual creación de nuevos objetos en el futuro. En este sentido, si se genera un objeto adicional que requiere la aplicación de la función "formatearProducto", dicha función no podrá ser utilizada debido a que los argumentos y parámetros necesarios para el nuevo objeto difieren de aquellos empleados en el objeto inicial. Como consecuencia, se requerirá de una adaptación de la función para poder manejar de forma adecuada la información del nuevo objeto.

// Nota : Los prototipos en JavaScript son una forma de compartir funcionalidades entre objetos y no necesariamente están limitados a un solo objeto.

//----------

// Clases en JavaScrip

/*
Las clases son una forma de crear objetos en JavaScript. Las clases se introdujeron en ECMAScript 6, y se consideran una forma más elegante y fácil de usar para crear objetos en JavaScript en comparación con la antigua forma de usar funciones constructoras y prototipos.

Una clase en JavaScript se define utilizando la palabra clave class, seguida por el nombre de la clase. Por convención, los nombres de las clases suelen comenzar con una letra mayúscula. Dentro de la clase, podemos definir métodos y propiedades que pertenecen a la clase.
*/

class Coche {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  presentar() {
    console.log(
      `Este coche es un ${this.marca} ${this.modelo} del año ${this.año}.`
    );
  }
}
// En este ejemplo, estamos definiendo una clase llamada Coche que tiene tres propiedades: marca, modelo y año. También hemos definido un método llamado presentar que muestra una descripción del coche en la consola.

// Nota : Para crear un objeto a partir de una clase en JavaScript, utilizamos la palabra clave new, seguida del nombre de la clase y los argumentos que se pasan al constructor de la clase.

const miCoche = new Coche("Ford", "Mustang", 2022);
miCoche.presentar();
// Estamos creando un objeto llamado miCoche a partir de la clase Coche, y pasando los argumentos 'Ford', 'Mustang' y 2022 al constructor de la clase. Luego, estamos llamando al método presentar en miCoche, que muestra la descripción del coche en la consola.

class Gato {
  constructor(nombre, peso) {
    this.nombre = nombre;
    this.peso = peso;
  }
  formatearProducto() {
    return `El nombre del gato es ${this.nombre} y pesa ${this.peso}, son adorables no?`;
  }
}

const producto555 = new Gato("Max", 49);
const producto555_ = new Gato("Tina", 149);

console.log(producto555);
console.log(producto555.formatearProducto());

class TelefonoMovil {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  presentarTelefonoMovil() {
    console.log(
      `El siguiente teléfono movil de la marca ${this.marca}, modelo ${this.modelo} tiene un precio de ${this.precio} `
    );
  }
}

const miTelefono = new TelefonoMovil("Samsung", "S21", 800);

miTelefono.presentarTelefonoMovil(); // salida: El siguiente teléfono movil de la marca Samsung, modelo S21 tiene un precio de 800.

class TecladoMecanico {
  constructor(marca, modelo, precio, tipoInterruptor, iluminacionRGB) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.tipoInterruptor = tipoInterruptor;
    this.iluminacionRGB = iluminacionRGB;
  }

  presentarTecladoMecanico() {
    return `El siguiente teclado es de la marca ${this.marca} modelo ${this.modelo}, con un precio de: ${this.precio}. El ${this.tipoInterruptor} es el tipo de interruptor que posee el teclado ${this.modelo}. RGB : ${this.iluminacionRGB}`;
  }
}

const miTeclado = new TecladoMecanico(
  "Corsair",
  "K70 RGB MK.2",
  149.99,
  "Cherry MX Brown",
  true
);

console.log(miTeclado.presentarTecladoMecanico());

class Empleado {
  constructor(nombre, apellido, salario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
  }

  presentarEmpleado() {
    console.log(
      `Nombre del empleado: ${this.nombre}, apellido: ${this.apellido}, salario: ${this.salario} `
    );
  }
}

const empleado = new Empleado("Max", "Lee", 3000);

empleado.presentarEmpleado();

//-----

// Herencia

/*
La herencia en JavaScript permite a una clase (llamada "clase hija" o "subclase") extender o heredar las propiedades y métodos de otra clase (llamada "clase padre" o "superclase"). Esto significa que una subclase puede reutilizar el código de su superclase, ahorrando tiempo y esfuerzo en la programación.

Cuando se define una subclase que hereda de una superclase, la subclase tiene acceso a todas las propiedades y métodos públicos de la superclase. Los métodos privados no se heredan, pero los métodos protegidos se heredan y se pueden utilizar en la subclase. La subclase también puede agregar nuevas propiedades y métodos propios.
*/

// Definición de la clase Jefe
class Jefe {
  // Constructor de la clase, que recibe los parámetros nombre, salario y departamento
  constructor(nombre, salario, departamento) {
    // Establecimiento de las propiedades nombre, salario y departamento en el objeto Jefe
    this.nombre = nombre;
    this.salario = salario;
    this.departamento = departamento;
  }

  // Método que devuelve el valor de la propiedad nombre del objeto Jefe
  obtenerNombre() {
    return this.nombre;
  }

  // Método que devuelve el valor de la propiedad salario del objeto Jefe
  obtenerSalario() {
    return this.salario;
  }

  // Método que devuelve el valor de la propiedad departamento del objeto Jefe
  obtenerDepartamento() {
    return this.departamento;
  }

  // Método que imprime información sobre el objeto Jefe en la consola
  presentarJefe() {
    // Construcción de una cadena de texto que incluye el nombre, el departamento y el salario del Jefe
    console.log(
      `El jefe ${this.obtenerNombre()} trabaja en el departamento de ${this.obtenerDepartamento()} y tiene un salario de ${this.obtenerSalario()} dólares.`
    );
  }
}

// Ejemplo de uso de la clase Jefe
// Creación de una instancia de la clase Jefe con nombre, salario y departamento
const jefe1 = new Jefe("Juan Perez", 50000, "Ventas");
// Llamada al método presentarJefe de la instancia de la clase Jefe
jefe1.presentarJefe(); // El jefe Juan Perez trabaja en el departamento de Ventas y tiene un salario de 50000 dólares.

// Aplicación de la Herencia :

// Definición de la clase Empleado1 que hereda de la clase Jefe
class Empleado1 extends Jefe {
  // Constructor de la clase, que recibe los parámetros nombre, salario, departamento y rol
  constructor(nombre, salario, departamento, rol) {
    // Llamada al constructor de la clase Jefe con los mismos parámetros
    super(nombre, salario, departamento);
    // Establecimiento de la propiedad rol en el objeto Empleado
    this.rol = rol;
  }

  // Método que devuelve el valor de la propiedad rol del objeto Empleado
  obtenerRol() {
    return this.rol;
  }

  // Método que imprime información sobre el objeto Empleado en la consola
  presentarEmpleado() {
    // Construcción de una cadena de texto que incluye el nombre, el departamento, el rol y el salario del Empleado
    console.log(
      `El empleado ${this.obtenerNombre()} trabaja en el departamento de ${this.obtenerDepartamento()} como ${this.obtenerRol()} y tiene un salario de ${this.obtenerSalario()} dólares.`
    );
  }
}

// Ejemplo de uso de la clase Empleado
// Creación de una instancia de la clase Empleado con nombre, salario, departamento y rol
const empleado1 = new Empleado1("Ana Garcia", 30000, "Marketing", "Analista");
// Llamada al método presentarEmpleado de la instancia de la clase Empleado
empleado1.presentarEmpleado(); // El empleado Ana Garcia trabaja en el departamento de Marketing como Analista y tiene un salario de 30000 dólares.

//-

// Definición de la clase Alumno
class Alumno {
  constructor(nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
  }

  presentarAlumno() {
    console.log(
      `El alumno ${this.nombre} tiene ${this.edad} años y estudia ${this.carrera}.`
    );
  }
}

// Ejemplo de uso de la clase Alumno
const alumno1 = new Alumno("Daniel", 18, "Ingeniería");
alumno1.presentarAlumno(); // El alumno Daniel tiene 18 años y estudia Ingeniería.

class Instructor extends Alumno {
  constructor(nombre, edad, carrera, salario) {
    super(nombre, edad, carrera); // Llamada al constructor de la clase padre para inicializar las propiedades heredadas
    this.salario = salario; // Asignación de la propiedad adicional salario
  }

  presentarInstructor() {
    console.log(
      `El instructor ${this.nombre} tiene ${this.edad} años, estudia ${this.carrera} y gana un salario de ${this.salario} dólares.`
    );
  }
}

// Ejemplo de uso de la clase Instructor
const instructor1 = new Instructor("Pedro", 35, "Programación", 50000);
instructor1.presentarInstructor(); // El instructor Pedro tiene 35 años, estudia Programación y gana un salario de 50000 dólares.
