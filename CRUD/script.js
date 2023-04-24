//Recorrer los imput
function AddData(){
    var nombre = document.getElementById("nombre").value;//document.getElementById se usa para llamar un id de mi html / Con el .value establecemos un valor a nuestro elemento de entrada html(imput)
    var edad = document.getElementById("edad").value;
    var direccion = document.getElementById("direccion").value;
    var email = document.getElementById("email").value;

    //Validamos que nuestros campos esten completos
    if(nombre == ""){
        alert("Ingrese su nombre");
        return false;
    }

    if(edad < 1){
        alert("La edad no puede ser cero o meror que cero");
        return false;
    }

    if(direccion == ""){
        alert("Ingrese su direccion");
        return false;
    }

    if(email == ""){
        alert("Ingrese un direccion electronica");
        return false;
    }

    else if(!email.includes("@")){
        alert("Direccion email incorrecta");
        return false;
    }

    return true
}

function showData(){
    var pernosasList
    
}