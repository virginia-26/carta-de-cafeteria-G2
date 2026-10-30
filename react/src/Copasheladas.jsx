import { Link } from "react-router";


// Lista de productos: cada uno tiene nombre, imagen y descripción
const copas = [
  { nombre: "FRUTILLA", imagen: "copa_frutilla.png", alt: "Copa helada de frutilla", descripcion: "Base de frutilla, helado de frutilla, merenguitos y salsa de frutilla" },
  { nombre: "NUEZ", imagen: "copa_nuez.png", alt: "Copa helada de nuez", descripcion: "Base de nueces, helado de crema rusa, salsa de chocolate y nueces" },
  { nombre: "BAILEY'S", imagen: "copa_baylis.png", alt: "Copa helada Bailey's", descripcion: "Base de licor de dulce de leche, helado Bailey's y salsa de dulce de leche" },
  { nombre: "OREO", imagen: "copa_oreo.png", alt: "Copa helada Oreo", descripcion: "Base de mini Oreo, helado Oreo, mini Oreo y salsa de dulce de leche" },
  { nombre: "DON PEDRO", imagen: "copa_donpedro.png", alt: "Copa helada Don Pedro", descripcion: "Base de whisky, helado de quinotos al whisky, salsa de caramelo y cubitos o merengues" },
  { nombre: "CEREZA", imagen: "copa_cereza.png", alt: "Copa helada de cereza", descripcion: "" },
  { nombre: "MANTECOL", imagen: "copa_mantecol.png", alt: "Copa helada Mantecol", descripcion: "Base de Mantecol, helado de Mantecol y salsa de caramelo" },
  { nombre: "BANANA SPLIT", imagen: "copa_bananasplit.png", alt: "Copa helada Banana Split", descripcion: "Base de banana, helado Banana Split, banana y salsa de dulce de leche" },
  { nombre: "WÖLLEN", imagen: "copa_wollen.png", alt: "Copa helada Wöllen", descripcion: "Tres sabores, dos toppings y salsa a elección" },
  { nombre: "SCHOKOLADE", imagen: "copa_schokolade.png", alt: "Copa helada Schokolade", descripcion: "Base de chocolate, helado de chocolate con almendras, chips y salsa de chocolate" },
];

function CopasHeladas() {
  return (
    <>
      {/* BOTÓN VOLVER */}
      <div className="titulo-categoria">
        <Link to="/carta" className="volver-categoria">
          ← Volver a la carta
        </Link>
      </div>

      {/* TÍTULO */}
      <h1 className="nombre-categoria">COPAS HELADAS</h1>

      {/* LISTA DE COPAS: una fila por cada elemento de la lista */}
      <table className="carta-productos">
        <tbody>
          {copas.map((copa) => (
            <tr key={copa.nombre}>
              <td>
                <img src={`/imagenes_copas_heladas/${copa.imagen}`} alt={copa.alt} />
              </td>
              <td>
                <strong>{copa.nombre}</strong>
                {copa.descripcion && (
                  <span className="descripcion-producto">{copa.descripcion}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CopasHeladas;