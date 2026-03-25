// Funciones anonimas
// Es una funcion "sin nombre"

const saludo = function(nombre = ""){
    console.log("!Hola Abuela "+nombre+" que tasl estas!");
};

saludo();


// Funciones de callback
// Se pasan como parametro de otra funcion, para que la otra funcion las ejecute



let veces = 0;

setTimeout(function(){
    veces++;
    console.log("Se ha ejecutado el timeout "+veces+" veces")
}, 1000);


// setInterval(saludo, 1000);


// Funciones de Callback "avanzadas"

function restame(n1, n2, mostrar, multiplicarPorTres){

    let resta = n1 - n2;

    mostrar(resta);
    multiplicarPorTres(resta);

    return resta;
}

restame(20, 5, function(resultado){
    console.log(resultado);
}, 
function(resultado){
    console.log(resultado*3);
});


// Ambito variables (scope)

let ruta = "victoroblesweb.es/ruta";

function mostrarRuta(){

    console.info(ruta);

    let nombre = "Víctor Robles WEB";

    console.log(nombre);

}

console.warn(ruta);
mostrarRuta();

if(true){
    let deporte = "mi deporte favorito es el padel";

    console.log(deporte);
}

// console.log(deporte);

// Hoisting o elevación

// coche = "renault";

console.log(coche);

var coche = "ferrari testarrosa";

// console.log(moto);

let moto = "ducati x1";

// Funciones de flecha

// Definir funcion
let nuevoCurso = horas => {
    console.log("+100 proyectos de desarrollo web con html, css y javascript "+horas+" horas");
};

nuevoCurso(12);

// Utilizar en un callback

setTimeout(() => {
    console.log("Estoy usando una funcion de flecha");
}, 2000);


