// Eventos





/*******EVENTOS DE RATON******* */

// CLICK

let botoncito = document.querySelector("#botoncito");

botoncito.addEventListener("click", (event) => {

    alert("Has dado click al botoncito !!!");

    console.log(event.clientX);

})


// Doble click

let botonDoble = document.querySelector("#botonDoble");

botonDoble.addEventListener("dblclick", () => {

    alert("Has dado dos clicks :)");
});


// Mouse Over
let cajaTexto = document.querySelector("#cajaTexto");

cajaTexto.addEventListener("mouseover", () => {

    console.log("Has pasado por encima de la textarea");

});

cajaTexto.addEventListener("mouseout", () => {

    console.warn("Has salido de la caja de texto !!!");

});

cajaTexto.addEventListener("mousemove", () => {

    console.error("Te estas moviendo dentro de la textarea :)");
});


// Eventos de teclado

let campoTexto = document.querySelector("#campoTexto");

campoTexto.addEventListener("keydown", (event) => {

    console.log("Has presionado la tecla: " + event.key);

});

campoTexto.addEventListener("keyup", (event) => {

    console.warn("Has soltado la tecla: " + event.key);

});


/*
campoTexto.addEventListener("keypress", (event) => {

    console.error("Mantienes pulsada la tecla: "+event.key);

});
*/


// Eventos de formulario

let superFormulario = document.querySelector("#superFormulario");

superFormulario.addEventListener("submit", (event) => {

    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#email").value;
    let genero = document.querySelector("#genero").value;

    alert(nombre);
    alert(correo);
    alert(genero);

});


let inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", () => {

    console.log("El usuario ha escrito: " + inputNombre.value);

});


let selectGenero = document.querySelector("#genero");

selectGenero.addEventListener("change", function () {
    console.warn("Has cambiado el select a: " + this.value);
});


let campoEmail = document.querySelector("#email");

campoEmail.addEventListener("focus", () => {

    console.log("Acabas de entrar al campo de email OJITO");

    campoEmail.style.border = "2px solid blue";
    campoEmail.style.outline = "none";
    campoEmail.style.borderRadius = "5px";

});

campoEmail.addEventListener("blur", () => {

    console.warn("HAS SALIDO DEL FOCO!!!");

    campoEmail.style.border = "2px solid gray";
    campoEmail.style.borderRadius = "30px";

});

// EVentos del documento y la ventana

document.addEventListener("DOMContentLoaded", () => {

    // Aqui hago todo mi codigo de JS

    console.log("TODO EL DOM ESTA CARGADO !!");

});

window.addEventListener("load", () => {
    console.warn("Toda la web está cargada, incluidos los recursos!!!");
});


window.addEventListener("resize", () => {

    console.error("Ventana redimensionada!!! " + window.innerWidth + " " + window.innerHeight);

}
);

window.addEventListener("scroll", () => {

    console.log("Estas en el pixel "+Math.round(window.scrollY)+" del scroll de la web");

});


// EVentos del portapapeles

let portapapeles = document.querySelector("#portapapeles");

portapapeles.addEventListener("copy", () => {

    alert("Ey ey no copies, esta prohibido!!");

    navigator.clipboard.writeText(""); // Vaciar lo copiado

});

portapapeles.addEventListener("paste", () => {

    alert("Has pegado un texto en el input!!!");

});

portapapeles.addEventListener("cut", () => {

    alert("Has CORTADO el texto para llevartelo a saber donde!!");

});


portapapeles.addEventListener("contextmenu", (event) => {

    event.preventDefault();

    console.warn("El usuario ha abierto el menu contextual");

});


// Dejar de escuchar eventos

let botoncito2 = document.querySelector("#botoncito2");

function alertita(){

    alert("Has dado click al botoncito2 !!!!");

}

botoncito2.addEventListener("click", alertita)


setTimeout(() => {
    botoncito2.removeEventListener("click", alertita);

    alert("¡YA NO PUEDES USAR EL BOTONCITO2!");
}, 10000);


// Propagacion de eventos

let cajaPadre = document.querySelector("#cajaPadre");
let botonHijo = document.querySelector("#botonHijo");

cajaPadre.addEventListener("click", () => {

    alert("¡Has tocado el elemento PADRE")
});

botonHijo.addEventListener("click", (event) => {

    event.stopPropagation();

    alert("¡Has tocado el elemento HIJO")
});