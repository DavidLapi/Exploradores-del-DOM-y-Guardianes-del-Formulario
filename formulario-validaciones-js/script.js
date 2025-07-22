const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim(); 
    const email = document.getElementById("email").value.trim(); 
    const edad = document.getElementById("edad").value.trim(); 
 
    const errores = document.getElementById("errores"); 
    const mensajeOk = document.getElementById("mensajeOk"); 
 
    errores.innerHTML = ""; 
    mensajeOk.textContent = "";

    let hayErrores = false; 
 
    // TODO 1: Validar que el nombre tenga al menos 3 letras

    if (nombre.length < 3) {
        errores.innerHTML  +=  "😡 El  nombre  debe  tener  al  menos  3 letras.<br>"; 
        errores.innerHTML += "<p><img src='https://media.tenor.com/jy6cG3XJmqcAAAAi/noooo.gif' alt='No no' style='width: 150px' /></p>";
        hayErrores = true;
    }

    // TODO 2: Validar que el email tenga @, . y termine en .com o .es 
    if (!email.includes("@") || !email.includes(".") ||  
      (!email.endsWith(".com") && !email.endsWith(".es"))) { 
        errores.innerHTML  +=  "😡  El  correo  debe  tener  un  formato válido (.com o .es).<br>"; 
        errores.innerHTML += "<p><img src='https://media1.tenor.com/m/sGio25jYlQAAAAAC/no-sad.gif' alt='No no' style='width: 150px' /></p>";
        hayErrores = true; 
    }

    // TODO 3: Validar que la edad sea un número mayor o igual a 18 

   if(isNaN(edad)) {
        errores.innerHTML  +=  "😡 La edad debe ser un número<br>";
        errores.innerHTML += "<p><img src='https://media1.tenor.com/m/7wb_036gsVoAAAAd/im-not-a-number-im-a-person.gif' alt='No no' style='width: 150px' /></p>";
        hayErrores = true;
   }
    const edadNumero = parseInt(edad); 

    if (edad < 0) {
        errores.innerHTML += "😡 La edad debe ser un entero positivo.";
        errores.innerHTML += "<p><img src='https://media1.tenor.com/m/4vyQAhbMseoAAAAC/cat-no.gif' alt='No no' style='width: 150px' /></p>";
        hayErrores = true;
    }

    if (edadNumero < 18) {
        errores.innerHTML  +=  "😡 Menores aquí no.<br>"; 
        errores.innerHTML += "<p><img src='https://media1.tenor.com/m/QyY1_ZO-5uYAAAAC/anhqv-paloma.gif' alt='paloma cuesta' style='width: 150px' /></p>";
        hayErrores = true;
    }
 
    // TODO 4: Mensaje final si todo está bien 
    // Si no hay errores, muestra un mensaje de éxito con texto verde. 
 
    if (!hayErrores) { 
        mensajeOk.textContent = "🟢 Formulario arreglado. ¡Gracias!"; 
        mensajeOk.innerHTML += "<p><img src='https://media1.tenor.com/m/xtyNvI68X88AAAAC/jongin-smiley.gif' style='width: 250px' /></p>";
    } 
});
