import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./Inicio.jsx";
import ListaProductos from "./Listaproductos.jsx";
import CopasHeladas from "./Copasheladas.jsx";
import Bebidas from "./Bebidas.jsx";
import Cafeteria from "./Cafeteria.jsx";
import Dulces from "./Dulces.jsx";
import TortasTostados from "./Tortasytostados.jsx";
import DesayunosMeriendas from "./DesayunosMeriendas.jsx";
import Login from "./Login.jsx";
import Opinion from "./Opinion.jsx";
import Comentarios from "./Comentarios.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carta" element={<ListaProductos />} />
        <Route path="/copas-heladas" element={<CopasHeladas />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/cafeteria" element={<Cafeteria />} />
        <Route path="/dulces" element={<Dulces />} />
        <Route path="/tortas-tostados" element={<TortasTostados />} />
        <Route path="/desayunos-meriendas" element={<DesayunosMeriendas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/comentarios" element={<Comentarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;