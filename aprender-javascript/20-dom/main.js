// DOM - Document Object Model


// getElementByID - Seleccionar elementos por su ID

let caja = document.getElementById("caja");


// Modificar caracteristicas de un elemento seleccionado

caja.innerHTML = "<h2>HOLA SOY VICTOR</h2>";


/*
caja.style.background = "lightblue";
caja.style.maxWidth = "50%";
caja.style.margin = "0 auto";
caja.style.padding = "35px";
caja.style.textAlign = "center";
caja.style.fontFamily = "Arial";
*/

caja.classList.add("cajita");
caja.classList.add("cajaza");
caja.classList.add("cajon");

console.log(caja.className);

function cambiarColor(color, radius) {
    caja.style.background = color;
    caja.style.borderRadius = radius;
}

console.log(caja.innerText);

// getElementByClassName - Seleccionar multipes elementos con una sola clase

/*
let articulos = document.getElementsByClassName("articulo");

console.log(articulos);

for(let i = 0; i < articulos.length; i++ ){

    articulos[i].classList.add("articuloBase");

    // Añadir más HTML
    articulos[i].innerHTML += "<a href='https://victorroblesweb.es/ruta'>Leer màs</a>";


    // Añadir un nodo del dom
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://victorroblesweb.es");
    enlace.setAttribute("target", "_blank");
    enlace.style.color = "green";

    let textoEnlace = document.createTextNode("Sigue leyendo");

    enlace.append(textoEnlace);
    articulos[i].append(enlace);



    if(i === 0){
        articulos[i].classList.add("articuloAmarillo");
    }

    if(i === (articulos.length -1)){
        articulos[i].classList.add("articuloUltimo");

        articulos[i].innerHTML = "<h2>Sigue leyendo mas cosas en victorroblesweb.es</h2>";
    }

}
    */

// GetElementByTagName
let etiquetasArticulo = document.getElementsByTagName("article");

etiquetasArticulo[3].style.background = "green";

etiquetasArticulo[3].style.color = "white";

console.log(etiquetasArticulo[3].innerHTML);


// RECOMENDABLE: QuerySelector

let seccionArticulos = document.querySelector("#articulos");

// seccionArticulos.style.background = "lightblue";
seccionArticulos.style.padding = "40px";

seccionArticulos.innerHTML += "<h1>Articulos</h1>";

console.log(seccionArticulos);

// QuerySelector y clases

let primerArticulo = document.querySelector("section#articulos > .articulo");

primerArticulo.style.borderRadius = "50px";

console.log(primerArticulo);



// RECOMENDABLE: QuerySelectorALL

let articulos = document.querySelectorAll("#articulos article"); // Todos

articulos.forEach((articulo, i) => {

    articulo.classList.add("articuloBase");

    // Añadir más HTML
    articulo.innerHTML += "<a href='https://victorroblesweb.es/ruta'>Leer màs</a>";


    // Añadir un nodo del dom
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://victorroblesweb.es");
    enlace.setAttribute("target", "_blank");
    enlace.style.color = "green";

    let textoEnlace = document.createTextNode("Sigue leyendo");

    enlace.append(textoEnlace);
    articulo.append(enlace);



    if (i === 0) {
        articulo.classList.add("articuloAmarillo");
    }

    if (i === (articulos.length - 1)) {
        articulo.classList.add("articuloUltimo");

        articulo.innerHTML = "<h2>Sigue leyendo mas cosas en victorroblesweb.es</h2>";
    }

});


// Modificaciones

const tarjeta = document.querySelector("#tarjeta")

console.log(tarjeta);

tarjeta.textContent = "Contenido nuevo de mi tarjeta";

tarjeta.innerHTML = "<strong>Contenido en HTML de mi tarjeta</strong>";

tarjeta.setAttribute("data-id", 12);
// tarjeta.setAttribute("class", "hola que tal");

console.log(tarjeta.getAttribute("data-id"));

tarjeta.style.border = "1px solid blue";
tarjeta.style.background = "steelblue";
tarjeta.style.padding = "30px";

tarjeta.classList.add("destacar2");

tarjeta.classList.remove("destacar");

tarjeta.classList.remove("remarcado");

tarjeta.classList.toggle("small");



const titular = document.createElement("h2");

titular.textContent = "Esta es la tarjeta";

//tarjeta.appendChild(titular);

tarjeta.insertBefore(titular, tarjeta.firstChild);

// tarjeta.querySelector("strong").remove();



