/*
¡¡¡ SUPER EJERCICIO DE JAVASCRIPT !!!

Crea una aplicación web en la que puedas añadir, mostrar y eliminar
tus peliculas favoritas.

Cada peli que guardes debe tener:

- Título de la película
- Fecha de guardado
- Puntuación de popularidad (un valor aleatorio entre 1 y 100).

Las peliculas deben mantenerse guardadas aunque se recargue la página,
y se debe poder eliminar cualquiera de ellas de la lista en cualquier momento.

Tareas:
V - Ejercicio 39: Crea el formulario necesario
V - Ejercicio 40: Función para guardar peliculas con los datos necesarios
V - Ejercicio 41: Función para mostrar peliculas extraidas del LocalStorage
V - Ejercicio 42: Haz que las peliculas carguen automaticamente al abrir la web.
V - Ejercicio 43: Función para eliminar peliculas.

*/
function eliminar(indice){
    
    // Sacar el array de objetos del LocalStorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    // Eliminar peli del indice
    pelisGuardadas.splice(indice, 1);

    // Actualizar array del localstorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    // Mostrar listado
    mostrar();
}

function mostrar() {
    // Seleccionar la etiqueta del listado
    let listado = document.querySelector("#listado");
    listado.innerHTML = "";

    // Sacar las pelis del LocalStorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    // Si no hay pelis, mostar mensaje
    if (pelisGuardadas.lenght === 0) {
        listado.innerText = "No hay peliculas para mostrar"

        return false;
    }

    // Recorrer pelis y mostrar
    pelisGuardadas.forEach((pelicula, indice) => {

        const peliArtitle = document.createElement("article");

        peliArtitle.innerHTML = `
            <h3>${pelicula.titulo}</h3>
            <p>Fecha: ${pelicula.fecha}</p>
            <p>Popularidad: ${pelicula.popularidad}</p>
        `;

        // Crear boton y bindearle evento
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener("click", () => eliminar(indice));

        peliArtitle.appendChild(eliminarBtn);
        peliArtitle.appendChild(document.createElement("hr"));

        listado.appendChild(peliArtitle);

    });

}


function guardar() {

    // Seleccionar la caja de texto y sacar su valor
    let campoTitulo = document.querySelector("#titulo")
    let titulo = campoTitulo.value;

    if (titulo.trim() === "") {
        alert("Por favor, mete el titulo de la pelicula!!!!");

        return false
    }

    // Conseguir fecha actual
    const fecha = new Date();
    const fechaActual = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();


    // Generar un numero aleatorio para la popularidad
    let popularidad = Math.floor(Math.random() * 100) + 1;

    // Crear objeto pelicula
    let pelicula = {
        titulo,
        fecha: fechaActual,
        popularidad
    };

    // Sacar todas las peliculas (array de objetos)
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    if (!pelisGuardadas) {
        pelisGuardadas = [];
    }

    // Añadir al array la nueva peli
    pelisGuardadas.push(pelicula);

    // Guardar todo en el LocaStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    // Limpiar el campo de texto
    campoTitulo.value = "";

    // Mostrar las peliculas
    mostrar();

    // OPCIONAL
    return true;
}

window.addEventListener("load", () => {

    // Cargar todas las peliculas por defecto
    mostrar();

    // Aplicar evento a formulario para guardar
    let formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        guardar();

    });


});


