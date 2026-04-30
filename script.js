function validarregistro() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var telefono = document.getElementById("telefono").value;
    if (nombre === "" || correo === "" || usuario === "" || password === "" || telefono === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    else if(!/^\d{10}$/.test(telefono)){
        alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.");
        return false;
    }

}

function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if (usuario === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    else if (usuario !== "admin" || password !== "admin123") {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}

