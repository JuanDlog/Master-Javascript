/*
Ejercicio 24:

Crea un array con 10 números aleatorios del 1 al 100.
luego, pide al usuario que adivine un número.

Si acierta, muestra un mensaje de celebraición;
si no, muestra el número correcto.
*/


let numeros = [5, 65, 21, 15, 11, 85, 42, 51, 95, 39];

// let numerosDos = Array.from({ length: 10}, () => Math.floor(Math.random()*100)+1)

let elije = prompt("Adivina el número del 1 al 100");

if(numeros.includes(Number(elije))){
    alert("¡ENHORABUENA MACHO! Has adivinado el número")
} else {
    alert("¡QUE MALA SUERTE! No has acertado adivinado el número");
}


/* HECHO POR MI
let aleatorio = [5, 65, 21, 15, 64, 85, 42, 46, 95, 39];

do{

    var usuario = parseInt(prompt("Adivina un numero del 1 al 100", 0));


} while(isNaN(usuario));

let existe = aleatorio.includes(usuario);

if(existe == true){
    alert("!!FELICIDADES HAS ADIVINADO EL NUMERO!");
} else {
    alert("INTENTALO DE NUEVO");
}

*/