/*
Ejercicio 15:

Muestra la suma y la media de los numeros introducidos
hasta introducir un numero negativo ahí mostrar el resultado.

*/

let suma = 0;
let numero = 0;
let ejecuciones = 0;


do{

    numero = parseInt(prompt("Dime numeros hasta que metas uno negativo,", 0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma += numero;
        //suma = suma + numero;
        ejecuciones++
    }


} while(numero >= 0);

alert("La suma de los numeros es: "+suma);
alert("La media de los numeros es: "+(suma/ejecuciones));
/* HECHO POR MI
let sumaNumeros = 0;


for (var contador = 0; contador >= 0; contador++) {

    do {
        var numero = parseInt(prompt("Escribe los numeros uno por uno (para al usar un numero negativo):"));
    } while (isNaN(numero));
    
    if (numero < 0) {
        break;
    }
    sumaNumeros += numero;
}

if (contador == 0) {
    alert("NO SE HA SUMADO NINGUN NUMERO");
} else {
    alert(`Suma: ${sumaNumeros}
Media: ${sumaNumeros / contador}`);
}

*/