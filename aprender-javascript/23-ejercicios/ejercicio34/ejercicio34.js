/*
Ejercicio 34:

Crea un programa que abra una nueva ventana con una web,
pero en diferentes tamaños.

Haz que el usuario pueda elegir entre tres tamaños (pequeño, mediano y grande).

*/

let pequena = document.querySelector("#pequena");
let mediana = document.querySelector("#mediana");
let grande = document.querySelector("#grande");

let ventana = (anchura, altura) => {
    window.open("https://victorroblesweb.es/ruta", "_blank", `width=${anchura}, height=${altura}`);

    return true;
}

pequena.addEventListener("click", () => {

    ventana(450, 350);
});

mediana.addEventListener("click", () => {

    ventana(650, 550);
});


grande.addEventListener("click", () => {

    ventana(850, 750);
});




/* HECHO POR MI
let pequeno = document.querySelector("#btnPequeno");
let mediano = document.querySelector("#btnMediano");
let grande = document.querySelector("#btnGrande");

pequeno.addEventListener("click", () => {

    window.open("https://google.com", "Ventana Pequeña", "width=300, height=400");

});

mediano.addEventListener("click", () => {

    window.open("https://google.com", "Ventana Mediana", "width=700, height=700;");

});


grande.addEventListener("click", () => {

    window.open("https://google.com", "Ventana Grande", "width=1300, height=1400");

});
*/