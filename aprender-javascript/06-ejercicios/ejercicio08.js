/*
Ejercicio 8

Tengo una heladeria y cada bola de helado vale 1.8 euros.

¿Cuanto cuestan las cucuruchos de 1, 2 y 3 bolas?

Ten en cuenta que el barquillo cuesta ciencuenta centimos de euros.
*/

let precioBola =1.8;

let precioBarquillo = 0.5;

let heladoUna = (precioBola * 1) + precioBarquillo;

let heladoDos = (precioBola * 2) + precioBarquillo;

let heladoTres = (precioBola * 3) + precioBarquillo;

console.log(`
    1. Cucurucho de una bola: ${heladoUna} euros
    2. Cucurucho de dos bolas: ${heladoDos} euros
    3. Cucurucho de tres bolas: ${heladoTres} euros
    `);


/*HECHO POR MI
let precioBola = 1.8;
let precioBarquillo = 0.50;

console.log(`
    Precios de Helado
    Cucurucho de 1 bola: ${precioBola * 1} € - Con cucurucho ${(precioBola * 1) + precioBarquillo} €
    Cucurucho de 2 bola: ${precioBola * 2} € - Con cucurucho ${(precioBola * 2) + precioBarquillo} €
    Cucurucho de 3 bola: ${precioBola * 3} € - Con cucurucho ${(precioBola * 3) + precioBarquillo} €
    `);

    */