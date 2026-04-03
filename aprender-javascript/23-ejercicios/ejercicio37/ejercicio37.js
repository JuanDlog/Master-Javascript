/*
Ejercicio 38:

Valida el formulario del ejercicio anterior con JS, usando el dom
y la funciones / métodos que conoces.

El nombre y apellidos deben NO estar vacios.

La edad debe NO ser menor a 0 y debe siempre ser un número.
*/


const formulario = document.querySelector("#formulario");
const cajaInfo = document.querySelector(".info");


let nombre = document.querySelector("#nombre");
let apellidos = document.querySelector("#apellidos");
let edad = document.querySelector("#edad");


let infoNombre = document.querySelector("#info_nombre strong");
let infoApellidos = document.querySelector("#info_apellidos strong");
let infoEdad = document.querySelector("#info_edad strong");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    console.log("Formulario enviado!!");

    cajaInfo.style.display = "block";
    infoNombre.textContent = nombre.value;
    infoApellidos.textContent = apellidos.value;
    infoEdad.textContent = edad.value;

    console.log(nombre.value, apellidos.value, edad.value);


});


/* HECHO POR MI
const formulario = document.querySelector("#formulario");

let mostrarNombre = document.querySelector("#mostrar-nombre");
let mostrarApellidos = document.querySelector("#mostrar-apellidos");
let mostrarEdad = document.querySelector("#mostrar-edad");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellidos").value;
    let edad = document.querySelector("#edad").value;

    mostrarNombre.textContent = "Nombre: "+ nombre;
    mostrarApellidos.textContent = "Apellidos: "+ apellidos;
    mostrarEdad.textContent = "Edad: "+ edad;

});
*/