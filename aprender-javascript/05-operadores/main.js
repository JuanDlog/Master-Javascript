// Operadores Artimeticos (matematicas)
let numero1 = 12;
let numero2 = 44;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multi = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** 2;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multi);
console.log("División: " + division);
console.log("Resto: " + resto);
console.log("Potencia: " + potencia);

// Asignación
let numerito = 17;

// numerito = 17 + 3; // me da 20

numerito += 3;

console.log("Numerito: " + numerito);

// Comparación

let numerazo = 31;

console.log(numerazo == "31");

console.log(numerazo === "31");

console.log(numerazo != "31");

console.log(numerazo !== "31");

console.log(numerazo > 55);

console.log(numerazo < 55);

console.log(numerazo >= 31);

console.log(numerazo <= 30);

// Logicos

let esMayorDeEdad = false;
let tieneEntrada = true;

console.log(esMayorDeEdad && tieneEntrada);

console.log(esMayorDeEdad || tieneEntrada);

console.log(!esMayorDeEdad);

// Cadena

let mensaje1 = "hola";
let mensaje2 = "que tal?";

let mensaje_total = mensaje1 + " " + mensaje2;

mensaje_total += " Soy Victor Robles WEB"

console.log(mensaje_total);


// Incremento y decremento

let cifra = 1200;

// cifra = 1200 + 1;

// cifra = cifra + 1;

cifra++;
cifra++;
cifra++;
cifra++;
cifra++;
cifra++;

cifra--;
cifra--;
cifra--;


console.warn(cifra)