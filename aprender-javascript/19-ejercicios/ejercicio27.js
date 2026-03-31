/*

Ejercicio 27:

Crea un array de personajes de peliculas y
clasificalos en grupos (héroes, villanos, etc.).

Muestra un mensaje para cada grupo.

*/

const personajes = [
    "V:Joker", 
    "H:Batman", 
    "V:Duende Verde", 
    "H:Spiderman", 
    "V:Voldermort", 
    "H:Harry Potter", 
    "H:Frodo", 
    "V:Sauron"];

let heroes = personajes.filter(personaje => personaje.startsWith("H:"));
let villanos = personajes.filter(personaje => personaje.startsWith("V:"));

console.log("Heroes:");
heroes.forEach(heroe => {
    console.log(heroe.split(":")[1]);
})

console.log("-------------------------------------------")

console.log("Villanos:");
villanos.forEach(villano => {
    console.log(villano.slice(2));
})

/* HECHO POR MI
const personajes = [
    "V:Joker", 
    "H:Batman", 
    "V:Duende Verde", 
    "H:Spiderman", 
    "V:Voldermort", 
    "H:Harry Potter", 
    "H:Frodo", 
    "V:Sauron"];

let villanos = [];
let heroes = [];

for (i of personajes){

    if (i.includes("V:") == true){
        villanos.push(i);
    } else{
        heroes.push(i);
    }
}

console.log(heroes);
console.log(villanos);

*/