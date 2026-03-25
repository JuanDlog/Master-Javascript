/*
Ejercicio 12:

Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales

PLUS: Si los numeros no son un numero o son menores o iguales a cero,
nos los vuelva a pedir.

*/


let numero1 = parseInt(prompt("Mete el primer numero:", 0));
let numero2 = parseInt(prompt("Mete el segundo numero:", 0));


while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Mete el primer numero:", 0));
    numero2 = parseInt(prompt("Mete el segundo numero:", 0));
}

if (numero1 === numero2) {
    alert("Los numero son exactamente iguales");
} else if (numero1 > numero2) {
    alert("El numero mayor es el: " + numero1);
    alert("El numero menor es el: " + numero2);
} else if (numero1 < numero2) {
    alert("El numero mayor es el: " + numero2);
    alert("El numero menor es el: " + numero1);

} else{
    alert("No has metido bien los numeros !!");
}



/* HECHO POR MI
alert("PROGRAMA DE MENOR, MAYOR Y IGUAL")
alert("Se te pedira dos numero que colocaras cuando el programa te lo pida:")

let numero1 = prompt("Escribe el primer numero:");
let numero2 = prompt("Escribe el segundo numero:");


while (numero1 <= 0 || numero2 <= 0 || !parseInt(numero1) || !parseInt(numero2)) {
    alert("ESCRIBE SOLO NUMEROS MAYORES A 0")
    numero1 = parseInt(prompt("Escribe el primer numero:"));
    numero2 = parseInt(prompt("Escribe el segundo numero:"));
} 

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if (numero1 > numero2) {
    alert(`${numero1} es MAYOR a ${numero2}`);
} else if (numero2 > numero1) {
    alert(`${numero2} es MAYOR a ${numero1}`);
} else{
    alert(`${numero1} y ${numero2} son IGUALES`);
} 
    */