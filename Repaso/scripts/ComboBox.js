$.get("RepasoHtml/llenarComboPersona", function (data) {

    var contenido = "";
    var nregistro = data.length;
    for (var i = 0; i < nregistro; i++) {
        contenido += "<option value=' " + data[i].idPersona + " ' > ";
        contenido += data[i].nombre;
        contenido += "</option>";
    }


    document.getElementById("cboPersona").innerHTML = contenido;

});