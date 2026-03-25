/*
Ejercicio 20:

En base al numero que nos de el usuario.

Decirle si es par o impar.

*/

let numero;

while(isNaN(numero)){
    numero = parseInt(prompt("Mete el numero para ver si es par o impar", 0));
}

if(numero % 2 == 0){
    alert("El numero "+ numero+ " es par");
} else{
    alert("El numero "+ numero+ " es impar");
}


/* HECHO POR MI
let pregunta = 0;

do{
    pregunta = parseInt(prompt("Escribe el numero y te dire si es impar o par:", 0));
    
} while(isNaN(pregunta))

if(pregunta%2 == 0){
    alert(`El numero ${pregunta} es PAR`);
} else{
    alert(`El numero ${pregunta} es IMPAR`)
}

*/