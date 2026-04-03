/*
Ejercicio 33:

Crea un programa donde tengas un botón que cuente cuántas 
veces lo has pulsado.

Cuando llegues a 17 clics, se muestra un mensaje de "¡Limite alcanzado".

Si se sobrepasa, el contador se resetea y el contador comienza de nuevo.

*/

let contador = 0;

let numero = document.querySelector("#numeroClicks");
let boton = document.querySelector("#cuentaClicks");

boton.addEventListener("click", () => {

    contador++;

    if (contador === 17) {
        numero.textContent = "¡LIMITE ALCANZANDO!"
        contador = 0;

    } else {
        numero.textContent = contador + " clics";
    }
});



/* HECHO POR MI
let click = document.querySelector("#botonClick");
let contador = 0;

click.addEventListener("click", () => {

    contador++;
    console.log(contador);

    if(contador >= 17){
        alert("¡Limite alcanzado!");

        contador = 0;
    };

});
*/