import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./archivos_css/login.css";

function Login() {
  // Qué formulario se ve: "login" o "registro"
  const [modo, setModo] = useState("login");

  // Si la contraseña se ve (true) o se tapa (false)
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  // Mensajes de error o éxito: texto y color
  const [loginMensaje, setLoginMensaje] = useState({ texto: "", color: "" });
  const [registroMensaje, setRegistroMensaje] = useState({ texto: "", color: "" });

  // Sirve para cambiar de página desde el código
  const navigate = useNavigate();

  // REGISTRARSE
  function registrarse(event) {
    event.preventDefault(); // evita que se recargue la página

    // Leemos lo que escribió la persona (cada campo por su "name")
    const datos = new FormData(event.target);
    const nombre = datos.get("nombre");
    const email = datos.get("registroEmail");
    const password = datos.get("registroPassword");
    const confirmacion = datos.get("confirmPassword");

    // Comprobar contraseñas
    if (password !== confirmacion) {
      setRegistroMensaje({ texto: "Las contraseñas no coinciden.", color: "#a84d4d" });
      return;
    }

    // Guardar usuario en el navegador
    const usuario = { nombre, email, password };
    localStorage.setItem("usuarioWollen", JSON.stringify(usuario));

    setRegistroMensaje({ texto: "¡Cuenta creada correctamente!", color: "#59634a" });

    // Ir a la página de opinión después de medio segundo
    setTimeout(() => {
      navigate("/opinion");
    }, 500);
  }

  // INICIAR SESIÓN
  function iniciarSesion(event) {
    event.preventDefault();

    const datos = new FormData(event.target);
    const email = datos.get("loginEmail");
    const password = datos.get("loginPassword");

    // Buscar usuario guardado
    const usuarioGuardado = localStorage.getItem("usuarioWollen");

    // Si no existe
    if (!usuarioGuardado) {
      setLoginMensaje({ texto: "No existe una cuenta registrada.", color: "#a84d4d" });
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    // Comprobar datos
    if (email === usuario.email && password === usuario.password) {
      setLoginMensaje({
        texto: "¡Bienvenida a Wöllen, " + usuario.nombre + "!",
        color: "#59634a",
      });

      setTimeout(() => {
        navigate("/opinion");
      }, 500);
    } else {
      setLoginMensaje({
        texto: "El correo o la contraseña son incorrectos.",
        color: "#a84d4d",
      });
    }
  }

  return (
    <main className="login-section">
      <div className="login-container">
        <div className="login-header">
          <h1>Wöllen</h1>
          <h2>{modo === "login" ? "Iniciar sesión" : "Crear cuenta"}</h2>
          <p>
            {modo === "login"
              ? "Ingresá a tu cuenta para continuar"
              : "Registrate para disfrutar de Wöllen"}
          </p>
        </div>

        {/* Se dibuja el formulario que corresponda según el modo */}
        {modo === "login" ? (
          /* INICIAR SESIÓN */
          <form className="login-form" onSubmit={iniciarSesion}>
            <div className="form-group">
              <label htmlFor="loginEmail">Correo electrónico</label>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                placeholder="ejemplo@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="loginPassword">Contraseña</label>
              <input
                type={mostrarLogin ? "text" : "password"}
                id="loginPassword"
                name="loginPassword"
                placeholder="Ingresá tu contraseña"
                minLength="6"
                required
              />
            </div>

            <div className="password-option">
              <input
                type="checkbox"
                id="mostrarLogin"
                checked={mostrarLogin}
                onChange={(e) => setMostrarLogin(e.target.checked)}
              />
              <label htmlFor="mostrarLogin">Mostrar contraseña</label>
            </div>

            <button type="submit" className="login-button">
              Iniciar sesión
            </button>

            <p className="form-message" style={{ color: loginMensaje.color }}>
              {loginMensaje.texto}
            </p>
          </form>
        ) : (
          /* REGISTRO */
          <form className="login-form" onSubmit={registrarse}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registroEmail">Correo electrónico</label>
              <input
                type="email"
                id="registroEmail"
                name="registroEmail"
                placeholder="ejemplo@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registroPassword">Contraseña</label>
              <input
                type={mostrarRegistro ? "text" : "password"}
                id="registroPassword"
                name="registroPassword"
                placeholder="Mínimo 6 caracteres"
                minLength="6"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Repetir contraseña</label>
              <input
                type={mostrarRegistro ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Repetí tu contraseña"
                minLength="6"
                required
              />
            </div>

            <div className="password-option">
              <input
                type="checkbox"
                id="mostrarRegistro"
                checked={mostrarRegistro}
                onChange={(e) => setMostrarRegistro(e.target.checked)}
              />
              <label htmlFor="mostrarRegistro">Mostrar contraseña</label>
            </div>

            <button type="submit" className="login-button">
              Crear cuenta
            </button>

            <p className="form-message" style={{ color: registroMensaje.color }}>
              {registroMensaje.texto}
            </p>
          </form>
        )}

        {/* CAMBIAR ENTRE LOGIN Y REGISTRO */}
        <div className="cambiar-formulario">
          {modo === "login" ? (
            <p>
              ¿No tenés una cuenta?{" "}
              <button type="button" onClick={() => setModo("registro")}>
                Registrate
              </button>
            </p>
          ) : (
            <p>
              ¿Ya tenés una cuenta?{" "}
              <button type="button" onClick={() => setModo("login")}>
                Iniciá sesión
              </button>
            </p>
          )}
        </div>

        <div className="volver">
          <Link to="/">← Volver a Wöllen</Link>
        </div>
      </div>
    </main>
  );
}

export default Login;