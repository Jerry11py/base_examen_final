// Inicializar emailjs
emailjs.init("JruyWWTDeeTgDELeU"); // Sustituye TU_USER_ID con tu ID público de EmailJS.

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recarga de página.

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const statusMessage = document.getElementById("status-message");

    // Validar contraseña (en este caso, simplemente "12345").
    if (password === "12345") {
        // Enviar correo usando EmailJS.
        emailjs
            .send("service_o7it8bg", "template_000fr8c", {
                username: username, // Datos a enviar al correo.
            })
            .then(() => {
                statusMessage.textContent = "Ingreso exitoso. Redirigiendo...";
                statusMessage.style.color = "green";

                // Redirigir después de 2 segundos.
                setTimeout(() => {
                    window.location.href = "pagina2.html"; // Cambiar a la página principal.
                }, 2000);
            })
            .catch((error) => {
                console.error("Error al enviar los datos:", error);
                statusMessage.textContent = "Error al enviar los datos.";
                statusMessage.style.color = "red";
            });
    } else {
        // Mostrar mensaje de error si la contraseña es incorrecta.
        statusMessage.textContent = "Usuario o contraseña incorrectos.";
        statusMessage.style.color = "red";
    }
});
