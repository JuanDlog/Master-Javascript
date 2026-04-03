// Programación Orientada a Objetos (POO)

// Molde

class Gato {



    constructor(nombre = "MisiMisi", raza, color) {

        // Propiedades o atributos (caracteristicas)
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }

    // Metodos (acciones)

    maullar(){
        console.log(`${this.nombre} dice: ¡Miau Miau!`);
    }

    saltar(){
        console.log(`${this.nombre} ha saltado`);
    }

    getRaza(){
        return this.raza;
    }

    setRaza(raza){
        this.raza = raza;
    }

    set guardarColor(color){
        this.color = color;
    }

    get sacarColor(){
        return this.color;
    }

    static saludar(){
        alert("Hola amigo que tal estas??");
    }

}

let miGato = new Gato("Bella", "Abisino", "Marron");


miGato.setRaza("Persa");

console.log(miGato.getRaza());

miGato.maullar();
miGato.saltar();

miGato.guardarColor = "Negro";

console.log(miGato.sacarColor);

Gato.saludar();

class GatoEspecial extends Gato {

    constructor(nombre, raza, color, habilidad){

        super(nombre, raza, color);

        this.habilidad = habilidad;
    }

    setHabilidad(habilidad){
        this.habilidad = habilidad;
    }

    getHabilidad(){
        return this.habilidad;
    }

    ejecutar(){
        console.log(`${this.nombre} esta utlizando su habilidad de ${this.habilidad} para ayudar a su dueño.`);
    }

}

let superGato = new GatoEspecial("Max", "Japonesa", "Blanco", "Super Escabación");

superGato.ejecutar();

console.log(superGato.getRaza());

superGato.saltar();

/*

let miGato2 = new Gato("Paco", "De la calle", "vaca");

console.log(miGato2.raza);

miGato2.maullar();
miGato2.saltar();
*/