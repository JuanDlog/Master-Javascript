/*
Ejercico 10

El otro día fui con mi amigo Pepe y Manolo a un restaurante de smash burgers.

Yo me comí 2, pepe se comió 3 y Manolo, como es culturista, se comio 6.

¿Cuantas hamburguesas nos comimos en total?

Y... ¿Es cierto que yo comí menos que pepe?

Responde a estas dos preguntas devolviendo el resultado en la consola del navegador.
*/

let victor = 2;
let pepe = 3;
let manolo = 6;

let totalBurgers = victor + pepe + manolo;

let esCierto = victor < pepe;

console.log("El total de hamburguesas smash fue de: "+totalBurgers);
console.log("¿Es cierto que victor comio menos que pepe?: "+esCierto);


/* HECHO POR MI
let pepe = 3;
let manolo = 6;
let yo = 2;

let totalHamburguesas = pepe + manolo + yo;
let boleanoPepe = yo < pepe;

console.log(`
    Las hamburguesas comidas en total fueron: ${totalHamburguesas} hamburguesas
    Y la respuesta de que si comistes menos que pepe es: ${boleanoPepe} `);
    */