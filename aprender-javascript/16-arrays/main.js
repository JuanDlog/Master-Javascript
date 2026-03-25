// Array, matrices, arreglos

let nombre = "Victor Robles";

let nombres = ["Víctor Robles", "Juan", "Pepe", "Manolillo", "José"];
//                  0             1       2         3          4

let peliculas = new Array("Iron Man", "Gran Torino", "Mamma mía");

console.log(nombres);
console.log(nombres.length);

console.log(peliculas);
console.log(peliculas.length);


// Acceder a los elementos

console.log(nombres[3]);
console.log(nombres[0]);


// Modificar elemento array

nombres[3] = "Manuel";
nombres[0] = "Victor Robles WEB";

console.log(nombres);


// Practica

let elemento = parseInt(prompt("¿Que usuario quieres (del array)?", 0));

if(elemento >= nombres.length){
    alert("Upps!! ese usuario en concreto no existe, elige otro!!");
} else {
    alert("Bieeeen!! el usuario seleccionado es ".concat(nombres[elemento]));
};