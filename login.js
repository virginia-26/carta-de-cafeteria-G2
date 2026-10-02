// =========================================
// WÖLLEN - LOGIN
// =========================================


// ELEMENTOS DEL HTML

const btnRegistro = document.getElementById("btnRegistro");

const loginForm = document.getElementById("loginForm");
const registroForm = document.getElementById("registroForm");

const tituloFormulario =
    document.getElementById("tituloFormulario");

const subtituloFormulario =
    document.getElementById("subtituloFormulario");

const textoCambio =
    document.getElementById("textoCambio");


// =========================================
// PASAR A REGISTRO
// =========================================

btnRegistro.addEventListener("click", function () {

    loginForm.classList.add("hidden");

    registroForm.classList.remove("hidden");

    tituloFormulario.textContent = "Crear cuenta";

    subtituloFormulario.textContent =
        "Registrate para disfrutar de Wöllen";

    textoCambio.innerHTML =
        '¿Ya tenés una cuenta? <button type="button" id="btnVolverLogin">Iniciá sesión</button>';

    document
        .getElementById("btnVolverLogin")
        .addEventListener("click", volverLogin);

});


// =========================================
// VOLVER A INICIAR SESIÓN
// =========================================

function volverLogin() {

    registroForm.classList.add("hidden");

    loginForm.classList.remove("hidden");

    tituloFormulario.textContent = "Iniciar sesión";

    subtituloFormulario.textContent =
        "Ingresá a tu cuenta para continuar";

    textoCambio.innerHTML =
        '¿No tenés una cuenta? <button type="button" id="btnRegistro">Registrate</button>';

    document
        .getElementById("btnRegistro")
        .addEventListener("click", pasarRegistro);
}


// =========================================
// FUNCIÓN PARA ABRIR REGISTRO
// =========================================

function pasarRegistro() {

    loginForm.classList.add("hidden");

    registroForm.classList.remove("hidden");

    tituloFormulario.textContent = "Crear cuenta";

    subtituloFormulario.textContent =
        "Registrate para disfrutar de Wöllen";

    textoCambio.innerHTML =
        '¿Ya tenés una cuenta? <button type="button" id="btnVolverLogin">Iniciá sesión</button>';

    document
        .getElementById("btnVolverLogin")
        .addEventListener("click", volverLogin);
}


// =========================================
// MOSTRAR CONTRASEÑA - LOGIN
// =========================================

const mostrarLogin =
    document.getElementById("mostrarLogin");

const loginPassword =
    document.getElementById("loginPassword");


mostrarLogin.addEventListener("change", function () {

    if (mostrarLogin.checked) {
        loginPassword.type = "text";
    } else {
        loginPassword.type = "password";
    }

});


// =========================================
// MOSTRAR CONTRASEÑA - REGISTRO
// =========================================

const mostrarRegistro =
    document.getElementById("mostrarRegistro");

const registroPassword =
    document.getElementById("registroPassword");

const confirmPassword =
    document.getElementById("confirmPassword");


mostrarRegistro.addEventListener("change", function () {

    if (mostrarRegistro.checked) {

        registroPassword.type = "text";
        confirmPassword.type = "text";

    } else {

        registroPassword.type = "password";
        confirmPassword.type = "password";

    }

});


// =========================================
// REGISTRARSE
// =========================================

registroForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre").value;

    const email =
        document.getElementById("registroEmail").value;

    const password =
        document.getElementById("registroPassword").value;

    const confirmacion =
        document.getElementById("confirmPassword").value;

    const mensaje =
        document.getElementById("registroMessage");


    // COMPROBAR CONTRASEÑAS

    if (password !== confirmacion) {

        mensaje.textContent =
            "Las contraseñas no coinciden.";

        mensaje.style.color = "#a84d4d";

        return;
    }


    // CREAR USUARIO

    const usuario = {

        nombre: nombre,
        email: email,
        password: password

    };


    // GUARDAR USUARIO

    localStorage.setItem(
        "usuarioWollen",
        JSON.stringify(usuario)
    );


    // MENSAJE

    mensaje.textContent =
        "¡Cuenta creada correctamente!";

    mensaje.style.color = "#59634a";


    // IR A OPINION.HTML

    setTimeout(function () {

        window.location.href = "opinion.html";

    }, 500);

});


// =========================================
// INICIAR SESIÓN
// =========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    const mensaje =
        document.getElementById("loginMessage");


    // BUSCAR USUARIO GUARDADO

    const usuarioGuardado =
        localStorage.getItem("usuarioWollen");


    // SI NO EXISTE

    if (!usuarioGuardado) {

        mensaje.textContent =
            "No existe una cuenta registrada.";

        mensaje.style.color = "#a84d4d";

        return;
    }


    // CONVERTIR DATOS

    const usuario =
        JSON.parse(usuarioGuardado);


    // COMPROBAR DATOS

    if (
        email === usuario.email &&
        password === usuario.password
    ) {

        mensaje.textContent =
            "¡Bienvenida a Wöllen, " +
            usuario.nombre +
            "!";

        mensaje.style.color = "#59634a";


        // IR A OPINION.HTML

        setTimeout(function () {

            window.location.href = "opinion.html";

        }, 500);


    } else {

        mensaje.textContent =
            "El correo o la contraseña son incorrectos.";

        mensaje.style.color = "#a84d4d";

    }

});