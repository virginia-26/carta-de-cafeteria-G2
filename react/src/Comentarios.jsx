import { Link } from "react-router";
import "./archivos_css/opinion.css";

function Comentarios() {
  // Leemos las opiniones guardadas (o una lista vacía si no hay ninguna)
  const opiniones = JSON.parse(localStorage.getItem("wollenOpiniones")) || [];

  return (
    <>
      {/* ENCABEZADO */}
      <header>
        <h1>
          <Link to="/">← WÖLLEN</Link>
        </h1>

        <h2>Lo que opinan nuestros clientes</h2>

        <p>
          <Link to="/opinion" className="link-volver">
            Dejar mi propia opinión
          </Link>
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        <section className="seccion-opiniones">
          <h2 className="titulo-opiniones">Opiniones de nuestros clientes</h2>

          <div id="lista-comentarios">
            {opiniones.length === 0 ? (
              <p>Todavía no hay opiniones. ¡Sé el primero en dejar la tuya!</p>
            ) : (
              // slice() copia la lista y reverse() la da vuelta: la más nueva primero
              opiniones
                .slice()
                .reverse()
                .map((op, indice) => {
                  const estrellas =
                    "★".repeat(Number(op.calificacion)) +
                    "☆".repeat(5 - Number(op.calificacion));

                  return (
                    <div className="comentario-card" key={indice}>
                      <div className="comentario-header">
                        <strong>
                          {op.nombre} {op.apellido}
                        </strong>
                        <span className="estrellas">{estrellas}</span>
                      </div>

                      <p className="comentario-productos">
                        {op.productos.join(", ") || "No especificó productos"}
                      </p>

                      <p className="comentario-texto">"{op.comentario}"</p>

                      <span className="comentario-fecha">{op.fecha}</span>
                    </div>
                  );
                })
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>Wöllen Heladería y Cafetería</p>
      </footer>
    </>
  );
}

export default Comentarios;