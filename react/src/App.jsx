import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
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

import inicioCss from "./archivos_css/inicio.css?url";
import listaproductosCss from "./archivos_css/listaproductos.css?url";
import copasheladasCss from "./archivos_css/copasheladas.css?url";
import bebidasCss from "./archivos_css/bebidas.css?url";
import cafeteriaCss from "./archivos_css/cafeteria.css?url";
import dulcesCss from "./archivos_css/dulces.css?url";
import tortasCss from "./archivos_css/tortasytostados.css?url";
import desayunosCss from "./archivos_css/desayunos-meriendas.css?url";
import loginCss from "./archivos_css/login.css?url";
import opinionCss from "./archivos_css/opinion.css?url";

const estilosPorRuta = {
  "/": inicioCss,
  "/carta": listaproductosCss,
  "/copas-heladas": copasheladasCss,
  "/bebidas": bebidasCss,
  "/cafeteria": cafeteriaCss,
  "/dulces": dulcesCss,
  "/tortas-tostados": tortasCss,
  "/desayunos-meriendas": desayunosCss,
  "/login": loginCss,
  "/opinion": opinionCss,
  "/comentarios": opinionCss,
};

function Estilos() {
  const { pathname } = useLocation();

  useEffect(() => {
    const href = estilosPorRuta[pathname];
    if (!href) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);

    return () => link.remove();
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Estilos />
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