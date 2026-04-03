// FETCH (ajax)


// Sacar datos de un backend (asincrona)


let idUser = 1;

fetch("https://reqres.in/api/users/" + idUser, {
    headers: {
        "x-api-key": "reqres_1280c02a199849edbbf64d78f64cc290"
    }
})

    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        mostrarUsuario(data.data);
    })
    .catch(error => {
        console.error("Error al pedir los datos del servidor", error);
    });


function mostrarUsuario(user) {
    let caja = document.querySelector("#user");

    caja.innerHTML = `
       <h2> ${user.first_name} ${user.last_name}</h2>
       <img src="${user.avatar}" />
    `;
}

// Guardar información

const usuarioParaGuardar = {
    email: "eve.holt@reqres.in",
    password: "pistol"
};

fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {
        "x-api-key": "reqres_1280c02a199849edbbf64d78f64cc290",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(usuarioParaGuardar)
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

// Sintaxis de promesas con async y await

async function sacarUsuarios() {

    try {
        let response = await fetch("https://reqres.in/api/users?page=1", {
            headers: {
                "x-api-key": "reqres_1280c02a199849edbbf64d78f64cc290"
            }
        });

        let data = await response.json();

        data.data.forEach(user => {
            console.log(user);
        });
    } catch (error) {
        console.log("Error al conseguir la info:", error);
    }

}

sacarUsuarios();