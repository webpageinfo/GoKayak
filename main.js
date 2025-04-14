$(document).ready(function()
{$("#formulario").submit(function(evento){
    evento.preventDefault();
    var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();
var valido = true;
if (name == "") {
    valido = false;
    $("#error-name").html("Ingresar nombre");
    $("#lbl-name").addClass("text-danger");
  }
  if (email == "") {
    valido = false;
    $("#error-email").html("Ingresar nombre");
    $("#lbl-email").addClass("text-danger");
}
if (message == "") {
    valido = false;
    $("#error-message").html("Ingresar nombre");
    $("#lbl-message").addClass("text-danger");
}
if (valido) {
    $(".alert").removeClass("d-none");
  }
})