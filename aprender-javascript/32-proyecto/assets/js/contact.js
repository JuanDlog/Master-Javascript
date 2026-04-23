window.addEventListener("load", () => {

    const validation = new JustValidate(".main__contact");

    let isValidate = false;

    validation
        .addField("#name", [
            {
                rule: "required",
                errorMessage: "El nombre es obligatorio"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "El nombre es muy corto"
            },
            {
                rule: "maxLength",
                value: 15,
                errorMessage: "El nombre es demasiado largo"
            }
        ])

        .addField("#surname", [
            {
                rule: "required",
                errorMessage: "Los apellidos son obligatorios"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Los apellidos son muy cortos"
            },
            {
                rule: "maxLength",
                value: 25,
                errorMessage: "Los apellidos son demasiados largos"
            }
        ])

        .addField("#email", [
            {
                rule: "required",
                errorMessage: "El email son obligatorios"
            },
            {
                rule: "email",
                errorMessage: "El email no es válido"
            }

        ])

        .addField("#gender", [
            {
                rule: "required",
                errorMessage: "Selecciona un genero"
            }

        ])

        .addField("#date", [
            {
                rule: "required",
                errorMessage: "La fecha es obligatoria"
            }

        ])

        .addField("#years", [
            {
                rule: "required",
                errorMessage: "La edad es obligatoria"
            },
            {
                rule: "integer",
                errorMessage: "Solo son válidos los números"
            }

        ])
        .onSuccess(() => {
            isValidate = true;

            alert("Todo es válido");
        });


});