/*
Ejercicio 16:

Escribe un programa que muestre la tabla de multiplicar del
numero que te diga el usuario

 */


let numero = parseInt(prompt("¿Deq ue número quieres la tabla?", 1));

let resultadoCompleto = "TABLA DEL "+ numero;

for(let i = 1; i <= 10; i++){

    let multiplicacion = i * numero;

    resultadoCompleto += "\n"+i+" x "+numero+" = "+multiplicacion;

}

console.log(resultadoCompleto);
alert(resultadoCompleto);





/* HECHO POR MI
let numero = 0;
let tabla = "";

do{
    numero = parseInt(prompt("Escribe el numero para hacer su tabla de multiplicar: "));
} while(isNaN(numero));

for (var contador = 0; contador <= 10; contador++) {

    tabla += `${numero} x ${contador} = ${numero * contador}
`;

}

alert(tabla);
*/
