/*
Ejercicio 31:

Crea un semáforo con tres luces (rojo, amarillo y verde)
Haz los circulo del semaforo con HTML y CSS.

Cuando un peaton quiere cruzar la calle debe pulsar el botón.
Crea un botón para cambiar el color de las luces del semáforo
secuencialmente (de rojo a verde, pasando por amarillo).

Entonces, 
El semáforo siempre empieza en rojo.
Cuando haces click en el botón, pasará a amarillo.
Al hacer click otra vez, pasa a verde, y así todo el rato.

*/


let boton = document.querySelector("#btnSemaforo");
let luces = document.querySelectorAll(".luz");
let indice = 0;

boton.addEventListener("click", () => {

    // Retirar las luces activas
    luces.forEach(luz => luz.classList.remove("activa"));

    // Encender una luz
    luces[indice].classList.add("activa");

    // Cambiar el indice para la siguiente luz
    indice++;

    if(indice > 2){
        indice = 0;
    }

    console.log(indice);

});




/* HECHO POR MI
let btnPeaton = document.querySelector("#btnPeaton");

let btnCambio = document.querySelector("#btnCambio");

let semaforoRojo = document.querySelector("#semaforoRojo");

let semaforoAmarillo = document.querySelector("#semaforoAmarillo");

let semaforoVerde = document.querySelector("#semaforoVerde");

btnPeaton.addEventListener("click", () => {

    semaforoVerde.style.background = "gray";
    semaforoAmarillo.style.background = "yellow";

    setInterval( () => {
        semaforoRojo.style.background = "red";
        semaforoAmarillo.style.background = "gray";
    }, 2000);

});

*/




