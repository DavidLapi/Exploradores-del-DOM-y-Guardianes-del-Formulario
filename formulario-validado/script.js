const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); 
 
    const nombre = document.getElementById("nombre").value.trim(); 
    const email = document.getElementById("email").value.trim(); 
    const errores = document.getElementById("errores"); 
    const mensajeOk = document.getElementById("mensajeOk");

    errores.textContent = ""; 
    mensajeOk.textContent = ""; 
 
    let hayErrores = false;

    if(nombre === "") {
        errores.innerHTML += "🔴 El nombre es obligatorio.<br>"; 
        hayErrores = true;
        errores.innerHTML += "<p><img src='https://media.tenor.com/jy6cG3XJmqcAAAAi/noooo.gif' style='width: 150px' /></p>";
    }

    if (email === "") { 
        errores.innerHTML += "🔴 El correo es obligatorio.<br>"; 
         errores.innerHTML += "<p><img src='https://media1.tenor.com/m/sGio25jYlQAAAAAC/no-sad.gif' style='width: 150px' /></p>";
        hayErrores = true; 
    } else if (!email.includes("@") || !email.includes(".")) { 
        errores.innerHTML  +=  "🔴  El  correo  debe  tener  un  formato válido (como ejemplo@correo.com).<br>"; 
        hayErrores = true; 
        errores.innerHTML += "<p><img src='https://media1.tenor.com/m/LX1reyWcd8EAAAAC/oopsies-ohno.gif' style='width: 200px' /></p>";
    }

    if (!hayErrores) { 
        mensajeOk.textContent = "✅ Formulario enviado correctamente. ¡Gracias!"; 
        mensajeOk.innerHTML += "<p><img src='https://media1.tenor.com/m/xtyNvI68X88AAAAC/jongin-smiley.gif' style='width: 250px' /></p>";
    } 
});