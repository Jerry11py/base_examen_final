// Inicializar emailjs
emailjs.init("JruyWWTDeeTgDELeU"); // Reemplaza con tu ID público de EmailJS

// Manejar el envío del formulario
document.getElementById("employeeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const toEmail = document.getElementById("toEmail").value;
    const employeeData = document.getElementById("employeeData").value;
    const salary = document.getElementById("salary").value;
    const observation = document.getElementById("observation").value;
    const senderName = document.getElementById("senderName").value;
    const messageStatus = document.getElementById("messageStatus");

    // Enviar datos a través de EmailJS
    emailjs
        .send("service_o7it8bg", "template_yifwok8", {
            toEmail: toEmail,
            employeeData: employeeData,
            salary: salary,
            observation: observation,
            senderName: senderName
        })
        .then(() => {
            messageStatus.textContent = "Mensaje enviado exitosamente.";
            messageStatus.style.color = "green";
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
            messageStatus.textContent = "Error al enviar el mensaje.";
            messageStatus.style.color = "red";
        });
});

// Limpiar formulario
document.getElementById("clearForm").addEventListener("click", function () {
    document.getElementById("employeeForm").reset();
    document.getElementById("messageStatus").textContent = "";
});

function calcularSalario() {
    const salario = parseFloat(prompt("Ingrese el salario:"));
    const descuento = parseFloat(prompt("Ingrese el descuento:"));
    
    if (isNaN(salario) || isNaN(descuento)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const total = salario - descuento;
    alert(`El total después del descuento es: ${total}`);
}

function calcularPuntos() {
    const punto1 = parseFloat(prompt("Ingrese el primer puntaje:"));
    const punto2 = parseFloat(prompt("Ingrese el segundo puntaje:"));
    const punto3 = parseFloat(prompt("Ingrese el tercer puntaje:"));

    if (isNaN(punto1) || isNaN(punto2) || isNaN(punto3)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const total = punto1 + punto2 + punto3;
    alert(`El total de los puntajes es: ${total}`);
}

function calcularPorcentaje() {
    const puntaje = parseFloat(prompt("Ingrese el puntaje:"));

    if (isNaN(puntaje)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    const porcentaje = puntaje * 0.15;
    alert(`El 15% del puntaje es: ${porcentaje}`);
}
