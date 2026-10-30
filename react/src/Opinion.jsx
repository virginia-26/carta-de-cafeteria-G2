import { Link, useNavigate } from "react-router";

// Opciones de productos (checkboxes)
const productosLista = [
  { id: "prod-desayunos", valor: "Desayunos y Meriendas" },
  { id: "prod-tortas", valor: "Tortas y Tostados" },
  { id: "prod-dulces", valor: "Dulces, Clásicos y Tentaciones" },
  { id: "prod-cafeteria", valor: "Cafetería" },
  { id: "prod-bebidas", valor: "Bebidas" },
  { id: "prod-copas", valor: "Copas Heladas" },
];

// Opciones de calificación (radios)
const calificaciones = [1, 2, 3, 4, 5];

function Opinion() {
  const navigate = useNavigate();

  function enviarOpinion(event) {
    event.preventDefault(); // evita que se recargue la página

    // Leemos todo lo que completó la persona
    const datos = new FormData(event.target);
    const nombre = datos.get("nombre").trim();
    const apellido = datos.get("apellido").trim();
    const comentario = datos.get("comentario").trim();
    const productos = datos.getAll("producto"); // todos los tildados
    const calificacion = datos.get("calificacion"); // null si no eligió ninguna

    // Validación: si falta algo, avisa y corta
    if (!nombre || !apellido || !calificacion || !comentario) {
      alert("Por favor completá nombre, apellido, calificación y comentario.");
      return;
    }

    // Armamos la nueva opinión
    const nuevaOpinion = {
      nombre,
      apellido,
      productos,
      calificacion,
      comentario,
      fecha: new Date().toLocaleDateString("es-AR"),
    };

    // Leemos las opiniones guardadas, agregamos la nueva y guardamos de nuevo
    const opiniones = JSON.parse(localStorage.getItem("wollenOpiniones")) || [];
    opiniones.push(nuevaOpinion);
    localStorage.setItem("wollenOpiniones", JSON.stringify(opiniones));

    // Vamos a la página de comentarios
    navigate("/comentarios");
  }

  return (
    <>
      {/* ENCABEZADO */}
      <header>
        <h1>
          <Link to="/">← WÖLLEN</Link>
        </h1>

        <h2>Contanos tu opinión</h2>

        <p>Tu experiencia nos ayuda a mejorar cada día.</p>

        <p>
          <Link to="/comentarios" className="link-volver">
            Ver opiniones de otros clientes
          </Link>
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        <form id="form-opinion" onSubmit={enviarOpinion}>
          {/* DATOS PERSONALES */}
          <div className="grupo-datos">
            <div className="campo-formulario">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
            </div>

            <div className="campo-formulario">
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apellido" placeholder="Tu apellido" />
            </div>
          </div>

          {/* PRODUCTOS */}
          <fieldset>
            <legend>¿Qué producto/s consumiste?</legend>

            <div className="opciones-productos">
              {productosLista.map((producto) => (
                <label key={producto.id}>
                  <input
                    type="checkbox"
                    id={producto.id}
                    name="producto"
                    value={producto.valor}
                  />
                  {producto.valor}
                </label>
              ))}
            </div>
          </fieldset>

          {/* CALIFICACIÓN */}
          <fieldset>
            <legend>Calificación</legend>

            <div className="opciones-calificacion">
              {calificaciones.map((numero) => (
                <label key={numero}>
                  <input
                    type="radio"
                    id={`cal-${numero}`}
                    name="calificacion"
                    value={numero}
                  />
                  {numero}
                </label>
              ))}
            </div>
          </fieldset>

          {/* COMENTARIO */}
          <div className="campo-formulario campo-comentario">
            <label htmlFor="comentario">Tu comentario:</label>
            <textarea
              id="comentario"
              name="comentario"
              rows="5"
              placeholder="Contanos qué te pareció..."
            ></textarea>
          </div>

          {/* BOTÓN */}
          <div className="contenedor-boton">
            <button type="submit" id="btn-enviar">
              Enviar opinión
            </button>
          </div>
        </form>
      </main>

      {/* FOOTER */}
      <footer>
        <p>Wöllen Heladería y Cafetería</p>
      </footer>
    </>
  );
}

export default Opinion;