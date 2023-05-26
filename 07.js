// Operadores en JavaScript

/*
Los operadores de JavaScript son símbolos que se utilizan para realizar operaciones en los operandos. JavaScript tiene varios tipos de operadores, como operadores aritméticos, de asignación, de comparación, lógicos y de cadena. Los operadores aritméticos se utilizan para realizar operaciones matemáticas en los operandos numéricos. Los operadores de asignación se utilizan para asignar valores a las variables. Los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano. Los operadores lógicos se utilizan para realizar operaciones lógicas en los operandos booleanos. Los operadores de cadena se utilizan para concatenar cadenas. El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos y se utiliza con frecuencia como atajo para la instrucción if

---

Operadores aritméticos: se utilizan para realizar operaciones matemáticas básicas, como suma, resta, multiplicación y división. Algunos ejemplos de operadores aritméticos son:

→ + (suma)

→ - (resta)

→ * (multiplicación)

→ / (división)

→ % (módulo)

---

Operadores de asignación: se utilizan para asignar un valor a una variable. Algunos ejemplos de operadores de asignación son:

→ = (asignación)

→ += (suma y asignación)

→ -= (resta y asignación)

→ *= (multiplicación y asignación)

→ /= (división y asignación) 

→ %= (módulo y asignación)

---

Operadores de comparación: se utilizan para comparar dos valores y evaluar si son iguales, diferentes, mayores o menores que otros valores. Algunos ejemplos de operadores de comparación son:

→ == (igualdad) : evalúa si dos valores son iguales, sin tener en cuenta su tipo de dato. Se recomienda no utilizar este tipo de operador ya que puede provocar errores en nuestro código.

→ != (desigualdad) : evalúa si dos valores son diferentes, sin tener en cuenta su tipo de dato. Se recomienda no utilizar este tipo de operador ya que puede provocar errores en nuestro código.

→ === (igualdad estricta) : evalúa si dos valores son idénticos, tanto en valor como en tipo de dato.

→ !== (desigualdad estricta) : evalúa si dos valores son diferentes, teniendo en cuenta su tipo de dato.

→ < (menor que)

→ > (mayor que)

→ <= (menor o igual que)

→ >= (mayor o igual que)

---

Operadores lógicos: se utilizan para realizar operaciones lógicas en valores booleanos (verdadero o falso). Algunos ejemplos de operadores lógicos son:

→ && (AND lógico) : este operador se evalúa como "true" si ambos operandos son "true".

→ || (OR lógico) : ste operador se evalúa como "true" si al menos uno de los operandos es "true".

→ ! (NOT lógico) : este operador invierte el valor de un operando booleano. Si el operando es "true", se evaluará como "false"; si el operando es "false", se evaluará como "true".

---

Operadores de concatenación: se utilizan para unir dos o más cadenas de texto en una sola cadena. El operador de concatenación en JavaScript es +.

--- 

Operadores ternarios: se utilizan para evaluar una expresión y devolver un valor diferente según si la expresión es verdadera o falsa. El operador ternario en JavaScript es ? :.
*/

console.log("---");
console.log("---Operdadores Aritméticos---");

const operdadores_aritméticos = {
  suma: "+",
  resta: "-",
  multiplicación: "*",
  división: "/",
  módulo: "%",
};

console.table(operdadores_aritméticos);
console.log("---");

//---

console.log("---Operdadores de asignación---");
const operdadores_de_asignación = {
  asignación: "=",
  suma_y_asignación: "+=",
  resta_y_asignación: "-=",
  multiplicación_y_asignación: "*=",
  división_y_asignación: "/=",
  módulo_y_asignación: "%=",
};

console.table(operdadores_de_asignación);
console.log("---");

// ---

console.log("---Operadores de comparación---");
const operadores_de_comparación = {
  igualdad: "==",
  desigualdad: "!=",
  igualdad_estricta: "===",
  desigualdad_estricta: "!==",
  menor_que: "<",
  mayor_que: ">",
  menor_igual_que: "<=",
  mayor_igual_que: ">=",
};

console.table(operadores_de_comparación);
console.log("---");

// ---

console.log("---Operadores lógicos---");
const operadores_lógicos = {
  AND_lógico: "&&",
  OR_lógico: "||",
  NOT_lógico: "!",
};

console.table(operadores_lógicos);
console.log("---");

//--------------------

