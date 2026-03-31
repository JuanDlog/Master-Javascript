/*
Ejercicio 25:

Crea un array de ingredientes para una receta absurda
(como una pizza con chocolate y piña)

Muestra la receta completa en una frase divertida
*/

const ingredientes = ["masa", "chocolate", "queso", "piña", "jamon", "oregano"];

let frase = `Receta absurda: Pizza de ${ingredientes.join(", ")} ¡Umm que rica delicius!`;

document.write("<h1>"+frase+"</h1>");


/* HECHO POR MI
let ingredientes = ["arepa", "mayonesa", "fresa", "miel", "nata", "huevo", " lulo"];

alert(`Vamos hacer una ${ingredientes[0]} de postre, primero mezclamos la ${ingredientes[1]} y la ${ingredientes[3]} cuando este espeso
hechamos el ${ingredientes[5]} y mezclamos muy bien, por otra parte licuraemos el ${ingredientes[6]} con la ${ingredientes[2]},
ahora colocamos la ${ingredientes[0]} en un plato y por encima colocamos la ${ingredientes[3]} y demas que hemos preparado.`);
*/