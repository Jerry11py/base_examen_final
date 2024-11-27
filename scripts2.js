// *** 1. API para Enviar Correo ***
document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const toEmail = document.getElementById("toEmail").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const emailStatus = document.getElementById("emailStatus");

    // Utilizando EmailJS para enviar el correo
    emailjs.init("JruyWWTDeeTgDELeU"); // Sustituye TU_USER_ID con tu ID público de EmailJS.
    emailjs
        .send("service_o7it8bg", "template_yifwok8", {
            toEmail: toEmail,
            subject: subject,
            message: message,
        })
        .then(() => {
            emailStatus.textContent = "Correo enviado exitosamente.";
            emailStatus.style.color = "green";
        })
        .catch((error) => {
            console.error("Error al enviar el correo:", error);
            emailStatus.textContent = "Error al enviar el correo.";
            emailStatus.style.color = "red";
        });
});

// *** 2. API para Buscar Imágenes (The Cat API) ***
document.getElementById("load-cat").addEventListener("click", async () => {
    const catContainer = document.getElementById("cat-container");
    catContainer.innerHTML = '<p>Cargando...</p>';

    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();

        const catImage = document.createElement("img");
        catImage.src = data[0].url;
        catImage.alt = "Un gato";

        // Limitar tamaño de imagen
        catImage.style.width = "200px";
        catImage.style.height = "200px";
        catImage.style.objectFit = "cover"; 

        catContainer.style.display = "flex";
        catContainer.style.justifyContent = "center";
        catContainer.style.alignItems = "center";

        catContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar la imagen.
        catContainer.appendChild(catImage);
    } catch (error) {
        catContainer.innerHTML = '<p>Error al cargar la imagen.</p>';
        console.error(error);
    }
});


document.getElementById("getHoliday").addEventListener("click", function () {
    const datePicker = document.getElementById("datePicker");
    const holidayInfo = document.getElementById("holidayInfo");

    // Show the date picker
    datePicker.style.display = "inline";

    // Wait for the user to select a date
    datePicker.addEventListener("change", function () {
        const selectedDate = new Date(datePicker.value);
        
        // Extract year, month, and day from the selected date
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1; // Months are 0-indexed
        const day = selectedDate.getDate();

        // Hide the date picker after selection
        datePicker.style.display = "none";
//   
        // Make the API request using the selected date
        fetch(`https://holidays.abstractapi.com/v1/?api_key=4f91f44110cf460a88036dd69d8b9c48&country=US&year=${year}&month=${month}&day=${day}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                    const holiday = data[0]; // Get the first holiday (if available)
                    holidayInfo.textContent = `La festividad del ${day}/${month}/${year} es: ${holiday.name} (${holiday.country})`;
                } else {
                    holidayInfo.textContent = `No se encontraron festividades para el ${day}/${month}/${year}.`;
                }
            })
            .catch((error) => {
                console.error("Error al obtener información sobre vacaciones:", error);
                holidayInfo.textContent = "Error al obtener información sobre vacaciones.";
            });
    });
});