/*
Ejercicio 26:

Dado un array de palabras, cuenta cuántas Letras tiene cada palabra
y crea un nuevo array que contenga solo eso números.

*/

function cuentaLetras(datos){

    let nuevosDatos = datos.map(elemento => elemento.length);
    
    return nuevosDatos;
}

const frutas = ["naranja", "manzana", "sandia", "cereza"];

const luchadores = ["Jhon Cena", "Batista", "Axion", "Undertaker", "Bron Breakker"];

console.log(cuentaLetras(luchadores));


/* HECHO POR MI

let palabras = ["perro", "esponja", "papas", "lechuga", "mouse"];

let numeroLetras = [];

for (let i of palabras){
    
    let arrayTemporal = Array.from(i);

    numeroLetras.push(arrayTemporal.length);
}

console.log(numeroLetras);

*/