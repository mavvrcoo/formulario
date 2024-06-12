function validar() {
    var retorno_comuna = validar_comuna ();
    var retorno_usuario = validar_usuario ();
    var retorno_telefono = validar_telefono ();
    var retorno_password = validar_password ();
    var retorno_correo = validar_correo ();
    var retorno_direccion = validar_direccion ();
    var add_hobbie = agregarAficion ();
    var retorno_aficiones = validar_aficiones
    
    return retorno_comuna && retorno_usuario && retorno_telefono && retorno_password && retorno_correo && retorno_direccion && add_hobbie && retorno_aficiones;
}

function validar_comuna () {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    console.log(comuna);
    if (comuna == "default") {
        div_error_comuna.innerHTML = "Este campo es obligatorio";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_direccion () {
    var direccion = document.getElementById ("inputAddress").value;
    var div_error_direccion = document.getElementById("error-direccion");
    div_error_direccion.innerHTML = "";
    if (direccion == "") {
        div_error_direccion.innerText = "Este campo es obligatorio";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_correo () {
    var correo = document.getElementById ("emailInput").value;
    var div_error_correo = document.getElementById("error-email");
    var pos_arroba = correo.indexOf("@");
    console.log(pos_arroba);
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var ext = arr_correo [arr_correo.length - 1];
    console.log (ext);
    if (pos_arroba > 0 && pos_punto > pos_arroba && (ext.length > 1 && ext.length <= 3)) {
        div_error_correo.innerHTML = "";
        return true;
    } else {
        div_error_correo.innerHTML = "El correo no tiene el formato correcto ";
        div_error_correo.className = "text-danger small mt-1"
        return false;
    }
}


/// VALIDACION DE USUARIO ///
function validar_usuario() {
    var input_usuario = document.getElementById("userInput");
    var div_error_usuario = document.getElementById("error-username");
    var usuario = input_usuario.value;
    div_error_usuario.innerHTML = "";
    if (usuario.length < 5 || usuario.length > 10) {
        div_error_usuario.innerHTML = "El nombre de usuario debe tener entre 5 y 10 caracteres.";
        div_error_usuario.className = "text-danger small mt-1";
        return false;
    }

    ///// QUE EL PRIMER CARACTER QUE SEA UNA LETRA /////

    var primerCaracter = usuario.charAt(0);
    if (!(primerCaracter >= 'A' && primerCaracter <= 'Z') && !(primerCaracter >= 'a' && primerCaracter <= 'z')) {
        div_error_usuario.innerHTML = "El nombre de usuario debe comenzar con una letra.";
        div_error_usuario.className = "text-danger small mt-1";
        return false;
    }

    ///// LOS CARACTERES QUE SEAN LETRAS O NUMEROS /////

    for (var i = 0; i < usuario.length; i++) {
        var char = usuario.charAt(i);
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))) {
            div_error_usuario.innerHTML = "El nombre de usuario no puede tener caracteres especiales.";
            div_error_usuario.className = "text-danger small mt-1";
            return false;
        }
    }

    ///// SI EXISTEN DIGITOS, QUE SOLO ESTEN AL FINAL /////

    var hasNumber = false;
    for (var i = 1; i < usuario.length; i++) {
        var char = usuario.charAt(i);
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (hasNumber) {
            div_error_usuario.innerHTML = "Los dígitos solo pueden estar al final del nombre de usuario.";
            div_error_usuario.className = "text-danger small mt-1";
            return false;
        }
    }
    return true;
}


/// VALIDACION DE NUM_TELEFONO ///
function validar_telefono() {
    var telefono = document.getElementById('phoneInput').value;
    var div_error_telefono = document.getElementById('error-telefono');
    div_error_telefono.innerHTML = "";
    if (telefono.trim() === '') {
        div_error_telefono.innerText = 'El numero de teléfono es obligatorio.';
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    }

///// QUE CONTENGA 9 DIGITOS /////

    if (telefono.length !== 9) {
        div_error_telefono.innerText = 'El numero de teléfono debe tener 9 digitos.';
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    }

///// SOLO CONTIENE NUMEROS /////

    for (var i = 0; i < telefono.length; i++) {
        var char = telefono.charAt(i);
        if (!(char >= '0' && char <= '9')) {
            div_error_telefono.innerText = 'El numero de teléfono solo puede contener numeros.';
            div_error_telefono.className = "text-danger small mt-1";
            return false;
        }
    }
    return true;
}


/// VALIDAR CONTRASEÑA ///
function validar_password() {
    var input_usuario = document.getElementById("userInput").value;
    var password = document.getElementById('inputPass').value;
    var confirmPassword = document.getElementById('inputPass2').value;
    var div_error_password = document.getElementById('error-password');
    div_error_password.innerHTML = "";

///// QUE CONTENGA AL MENOS UN DIGITO Y UNA LETRA /////

    if (password.length < 3 || password.length > 6) {
        div_error_password.innerText = 'La contraseña debe tener entre 3 y 6 caracteres.';
        div_error_password.className = "text-danger small mt-1";
        return false;
    }

///// QUE NO SEA EL MISMO NOMRE DE USUARIO /////

    if (password.includes(input_usuario)) {
        div_error_password.innerText = 'La contraseña no puede contener el nombre de usuario.';
        div_error_password.className = "text-danger small mt-1";
        return false;
    }

///// QUE LAS CONTRASEÑAS COINCIDAN /////

    if (password !== confirmPassword) {
        div_error_password.innerText = 'Las contraseñas no coinciden.';
        div_error_password.className = "text-danger small mt-1";
        return false;
    }

    return true;
}

function agregarAficion () {
    var input_aficion = document.getElementById("hobbieInput");
    var div_error_hobby = document.getElementById("error-hobby");
    var listHobbie = document.getElementById("listHobbie");
    var aficion = input_aficion.value;
    if (aficion == "") {
        div_error_hobby.innerText = "Debe escribir una aficion";
        div_error_hobby.className = "text-danger small mt-1";
        return;
    }
    var li = document.createElement("li");
    li.textContent = aficion;
    li.className = "list-group-item";
    listHobbie.appendChild(li);
    input_aficion.value = "";
}

function validar_aficiones () {
    var listHobbie = document.getElementById ("listHobbie");
    var div_error_hobbie = document.getElementById ("error-hobby");
    div_error_hobbie.innerHTML = "";
    if (listHobbie.children.length < 2) {
        div_error_hobbie.innerText = "Debes ingresar al menos 2 aficiones/ hobbies";
        div_error_hobbie.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_hobbie.innerHTML = "";
        return true;
    }
}


