import { Fragment } from "react";
import { Link } from "react-router";
import "./archivos_css/cafeteria.css";

// Cada sección tiene un título y su lista de productos
const secciones = [
  {
    titulo: "CAFÉS CLÁSICOS",
    productos: [
      { nombre: "CAFÉ CHICO", imagen: "cafe_chico.png", alt: "Café chico", descripcion: "Café clásico" },
      { nombre: "CAFÉ CHICO CON CREMA", imagen: "cafe_chico_con_crema.png", alt: "Café chico con crema", descripcion: "Café con crema" },
      { nombre: "CAFÉ JARRITO", imagen: "cafe_jarrito.png", alt: "Café jarrito", descripcion: "Café tradicional" },
      { nombre: "CAFÉ CON LECHE DOBLE", imagen: "cafe_boble.png", alt: "Café con leche doble", descripcion: "Doble café con leche" },
      { nombre: "CAFÉ DOBLE CON CREMA", imagen: "cafe_doble_con_crema.png", alt: "Café doble con crema", descripcion: "Doble café con crema" },
      { nombre: "RISTRETTO", imagen: "riestretto.png", alt: "Ristretto", descripcion: "Café intenso" },
      { nombre: "MATE COCIDO", imagen: "matecocido.png", alt: "Mate cocido", descripcion: "Clásico" },
      { nombre: "TÉ CON LECHE", imagen: "te.png", alt: "Té con leche", descripcion: "Té caliente con leche" },
      { nombre: "TÉ ESPECIAL", imagen: "te.png", alt: "Té especial", descripcion: "Variedad de sabores" },
      { nombre: "MATCHA LATTE", imagen: "matcha.png", alt: "Matcha latte", descripcion: "Frío o caliente" },
    ],
  },
  {
    titulo: "CAFÉ DE ESPECIALIDAD",
    productos: [
      { nombre: "SUBMARINO", imagen: "submarino.png", alt: "Submarino", descripcion: "Submarino de chocolate blanco" },
      { nombre: "CHOCOLATE SUIZO", imagen: "chocolate_suizo.png", alt: "Chocolate suizo", descripcion: "Chocolate blanco y negro con chantilly" },
      { nombre: "MOCACCINO", imagen: "mocaccino.png", alt: "Mocaccino", descripcion: "Café y chocolate" },
    ],
  },
  {
    titulo: "CAFÉS FRÍOS",
    productos: [
      { nombre: "LATTE FRÍO", imagen: "latte_frio.png", alt: "Latte frío", descripcion: "Café con leche frío" },
      { nombre: "AMERICANO FRÍO", imagen: "americano_frio.png", alt: "Americano frío", descripcion: "Café americano servido frío" },
      { nombre: "LATTE DULCE DE LECHE", imagen: "latte_frio_dulce.png", alt: "Latte de dulce de leche", descripcion: "Café frío con dulce de leche" },
    ],
  },
];

function Cafeteria() {
  return (
    <>
      {/* ENCABEZADO */}
      <header>
        <img src="/imagenes_de_vir/LOGO.jpeg" alt="Logo de Wöllen" />

        <div className="info-header">
          <h1>Wöllen</h1>
          <p>Heladería y Cafetería</p>
        </div>

        <Link to="/carta" className="volver">
          ← Volver a la carta
        </Link>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        {secciones.map((seccion) => (
          <Fragment key={seccion.titulo}>
            <h2>{seccion.titulo}</h2>

            <section>
              {seccion.productos.map((producto) => (
                <article key={producto.nombre}>
                  <img
                    src={`/imagenes_de_vir/cafeteria/${producto.imagen}`}
                    alt={producto.alt}
                  />

                  <div className="info-producto">
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                  </div>
                </article>
              ))}
            </section>
          </Fragment>
        ))}
      </main>

      {/* FOOTER */}
      <footer>
        <p>Wöllen Heladería y Cafetería</p>
      </footer>
    </>
  );
}

export default Cafeteria;