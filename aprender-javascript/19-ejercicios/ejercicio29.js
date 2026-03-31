/*

Ejercicio 29:

Crea una función que reciba una palabra y devuelva cuántas vocales contiene.
*/

function misVocales(palabra){

    const vocales = "aeiouAEIOU";

    let count = 0;

    for (let letra of palabra){
        
        if(vocales.includes(letra)){
            count++;
        }
    }

    return count;

}

console.log("El numero de vocales de mi palabra es: "+misVocales(prompt("Dime tu palabra y cuento las volcales")));



/* HECHO POR MI
function contador(palabra){

    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let numeroVocales = 0;

    for (contador of palabra){
        for (contador2 of vocales){
            if(contador2 == contador){
                numeroVocales += 1;
            }
        }
    }

    return numeroVocales;
}

palabraUsuario = prompt("Escribe una palabra y te dire cuantas vocales tiene.");

alert(`Tu palabra tiene ${contador(palabraUsuario)} vocales.`);
*/