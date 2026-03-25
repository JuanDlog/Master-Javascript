// Condicional Switch

let miDesayuno = "tortitas";

switch (miDesayuno) {

    case "tortitas":
        console.log("Has elegido TORTITAS con SIROPE DE ARCE");
        break;

    case "huevos":
        console.log("Has elegido huevos fritos con bacon");
        break;

    case "colacao":
        console.log("Has elegido un Colacao con copos de avena");
        break;

    default:
        console.log("Has elegido otro desayuno diferente");
}

if (miDesayuno == "tortitas") {
    console.log("Has elegido TORTITAS con SIROPE DE ARCE");
} else if (miDesayuno == "huevos") {
    console.log("Has elegido huevos fritos con bacon");
} else if (miDesayuno == "colacao") {
    console.log("Has elegido un Colacao con copos de avena");
} else {
    console.log("Has elegido otro desayuno diferente");
}

// Condicional Ternario

let nombre = "Juan Alberto";
let edad = 18;

let resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";

console.log(resultado);

// Diferencia entre var y let (alcance / bloques)

let curso = "+100 proyectos de desarrollo web con html, css y js";

if ("hola" == "hola") {
    let curso = "Master en CSS3 Avanzado";

}
console.log(curso);

