import { Link } from "react-router";


function ListaProductos() {
  return (
    <>
      {/* BLOQUE 1 - ENLACE PARA VOLVER AL INICIO */}
      <p className="contenedor-volver">
        <Link to="/" className="volver-inicio">
          ← Volver al inicio
        </Link>
      </p>

      {/* BLOQUE 2 - TÍTULO */}
      <h1 className="titulo-principal">
        ¿Qué te tienta <span className="palabra-destacada">hoy</span>?
      </h1>

      <p className="subtitulo-principal">
        Elegí una categoría y descubrí la carta completa
      </p>

      <hr className="linea-divisoria" />

      {/* BLOQUE 3 - CATEGORÍAS */}
      <main className="grilla-categorias">
        <table>
          <tbody>
            <tr>
              <td>
                <Link to="/desayunos-meriendas" className="boton-categoria">
                  <img src="/imageneslistaproductos/desayunosymeriendas.png" alt="Desayunos y Meriendas" />
                  <span className="texto-categoria">Desayunos y Meriendas</span>
                  <span className="hint">Ver categoría</span>
                </Link>
              </td>
              <td>
                <Link to="/tortas-tostados" className="boton-categoria">
                  <img src="/imageneslistaproductos/tortas.png" alt="Tortas y Tostados" />
                  <span className="texto-categoria">Tortas y Tostados</span>
                  <span className="hint">Ver categoría</span>
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link to="/dulces" className="boton-categoria">
                  <img src="/imageneslistaproductos/dulces,clasicos.png" alt="Dulces, Clásicos y Tentaciones" />
                  <span className="texto-categoria">Dulces, Clásicos y Tentaciones</span>
                  <span className="hint">Ver categoría</span>
                </Link>
              </td>
              <td>
                <Link to="/cafeteria" className="boton-categoria">
                  <img src="/imageneslistaproductos/cafe.png" alt="Cafetería" />
                  <span className="texto-categoria">Cafetería</span>
                  <span className="hint">Ver categoría</span>
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link to="/bebidas" className="boton-categoria">
                  <img src="/imageneslistaproductos/bebidas.png" alt="Bebidas" />
                  <span className="texto-categoria">Bebidas</span>
                  <span className="hint">Ver categoría</span>
                </Link>
              </td>
              <td>
                <Link to="/copas-heladas" className="boton-categoria">
                  <img src="/imageneslistaproductos/copahelada.png" alt="Copas Heladas" />
                  <span className="texto-categoria">Copas Heladas</span>
                  <span className="hint">Ver categoría</span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default ListaProductos;