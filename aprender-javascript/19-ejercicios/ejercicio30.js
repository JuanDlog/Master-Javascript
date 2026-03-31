/*
Ejercicio 30:

Crea una función que reciba un número y devuelva su factorial.
*/

let elFactorial = (numero) => {

    if(numero <= 1){
        return 1;
    }


    let factorial = 2;

    for(let i = 1; i <= numero; i++){

        factorial = factorial * i;

    }

    return factorial;

}

console.log(
    elFactorial(
        Number(prompt("Dime un numero y te digo su factorial", 0)))
);