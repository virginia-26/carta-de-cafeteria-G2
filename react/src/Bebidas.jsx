import { Fragment } from "react";
import { Link } from "react-router";
import "./archivos_css/bebidas.css";

// Cada sección tiene un título y su lista de productos
const secciones = [
  {
    titulo: "FRUTALES",
    productos: [
      { nombre: "LICUADO DE FRUTAS", imagen: "licuadodefruta.png", alt: "Licuado de frutas", descripcion: "Durazno · Banana · Frutilla · Ananá · Multifruta" },
      { nombre: "SMOOTHIES", imagen: "smuti.png", alt: "Smoothies", descripcion: "Consultar variedad" },
      { nombre: "JUGO DE NARANJA", imagen: "jugodenaranja.png", alt: "Jugo de naranja", descripcion: "Chico · Mediano · Grande" },
      { nombre: "POMELADA", imagen: "pomelada.png", alt: "Pomelada", descripcion: "" },
    ],
  },
  {
    titulo: "REFRESCANTES",
    productos: [
      { nombre: "LIMONADA CLÁSICA", imagen: "limonadaclasica.png", alt: "Limonada clásica", descripcion: "Vaso · ½ jarra · Jarra 1L" },
      { nombre: "LIMONADA ESPECIAL", imagen: "limonadaespecial.png", alt: "Limonada especial", descripcion: "Frutos rojos · Maracuyá · Limón con frutilla · Vaso · ½ jarra · Jarra 1L" },
    ],
  },
  {
    titulo: "CREMOSOS",
    productos: [
      { nombre: "MILKSHAKE", imagen: "milckshake.png", alt: "Milkshake", descripcion: "Chocolate blanco y caramelo · Oreo y dulce de leche" },
      { nombre: "BATIDO CON HELADO", imagen: "batidoconhelado.png", alt: "Batido con helado", descripcion: "" },
      { nombre: "FRAPUCHINO", imagen: "frapuchino.png", alt: "Frapuchino", descripcion: "" },
    ],
  },
  {
    titulo: "CLÁSICOS",
    productos: [
      { nombre: "AGUA MINERAL", imagen: "agua.png", alt: "Agua mineral", descripcion: "Con gas · Saborizada" },
      { nombre: "GASEOSAS", imagen: "gaseosa.png", alt: "Gaseosas", descripcion: "" },
      { nombre: "CERVEZA", imagen: "cerveza.png", alt: "Cerveza", descripcion: "Corona 500 ml · Quilmes 500 ml · Brahma 500 ml" },
    ],
  },
];

function Bebidas() {
  return (
    <>
      {/* BOTÓN VOLVER */}
      <div className="titulo-categoria">
        <Link to="/carta" className="volver-categoria">
          ← Volver a la carta
        </Link>
      </div>

      {/* TÍTULO */}
      <h1 className="nombre-categoria">BEBIDAS</h1>

      {/* TABLA DE PRODUCTOS */}
      <table className="carta-productos">
        <tbody>
          {secciones.map((seccion) => (
            <Fragment key={seccion.titulo}>
              {/* Fila con el título de la sección (ocupa 2 columnas) */}
              <tr>
                <th colSpan="2">{seccion.titulo}</th>
              </tr>

              {/* Una fila por cada producto de la sección */}
              {seccion.productos.map((producto) => (
                <tr key={producto.nombre}>
                  <td>
                    <img src={`/imagenes_bebidas/${producto.imagen}`} alt={producto.alt} />
                  </td>
                  <td>
                    <strong>{producto.nombre}</strong>
                    {producto.descripcion && (
                      <span className="descripcion-producto">{producto.descripcion}</span>
                    )}
                  </td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Bebidas;