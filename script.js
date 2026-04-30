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
}