//Aplicación de los booleanos y operadores de comparación.

console.log("---'=='---");

let ejemplo0 = 5 == "5";
console.log(ejemplo0);
console.log(typeof ejemplo0);

let ejemplo1 = 6 == "7";
console.log(ejemplo1);
console.log(typeof ejemplo1);

/*
let ejemplo2 = "Alucard" == Alucard; // Se declara una variable llamada ejemplo2, que utiliza el operador de comparación '==' para comparar el string "Alucard" con la variable 'Alucard' (que no ha sido declarada anteriormente).
// Como 'Alucard' no ha sido declarada, se interpreta como un identificador (nombre de variable) y se produce un error en tiempo de ejecución. 

console.log(ejemplo2); // Se utiliza el método console.log() para imprimir el valor de la variable 'ejemplo2' en la consola del navegador o del entorno de ejecución.
// Como se produjo un error en la línea anterior, este código no se ejecutará. 
*/

let ejemplo_2 = "Alucard" == "Alucard";
console.log(ejemplo_2);
console.log(typeof ejemplo_2);

let ejemplo3 = 66;
console.log(ejemplo3);
console.log(typeof ejemplo3);

let ejemplo4 = 66 == ejemplo3;
console.log(ejemplo4);
console.log(typeof ejemplo4);

let ejemplo5 = 99;
console.log(ejemplo5);
console.log(typeof ejemplo5);

let ejemplo6 = 100 == ejemplo5;
console.log(ejemplo6);
console.log(typeof ejemplo6);

let ejemplo7 = "MrOX";
console.log(ejemplo7);
console.log(typeof ejemplo7);

let ejemplo8 = "MrOX" == ejemplo7;
console.log(ejemplo8);
console.log(typeof ejemplo8);

let ejemplo9 = "Rei";
console.log(ejemplo9);
console.log(typeof ejemplo9);

let ejemplo10 = "Tanya" == ejemplo9;
console.log(ejemplo10);
console.log(typeof ejemplo10);

console.log("---");

// ---

console.log("---'==='---");

let ejemploA = 5 === "5";
console.log(ejemploA);
console.log(typeof ejemploA);

let ejemploB = 5 === "6";
console.log(ejemploB);
console.log(typeof ejemploB);

let ejemploC = 5 === 5;
console.log(ejemploC);
console.log(typeof ejemploC);

let ejemploD = 99 === 100;
console.log(ejemploD);
console.log(typeof ejemploD);

let ejemploE = "MrOX" === "MrOX";
console.log(ejemploE);
console.log(typeof ejemploE);

let ejemploF = "Rei" === "MrOX";
console.log(ejemploF);
console.log(typeof ejemploF);

let ejemploG = 18;
console.log(ejemploG);
console.log(typeof ejemploG);

let ejemploG_ = 18 === ejemploG;
console.log(ejemploG_);
console.log(typeof ejemploG_);

let ejemploH = 99;
console.log(ejemploH);
console.log(typeof ejemploH);

let ejemploH_ = 100 === ejemploH;
console.log(ejemploH_);
console.log(typeof ejemploH_);

console.log("---");

// ---

console.log("---!=---");

let ejemplo1_ = 10 != "10";
console.log(ejemplo1_);
console.log(typeof ejemplo1_);

let ejemplo2_ = 10 != "15";
console.log(ejemplo2_);
console.log(typeof ejemplo2_);

let ejemplo3_ = 10 != 10;
console.log(ejemplo3_);
console.log(typeof ejemplo3_);

let ejemplo4_ = 10 != 15;
console.log(ejemplo4_);
console.log(typeof ejemplo4_);

let ejemplo5_ = "MrOX" != "MrOX";
console.log(ejemplo5_);
console.log(typeof ejemplo5_);

let ejemplo6_ = "MrOX" != "Ayanami";
console.log(ejemplo6_);
console.log(typeof ejemplo6_);

let ejemplo7_ = 99;
console.log(ejemplo7_);
console.log(typeof ejemplo7_);

let ejemplo8_ = 99 != ejemplo7_;
console.log(ejemplo8_);
console.log(typeof ejemplo8_);

let ejemplo9_ = 500;
console.log(ejemplo9_);
console.log(typeof ejemplo9_);

let ejemplo10_ = 1000 != ejemplo9_;
console.log(ejemplo10_);
console.log(typeof ejemplo10_);

