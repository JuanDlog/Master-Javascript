// Funciones
// Una función agrupa una seria de instrucciones para poder usarlas varias veces
// Es una agrupacción reutilizable de un conjunto de instrucciones

function saludo(nombre = "Amelia", plato = "tortilla de patatas") {
    console.log("Hola, abuelitaa " + nombre + "!!");
    console.log("¿Que tal estás?");
    console.log("Me pasas la receta de tu " + plato + "??");
    console.log("*******************")

    nombre = "otra cosa";

    return "abuela " + nombre + " saludada correctamente!!";
}

let mensajeFinal = saludo("Juani", "lentejas");

alert(mensajeFinal);

saludo("Maria", "Tortilla");
saludo("Pepa", "espaguetis");
saludo("Paz", "Bocadillo campero");
saludo("Laura", "Potaje");

saludo("ffff", "fff123");

/*
for(let i = 0; i < 20; i++) {
    saludo();
    saludo();
    saludo();

}
    */

// Funciones dentro de otras

function operaciones(numero1, numero2){
    let resultados = {
        "suma": (numero1 + numero2),
        "resta": (numero1 - numero2),
        "multiplicación": (numero1 * numero2),
        "division": (numero1 / numero2)
    };

    return resultados;
}

function porConsola(numero1, numero2) {

    let resultados =  operaciones(numero1, numero2);

    console.log("Suma: " + resultados.suma);
    console.log("Resta: " + resultados.resta);
    console.log("Multiplicación: " + resultados.multiplicación);
    console.log("División: " + resultados.division);
    return true;
}

function porPantalla(numero1, numero2) {

    let resultados =  operaciones(numero1, numero2);

    document.write("<h2>Calculadora</h2>");
    document.write("<h2>Suma: " + resultados.suma + "</h2>");
    document.write("<h2>Resta: " + resultados.resta + "</h2>");
    document.write("<h2>Multiplicación: " + resultados.multiplicación + "</h2>");
    document.write("<h2>División: " + resultados.division + "</h2>");
    document.write("<hr>");
    return true;
}

function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }
    return true;
}

calculadora(7, 9);

calculadora(7, 12, true);

// Parametros ...REST

function misPeliculas(pelicula1, pelicula2, ...resto_de_peliculas ){
    console.log(pelicula1);
    console.log(pelicula2);
    console.log(resto_de_peliculas);

}

misPeliculas("Matrix", "El Padrino 2", "Scarfase", "Terminator 2", "Jurassic Park", "Sin Limites", "Tarde de Perros");

// Operador SPREAD

let numeros = [1, 2, 3, 4];

let misNumeros = [...numeros, 5,6,7,8,9,10];

console.log(misNumeros);

let misPelisFavs = ["Matrix Revolution", "Terminator Salvation"];

misPeliculas(...misPelisFavs, "Toy Story1", "Spiderman 2", "In Time");