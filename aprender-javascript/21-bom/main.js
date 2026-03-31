// BOM - Browser Object Model

// Alertas y dialogos
// alert("¡Saludos Abuelita este curso lo estan viendo miles de personas!");

// prompt("¿Como se llama tu abuela?");

// confirm("¿Tu abuela tiene mas de 75 años?")


// Window

console.log(window);

console.log(window.innerWidth);

console.log(window.innerHeight);

console.log(window.outerWidth, window.outerHeight);

console.log(window.closed, window.document, window.navigator.userAgent);


/*
window.setInterval(() => {
    console.log("hola abuelita");
}, 1000);
*/

console.log(window.scrollX, window.scrollY);


// Navigator

console.log(navigator);

if(!navigator.onLine){
   // alert("¡OJO! Que no tienes internet, conectate al wifi mas cercano");
} else {
   // alert("Estas en linea");
}


// Location

console.log(location.href);
console.log(location.hostname);

// location.href = "https://victorroblesweb.es/ruta";


// History
// history.back();


// Screen

console.log(screen.width, screen.height);

// Ventanas emergentes o pop ups

let miWeb = window.open("https://victorroblesweb.es/ruta",
                         "Ruta de aprendizaje de desarrollo web",
                            "width=850, height=500, left=450, top=150");