/*
Ejercicio 14:

Un DJ no sabe que genero musical poner en la fiesta...

Preguntale al usuario que genero quiere (pop, rock, o rap)

Segun lo que prefiera devuelve un mensaje diferente.

*/

let genero = prompt("¿Que genero de musica prefieres? (rock, pop, rap)");

switch(genero){
    case "rock":
        alert("Está sonando Extremoduro, canción: La vereda de la puerta de atrás");
        break;
    
    case "pop":
        alert("Está sonando Abba, canción: Mamma mia");
        break;

    case "rap":
        alert("Está sonando Natos y Waor, canción: Sibarita");
        break;
    
    default:
        alert("No hay musica de la que quieres");
}



/* HECHO POR MI
do {
    let pregunta = prompt("¿Que genero quiere (Pop, Rock o Rap?");
    var finalizador = 0;

    if (pregunta == "Pop" || pregunta == "pop") {
        alert("TE ENCANTA MICHAEL JACKSON");
        finalizador = 1;
    } else if (pregunta == "Rock" || pregunta == "rock") {
        alert("VIVA EL ROCK JODER");
        finalizador = 1;
    } else if (pregunta == "Rap" || pregunta == "rap") {
        alert("QUE FLOOWW");
        finalizador = 1;
    }

} while (finalizador == 0);

*/