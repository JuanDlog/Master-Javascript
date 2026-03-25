/*
Ejercicio 21:

Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En una alerta y por la consola el resultado de
    sumar, restar, multiplicar y dividir esas dos cifras
*/

let n1;
let n2;

while(n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)){
    n1 = parseInt(prompt("Mete el primero numero"));
    n2 = parseInt(prompt("Mete el segundo numero"));
}

let resultado = `
Suma: ${n1+n2}
Resta: ${n1-n2}
Multiplicación: ${n1*n2}
División: ${n1/n2}
Resto: ${n1%n2}
`;

alert(resultado);
console.log(resultado);



/* HECHO POR  MI
let numero1;
let numero2;

do {

    numero1 = parseInt(prompt("Escribe el primer numero: "), 0);
    numero2 = parseInt(prompt("Escribe el segundo numero: "), 0);

    if(isNaN(numero1)){
        alert("Escribe solo numeros, intentalo de nuevo.")
    }

} while(isNaN(numero1) || isNaN(numero2));

alert(`Suma: ${numero1} + ${numero2} = ${numero1+numero2}
Resta: ${numero1} - ${numero2} = ${numero1-numero2}
Multiplicación: ${numero1} x ${numero2} = ${numero1*numero2}
División: ${numero1} / ${numero2} = ${numero1/numero2}`);
*/