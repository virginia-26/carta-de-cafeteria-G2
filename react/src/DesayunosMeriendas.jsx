import { Link } from "react-router";
import "./archivos_css/desayunos-meriendas.css";

// Cada sección tiene un título y su lista de productos (la ruta es relativa a imagenes_desayunos_meriendas)
const secciones = [
  {
    titulo: "CLÁSICOS",
    productos: [
      { nombre: "Común", ruta: "comun.jpg", descripcion: "Café o infusión, dos medialunas, manteca y mermelada." },
      { nombre: "Especial", ruta: "especial.jpg", descripcion: "Café o infusión, dos medialunas o criollos, jugo de naranja chico, manteca y mermelada." },
      { nombre: "Wollen", ruta: "wollen.jpg", descripcion: "Café o infusión, medio tostado, jugo de naranja mediano." },
      { nombre: "Dulce", ruta: "dulce.jpg", descripcion: "Un café o infusión, porción de torta a elección." },
      { nombre: "Dulce para compartir", ruta: "dulce para compartir.jpg", descripcion: "Dos cafés o infusiones, dos porciones de torta para compartir." },
      { nombre: "Fusionado", ruta: "fusionado.png", descripcion: "Dos cafés o infusiones, medio tostado, dos porciones de torta y dos jugos de naranja." },
    ],
  },
  {
    titulo: "SALUDABLES + ENERGÉTICOS",
    productos: [
      { nombre: "Light", ruta: "saludables + energeticos/light.jpeg", descripcion: "Dos cafés o infusiones, dos tostadas, queso y mermeladas, jugo chico y cazuela de frutas." },
      { nombre: "Energético", ruta: "saludables + energeticos/energetico.jpeg", descripcion: "Café o infusión, yogurt con granola y frutas, jugo chico." },
      { nombre: "Especial", ruta: "saludables + energeticos/especial.jpg", descripcion: "Café o infusión, frutas con miel y nueces, tostadas integrales, queso crema y mermelada, jugo de naranja." },
      { nombre: "Saludable Wollen", ruta: "saludables + energeticos/saludable wollen.jpg", descripcion: "Café o infusión, tostón con palta, queso crema y semillas, cazuela de frutas y jugo de naranja." },
      { nombre: "Saludable Wollen y huevo", ruta: "saludables + energeticos/saludable wollen y huevo.jpg", descripcion: "Saludable Wollen, huevo revuelto." },
      { nombre: "Natural", ruta: "saludables + energeticos/natural.jpg", descripcion: "Café o infusión, bowl de yogurt natural con granola y frutas, dip de miel." },
    ],
  },
];

function DesayunosMeriendas() {
  return (
    <div className="pagina-desayunos">
      {/* BOTÓN VOLVER */}
      <Link to="/carta" className="volver">
        ← Volver a la carta
      </Link>

      {/* ENCABEZADO */}
      <header>
        <h1>DESAYUNOS</h1>
        <h2>y Meriendas</h2>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        {secciones.map((seccion) => (
          <section key={seccion.titulo}>
            <h2>{seccion.titulo}</h2>

            {seccion.productos.map((producto) => (
              <div className="item-row" key={producto.nombre}>
                <div className="img-wrap">
                  <img
                    src={`/imagenes_desayunos_meriendas/${producto.ruta}`}
                    alt={producto.nombre}
                  />
                </div>

                <div className="text">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}

export default DesayunosMeriendas;