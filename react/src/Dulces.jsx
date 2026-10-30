import { Fragment } from "react";
import { Link } from "react-router";
import "./archivos_css/dulces.css";

// Cada sección tiene un título y su lista de productos
const secciones = [
  {
    titulo: "DULCES Y CLÁSICOS",
    productos: [
      { nombre: "MEDIALUNAS Y CRIOLLOS", imagen: "medialuna.png", alt: "Medialunas y criollos", descripcion: "" },
      { nombre: "MEDIALUNA CON DULCE DE LECHE", imagen: "medialuna_dulcedl.png", alt: "Medialuna con dulce de leche", descripcion: "" },
      { nombre: "PASTELITOS", imagen: "pastelitos.png", alt: "Pastelitos", descripcion: "Membrillo o batata" },
      { nombre: "CHURRO CON DULCE DE LECHE", imagen: "churros.png", alt: "Churro con dulce de leche", descripcion: "" },
      { nombre: "CHURRO CON DULCE DE LECHE Y CHOCOLATE", imagen: "churros_chocolate.png", alt: "Churro con dulce de leche y chocolate", descripcion: "" },
      { nombre: "ALFAJORES HAVANNA", imagen: "alfajores.png", alt: "Alfajores Havanna", descripcion: "" },
      { nombre: "CHIPA", imagen: "chipa.png", alt: "Chipa", descripcion: "4 unidades / Individual" },
    ],
  },
  {
    titulo: "PLATOS Y TENTACIONES",
    productos: [
      { nombre: "PANCAKE SALUDABLE", imagen: "pancake_saludable.png", alt: "Pancake saludable", descripcion: "Frutas + miel" },
      { nombre: "WAFFLE CON CHANTILLY", imagen: "waffle_chantilly.png", alt: "Waffle con chantilly", descripcion: "Frutas y miel" },
      { nombre: "WAFFLE CON HELADO", imagen: "waffle_helado.png", alt: "Waffle con helado", descripcion: "Frutas y miel" },
      { nombre: "BROWNIE CON HELADO", imagen: "brownie_helado.png", alt: "Brownie con helado", descripcion: "" },
      { nombre: "ENSALADA DE FRUTAS", imagen: "ensalada_de_fruta.png", alt: "Ensalada de frutas", descripcion: "Chica o grande" },
      { nombre: "ENSALADA DE FRUTAS CON HELADO", imagen: "ensalda_helado.png", alt: "Ensalada de frutas con helado", descripcion: "" },
      { nombre: "BANANA TOAST", imagen: "banana_toast.png", alt: "Banana toast", descripcion: "" },
      { nombre: "TOSTÓN DE PALTA Y HUEVO", imagen: "toston_huevo_palta.png", alt: "Tostón de palta y huevo", descripcion: "" },
      { nombre: "TOSTADA CON PALTA", imagen: "tostada_palta.png", alt: "Tostada con palta", descripcion: "" },
      { nombre: "HUEVOS REVUELTOS", imagen: "huevo.png", alt: "Huevos revueltos", descripcion: "" },
    ],
  },
];

function Dulces() {
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
                    src={`/imagenes_de_vir/dulces/${producto.imagen}`}
                    alt={producto.alt}
                  />

                  <div className="info-producto">
                    <h3>{producto.nombre}</h3>
                    {producto.descripcion && <p>{producto.descripcion}</p>}
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

export default Dulces;