let ejemplo11_ = "MrOX";
console.log(ejemplo11_);
console.log(typeof ejemplo11_);

let ejemplo12_ = "MrOX" != ejemplo11_;
console.log(ejemplo12_);
console.log(typeof ejemplo12_);

let ejemplo13_ = "Rei";
console.log(ejemplo13_);
console.log(typeof ejemplo13_);

let ejemplo14_ = "Ayanami" != ejemplo13_;
console.log(ejemplo14_);
console.log(typeof ejemplo14_);

console.log("---");

// ---

console.log("---!==---");

let ejemploA_ = 15 !== "15";
console.log(ejemploA_);
console.log(typeof ejemploA_);

let ejemploB_ = 15 !== 15;
console.log(ejemploB_);
console.log(typeof ejemploB_);

let ejemploC_ = 10 !== "15";
console.log(ejemploC_);
console.log(typeof ejemploC_);

let ejemploD_ = 20 !== 30;
console.log(ejemploD_);
console.log(typeof ejemploD_);

let ejemploE_ = "Ikari" !== "Ikari";
console.log(ejemploE_);
console.log(typeof ejemploE_);

let ejemploF_ = "Misato" !== "Rias";
console.log(ejemploF_);
console.log(typeof ejemploF_);

let ej1 = 18;
console.log(ej1);
console.log(typeof ej1);

let ej1_ = 18 !== ej1;
console.log(ej1_);
console.log(typeof ej1_);

let ej2 = 99;
console.log(ej2);
console.log(typeof ej2);

let ej2_ = 100 !== ej2;
console.log(ej2_);
console.log(typeof ej2_);

let ej3 = "Itadori";
console.log(ej3);
console.log(typeof ej3);

let ej3_ = "Itadori" !== ej3;
console.log(ej3_);
console.log(typeof ej3_);

let ej4 = "Nobara";
console.log(ej4);
console.log(typeof ej4);

let ej4_ = "Megumi" !== ej4;
console.log(ej4_);
console.log(typeof ej4_);

console.log("---");

//--------------------

//Operadores Lógicos

console.log("---&&---");

let ejemplo000 = 5 === 5 && 5 === 5;
console.log(ejemplo000);
console.log(typeof ejemplo000);

let ejemplo111 = 5 === 5 && 5 === 5 && "MrOX" === "MrOX";
console.log(ejemplo111);
console.log(typeof ejemplo111);

let ejemplo222 = 5 === 6 && 99 === 100;
console.log(ejemplo222);
console.log(typeof ejemplo222);

let ejemplo333 = "10" === 10 && 15 === "30";
console.log(ejemplo333);
console.log(typeof ejemplo333);

let ejemplo444 = "Pesa" === "Caminadora" && "Perro" === "Gato";
console.log(ejemplo444);
console.log(typeof ejemplo444);

let ejemplo555 =
  "Tanya" === "Tanya" &&
  "von" === "von" &&
  "Degurechaff" === "Degurechaff" &&
  16 === 16 &&
  "203ra Fuerza Aérea de Hechicería Táctica del Imperio" ===
    "203ra Fuerza Aérea de Hechicería Táctica del Imperio";
console.log(ejemplo555);
console.log(typeof ejemplo555);

let ejemplo666 = "Rei Ayanami" === "EVA" && "Shinji" === "Gendo" && 14 === 40;
console.log(ejemplo666);
console.log(typeof ejemplo666);

let ejemplo777 =
  true !== true &&
  18 !== 18 &&
  20 === 20 &&
  !true === false &&
  !"MrOX" === "MrOX" &&
  !18 === 18 &&
  100 !== 100;
console.log(ejemplo777);
console.log(typeof ejemplo777);

let ejemplo888 = !false === true && !"EVA" !== "EVA" && 18 === 18 && !50 !== 49;
console.log(ejemplo888);
console.log(typeof ejemplo888);
console.log("---");

// ---

console.log("---||---");

let ejemplo111_ = 18 === "18" || 18 === 18;
console.log(ejemplo111_);
console.log(typeof ejemplo111_);

let ejemplo222_ = 18 === 19 || !false !== true;
console.log(ejemplo222_);
console.log(typeof ejemplo222_);

let ejemplo333_ = true === false || false === false;
console.log(ejemplo333_);
console.log(typeof ejemplo333_);
