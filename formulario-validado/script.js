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
    }

    if (email === "") { 
        errores.innerHTML += "🔴 El correo es obligatorio.<br>"; 
        hayErrores = true; 
    } else if (!email.includes("@") || !email.includes(".")) { 
        errores.innerHTML  +=  "🔴  El  correo  debe  tener  un  formato válido (como ejemplo@correo.com).<br>"; 
        hayErrores = true; 
    }

    if (!hayErrores) { 
        mensajeOk.textContent = "✅ Formulario enviado correctamente. ¡Gracias!"; 
    } 
});