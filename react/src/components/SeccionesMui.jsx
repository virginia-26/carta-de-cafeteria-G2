// src/components/SeccionesMui.jsx
import { ThemeProvider } from "@mui/material";
import tema from "../tema.js";
import Horarios from "./Horarios.jsx";
import Novedades from "./Novedades.jsx";
import FormularioSuscripcion from "./FormularioSuscripcion.jsx";

function SeccionesMui() {
  return (
    <ThemeProvider theme={tema}>
      <Novedades />
      <Horarios />
      <FormularioSuscripcion />
    </ThemeProvider>
  );
}

export default SeccionesMui;