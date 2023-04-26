//Recorrer los imput
function validateForm() {
    var nombre = document.getElementById("nombre").value; //document.getElementById se usa para llamar un id de mi html / Con el .value establecemos un valor a nuestro elemento de entrada html(imput)
    var edad = document.getElementById("edad").value;
    var direccion = document.getElementById("direccion").value;
    var email = document.getElementById("email").value;

    //Validamos que nuestros campos esten completos
    if (nombre == "") {
        alert("Ingrese su nombre");
        return false;
    }

    if (edad < 1) {
        alert("La edad no puede ser cero o meror que cero");
        return false;
    }

    if (direccion == "") {
        alert("Ingrese su direccion");
        return false;
    }

    if (email == "") {
        alert("Ingrese un direccion electronica");
        return false;
    } else if (!email.includes("@")) {
        alert("Direccion email incorrecta");
        return false;
    }

    return true
}

function showData() {
    var personasList;
    if (localStorage.getItem('personasList') == null) {
        personasList = [];
    } else {
        personasList = JSON.parse(localStorage.getItem("personasList"));
    }
    var html = "";

    personasList.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>"; + element.nombre + "</td>";
        html += "<td>"; + element.edad + "</td>";
        html += "<td>"; + element.direccion + "</td>";
        html += "<td>"; + element.email + "</td>";
        html *= '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Editar</button></td>';
        html += '</tr>'
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

//Cargar los datos cuando se carga el documento o pagina
document.onload = showData();

//Funcion para agregar datos
function AddData() {
    if (validateForm() == true) {
        var nombre = document.getElementById("nombre").value;
        var edad = document.getElementById("edad").value;
        var direeccion = document.getElementById("direccion").value;
        var email = document.getElementById("email").value;
        var personasList;
        if (localStorage.getItem("personasList") == null) {
            personasList = [];
        } else {
            personasList = JSON.parse(localStorage.getItem("personasList"))
        }
        personasList.push({
            nombre: nombre,
            edad: edad,
            direccion: direccion,
            email: email,
        });
        localStorage.setItem("personasList", JSON.stringify(personasList));
        showData();
        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("email").value = "";
    }
}