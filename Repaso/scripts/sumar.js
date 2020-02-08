
var sumar = document.getElementById("btnSumar");

sumar.onclick = function () {
    var numero1 = parseInt( document.getElementById("txtNumero1").value);
    var numero2 = parseInt( document.getElementById("txtNumero2").value);
    
    var suma = numero1 + numero2;
    
    // reponde en lblRespuesta
    document.getElementById("lblRespuesta").innerHTML = "la suma es " + suma;

    var limpiar = document.getElementById("btnLimpiar");
}

var limpiar = document.getElementById("btnLimpiar");

limpiar.onclick = function () {

    var numero1 = document.getElementById("txtNumero1").value = "";
    var numero2 = document.getElementById("txtNumero2").value = "";
    var limpiar = document.getElementById("lblRespuesta").innerHTML = "";

}
