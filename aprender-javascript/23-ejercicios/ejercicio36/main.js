/*
Ejercicio 36:

Crea una caja de texto que cuente cuántas teclas ha pulsado
el usuario dentro de la caja.

Muestra el número de teclas pulsadas en tiempo real en la web.

*/

let contador = document.querySelector("#contador");
let cajaPulsaciones = document.querySelector("#pulsaciones");

let pulsacionesReales = 0;

contador.addEventListener("input", () => {

    //let texto = contador.value.length;
    pulsacionesReales++;

    cajaPulsaciones.textContent = `Pulsaciones: ${pulsacionesReales}`;

});

/*  HECHO POR MI
const clic = document.querySelector("#clic")

const texto = document.querySelector("#texto");

let contador = 0;

texto.addEventListener("keydown", (event) => {

    
    if(event.key){
        contador++
    }

    clic.textContent = contador;

});
*/