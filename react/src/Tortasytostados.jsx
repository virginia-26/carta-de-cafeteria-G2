import { Link } from "react-router";
import "./archivos_css/tortasytostados.css";

// Cada sección tiene un título y su lista de productos (la ruta es relativa a imagenes_tortas_tostados)
const secciones = [
  {
    titulo: "TORTAS",
    productos: [
      { nombre: "Marquise", ruta: "tortitas/marquise.png" },
      { nombre: "Bombón", ruta: "tortitas/bombon.jpg" },
      { nombre: "Lemon Pie", ruta: "tortitas/lemonpie.png" },
      { nombre: "Brownie", ruta: "tortitas/brownie.png" },
      { nombre: "Cheesecake frutos rojos", ruta: "tortitas/cheesecake.png" },
      { nombre: "Vert Paradise", ruta: "tortitas/vertParadise.png" },
      { nombre: "Selva Negra", ruta: "tortitas/selvanegra.png" },
      { nombre: "Tortas especiales", ruta: "tortitas/tortasespeciales.png" },
    ],
  },
  {
    titulo: "TOSTADOS",
    productos: [
      { nombre: "Tostado de jamón y queso", ruta: "tortitas/tostados/jamonYqueso.png" },
      { nombre: "Tostado de jamón crudo y queso", ruta: "tortitas/tostados/jamoncrudoYqueso.png" },
      { nombre: "Tostado de roquefort", ruta: "tortitas/tostados/quesoRoquefort.png" },
      { nombre: "Tostado de queso", ruta: "tortitas/tostados/tostadoDeQueso.png" },
    ],
  },
  {
    titulo: "MAFALDA",
    productos: [
      { nombre: "Mafalda de jamón y queso", ruta: "tortitas/mafaldas/jamonYqueso.png" },
      { nombre: "Mafalda de jamón crudo", ruta: "tortitas/mafaldas/jamoncrudo.png" },
    ],
  },
  {
    titulo: "TOSTADO DE CHIPÁ",
    productos: [
      { nombre: "Tostado de chipá de jamón y queso", ruta: "tostado de chipa/tostadoDeChipa.png" },
    ],
  },
];

function TortasTostados() {
  return (
    <div className="pagina-tortas">
      {/* BOTÓN VOLVER */}
      <Link to="/carta" className="volver">
        ← Volver a la carta
      </Link>

      {/* ENCABEZADO */}
      <header>
        <h1>TORTAS</h1>
        <h2>y Tostados</h2>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        {secciones.map((seccion) => (
          <section key={seccion.titulo}>
            <h2>{seccion.titulo}</h2>

            {seccion.productos.map((producto) => (
              <div className="producto" key={producto.nombre}>
                <img
                  src={`/imagenes_tortas_tostados/${producto.ruta}`}
                  alt={producto.nombre}
                />

                <div className="info">
                  <h3>{producto.nombre}</h3>
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}

export default TortasTostados;