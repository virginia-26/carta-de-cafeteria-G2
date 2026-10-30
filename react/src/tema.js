// src/tema.js
// El tema define los colores y las letras que usan los componentes de Material UI
import { createTheme } from "@mui/material/styles";

const tema = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2C4A32" },    // verde
    secondary: { main: "#A9824A" },  // dorado
    background: {
      default: "#F3E9DA",            // crema
      paper: "#FBF7F0",              // blanco cálido
    },
    text: { primary: "#2B1710" },    // marrón oscuro
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    h2: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
    h3: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
    h4: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
  },
});

export default tema;