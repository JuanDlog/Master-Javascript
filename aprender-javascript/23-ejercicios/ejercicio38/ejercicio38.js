/*
Ejercicio 37:
    1. Crea un formulario con estos campos: Nombre, Apellidos y edad
    2. Añade un botón de enviar y usa el evento submit
    3. Muestra los datos por pantalla cuando se termine de enviar el form
*/


const formulario = document.querySelector("#formulario");
const cajaInfo = document.querySelector(".info");


let nombre = document.querySelector("#nombre");
let apellidos = document.querySelector("#apellidos");
let edad = document.querySelector("#edad");


let infoNombre = document.querySelector("#info_nombre strong");
let infoApellidos = document.querySelector("#info_apellidos strong");
let infoEdad = document.querySelector("#info_edad strong");

let errorNombre = document.querySelector("#error__nombre");
let errorApellidos = document.querySelector("#error__apellidos");
let errorEdad = document.querySelector("#error__edad");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    // Validar el nombre
    if (nombre.value.trim() == null || nombre.value.trim().length == 0) {

        let mensaje = "El nombre no es valido!!";

        alert(mensaje);
        errorNombre.textContent = mensaje;

        return false;
    } else {
        errorNombre.style.display = "none";
    }

    // Validar apellidos

    if (apellidos.value.trim() == null || apellidos.value.trim().length == 0) {

        let mensaje = "El apellido no es valido!!";

        alert(mensaje);
        errorApellidos.textContent = mensaje;

        return false;
    } else {
        errorApellidos.style.display = "none";
    }

    // Validar edad
    let miEdad = parseInt(edad.value);
    if (miEdad == null || miEdad<= 0 || isNaN(miEdad)) {

        let mensaje = "La edad no es valida!!";

        alert(mensaje);
        errorEdad.textContent = mensaje;

        return false;
    } else {
        errorEdad.style.display = "none";
    }


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