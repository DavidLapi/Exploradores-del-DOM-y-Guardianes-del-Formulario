//Función de saludo

document.getElementById("botonSaludo").addEventListener("click", () => {
        let texto = document.getElementById("respuestaTexto");
        if (texto.textContent == "") {
            texto.textContent = "¡Encantado de saludarte! 😊";
        } else {
            texto.textContent = "";
        }
        
})