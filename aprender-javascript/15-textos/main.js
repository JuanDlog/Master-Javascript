

// Longitud
let nombre = "Victor Robles WEB";

console.log(nombre.length);

// Conversion a texto

let numero = 1255;

console.log(typeof numero.toString());

// Convertir texro a mayusculas

let web = "victorroblesweb.es";

let webMayus = web.toUpperCase();

console.log(webMayus);

// Convertir a minusculas

let plato = "PIZZA NAPOLITANA";

console.log(plato.toLowerCase());


// Conseguir una letra concreta

let frase = "Soy muy guay del paraguay";

console.log(frase.charAt(13));


// Comprobar si una cadena tiene dentro otra

let eslogan = "No soy el mejor, pero seguramente si seré al que mejor entiendas";

if(eslogan.includes("seguramente")){
    console.log("La palabra SEGURAMENTE si existe en el eslogan")
}else{
    console.log("Que dices loco!! esa palabra no existe");
}

// Buscar la posicion de una palabra

let mensaje = "Estas aprendiendo JavaScript como un autentico loco";

console.log(mensaje.indexOf("autentico"));
console.log(mensaje.charAt(37));

// Extraer parte de un texto

let curso = "Master en JavaScript";

console.log(curso.slice(10));


// Remplazar parte de un texto

// .replace remplazo 1 aparicion

// .replaceAll sustituyo todas las apariciones

let pelicula = "Dos tontos muy tontos";

console.log(
    pelicula.replaceAll("tontos", "listos")
);

// Trim o eliminar espacios en blanco

let email = "   victor@victor.com              ";

console.log(
    email.trim()
);

// Separar cadena por partes

let listaCompra = "huevos, hamburguesas, platanos, lechuga, tomate, yogures";

let listaArray = listaCompra.split(",");

console.log(listaArray);



// Extraer parte de un texto

let cursoDos = "Master en React";

console.log(cursoDos.substring(0,6));


// Concatenar o unir cadenas de texto

let ciudad = "Murcia";
let pais = "España";

let fraseFinal = "Mi ciudad es "+ciudad+" y está en "+pais;

fraseFinal = `Mi ciudad es ${ciudad} y está en ${pais}`;

fraseFinal = "".concat("Mi ciudad es ", ciudad, " y está en , pais");

console.log(fraseFinal);


// Comienza por una palabra especifica

let fraseDos = "Bienvenido a mi nuevo curso de programación";

console.log(

    fraseDos.startsWith("Bienvenido")
);


// Acaba por una palabra especifica

let fraseTres = "Bienvenido a mi nuevo curso de programación";

console.log(

    fraseTres.endsWith("programación")
);


// Repetir palabras

let mensajito = "JavaScript mola mucho!! \n";

console.log(
    mensajito.repeat(10)
);


// Buscar texto en una cadena

// metodos search y match

let miCadena = "Pablito clavó un clavito clavó";

console.log(
    miCadena.match(/clavó/g)
);
