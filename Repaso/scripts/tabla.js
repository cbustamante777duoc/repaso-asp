$.get("RepasoHtml/listarPersonas", function (data) {
    

    var contenido = "";

    contenido += "<table class='table'>";

    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<td>id</td>";
    contenido += "<td>nombre</td>";
    contenido += "<td>apellidos</td>";
    contenido += "</tr>";
    contenido += "</thead>";

    contenido += "<tbody>";

    var nfilas = data.length;

    for (var i = 0; i < nfilas; i++)
    {
        contenido += "<tr>";
        contenido += "<td>" + data[i].idPersona + "</td>";
        contenido += "<td>" + data[i].nombre + "</td>";
        contenido += "<td>" + data[i].apellido + "</td>";
        contenido += "</tr>";

    }

    contenido += "</tbody>";

    contenido += "</table>"

    document.getElementById("idTabla").innerHTML = contenido;


});