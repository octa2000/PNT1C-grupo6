document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        function validarCampo(valor, mensajeError) {
            console.log("Validando campo:", valor); // Agregado

            if (valor.trim() === "") {
                alert(mensajeError);
                return false;
            }
            return true;
        }

        const nombre = document.getElementById("nombre").value;
        console.log("Nombre:", nombre); // Agregado

        const apellido = document.getElementById("apellido").value;
        console.log("Apellido:", apellido); // Agregado

        const email = document.getElementById("email").value;
        console.log("Email:", email); // Agregado

        const nacionalidad = document.getElementById("nacionalidad").value;
        console.log("Nacionalidad:", nacionalidad); // Agregado

        const fechaNacimiento = document.getElementById("fechaNacimiento").value;
        console.log("Fecha de Nacimiento:", fechaNacimiento); // Agregado

        const genero = document.getElementById("genero").value;
        console.log("Género:", genero); // Agregado

        const telefono = document.getElementById("telefono").value;
        console.log("Teléfono:", telefono); // Agregado

        if (
            validarCampo(nombre, "Por favor, ingresa un nombre válido.") &&
            validarCampo(apellido, "Por favor, ingresa un apellido válido.") &&
            validarCampo(email, "Por favor, ingresa un correo electrónico válido.") &&
            validarCampo(nacionalidad, "Por favor, selecciona una nacionalidad válida.") &&
            validarCampo(fechaNacimiento, "Por favor, ingresa una fecha de nacimiento válida.") &&
            validarCampo(genero, "Por favor, selecciona un género válido.") &&
            validarCampo(telefono, "Por favor, ingresa un número de teléfono válido.")
        ) {
            console.log("Formulario válido, enviando..."); // Agregado
            form.submit();
        }
    });
});

