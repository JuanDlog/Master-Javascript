/*
Ejercicio 13:

Tengo un kanguro que salta 3 metros cada vez.

Haz un programa que me diga cuantos saltos ha dado el kanguro...

y cual es la distancia total recorrida tras 17 saltos.

*/

let distanciaSalto = 3;
let saltos = 17;

let distanciaRecorrida = 0;

for (let contador = 1; contador <= saltos; contador++) {

    distanciaRecorrida += distanciaSalto;

    console.log("El canguro Loco ha saltado de momento " + contador +
        " saltos, y ha recorrido por ahora " + distanciaRecorrida + " metros.");

}


/* HECHO POR MI
do{

var saltosKanguro = parseInt(prompt("Cuantos saltos ha dado el kanguro?", 0));

} while(isNaN(saltosKanguro) || saltosKanguro <= 0)

alert(`El kanguro ha hecho ${saltosKanguro} saltos y a recorrido una distancia de ${saltosKanguro*3} metros`);
*/