/*
Ejercicio 32:

Crea una lista de la compra en la que el usuario pueda añadir
nuevos productos para comprar con un campo de texto un botón.

Cada vez que se añade un producto, este aparece 
en la lista con un botón para eliminarlo.

El usuario podrá añadir tantos productos como quiera.
Cada producto añadidod tiene un botón para borrarlo de la lista.

*/

document.addEventListener("DOMContentLoaded", () => {

    // TODO EL PROGRAMA DE JS

    let nuevoProducto = document.querySelector("#nuevoProducto");
    let btnAgregar = document.querySelector("#agregar");
    let listaCompra = document.querySelector("#listaCompra");

    btnAgregar.addEventListener("click", () => {

        let productoParaAgregar = nuevoProducto.value.trim();

       if (productoParaAgregar){

        // Crea un elemento li
        const productoFinal = document.createElement("li");
        productoFinal.textContent = productoParaAgregar;

        // Crear un boton de eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Borrar";

        btnEliminar.addEventListener("click", () => {

            productoFinal.remove();

        });

        productoFinal.appendChild(btnEliminar);
        productoFinal.classList.add("producto");


        // Añade el li al ul
        listaCompra.appendChild(productoFinal);
        nuevoProducto.value = "";

       }
    });

});

/* HECHO POR MI

let formA = document.querySelector(".form");

formA.addEventListener("submit", (event) => {

    event.preventDefault();


    let textoAnadir = document.querySelector("#textoAnadir").value;
    let listaProductos = document.querySelector(".lista__productos");

    listaProductos.innerHTML += `<li class="producto">
                    <h3 class="producto__title">${textoAnadir}</h3>
                    <button class="producto__btn">X</button>
                </li>`


    console.log(textoAnadir);
});


let botonesX = document.querySelectorAll(".producto__btn");

botonesX.forEach(boton => {

    boton.addEventListener("click", () => {
        boton.closest(".producto").remove();
    });

});

*/