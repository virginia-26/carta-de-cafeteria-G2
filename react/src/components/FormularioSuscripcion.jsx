// src/components/FormularioSuscripcion.jsx
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

// Nombre con el que guardamos los datos en localStorage
const CLAVE = "suscripcionWollen";

// Lee lo guardado en el navegador (o null si no hay nada)
function leerSuscripcion() {
  const texto = localStorage.getItem(CLAVE);
  return texto ? JSON.parse(texto) : null;
}

function FormularioSuscripcion() {
  // Lo que escribe la persona (campos controlados)
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [acepto, setAcepto] = useState(false);
  const [error, setError] = useState("");

  // Si ya se suscribió antes, se lee de localStorage apenas aparece el componente
  const [suscripto, setSuscripto] = useState(leerSuscripcion);

  function manejarEnvio(e) {
    e.preventDefault(); // evita que la página se recargue

    // Si no marcó la casilla, mostramos el error y cortamos
    if (!acepto) {
      setError("Tenés que marcar la casilla para recibir novedades.");
      return;
    }

    // Guardamos los datos (localStorage solo guarda texto, por eso JSON.stringify)
    const datos = { nombre, email };
    localStorage.setItem(CLAVE, JSON.stringify(datos));
    setSuscripto(datos);

    // Vaciamos los campos y el error
    setNombre("");
    setEmail("");
    setAcepto(false);
    setError("");
  }

  function darseDeBaja() {
    localStorage.removeItem(CLAVE); // borra lo guardado
    setSuscripto(null);             // vuelve a mostrar el formulario
  }

  return (
    <Container id="suscribite" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Enterate de las novedades de Wöllen
      </Typography>

      <Paper sx={{ p: 3 }}>
        {suscripto ? (
          // Ya está suscripto: mostramos el mensaje y el botón de baja
          <Box>
            <Alert severity="success" sx={{ mb: 2 }}>
              Ya estás suscripto, {suscripto.nombre}
            </Alert>
            <Button variant="outlined" onClick={darseDeBaja}>
              Darme de baja
            </Button>
          </Box>
        ) : (
          // No está suscripto: mostramos el formulario
          <Box
            component="form"
            onSubmit={manejarEnvio}
            sx={{
  display: "flex",
  flexDirection: "column",
  gap: 2,
  "& .MuiInputBase-input": {
    color: "#2B1710 !important",
    WebkitTextFillColor: "#2B1710 !important",
    backgroundColor: "transparent",
  },
}}
          >
            <TextField
              label="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <TextField
              label="Tu email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={acepto}
                  onChange={(e) => setAcepto(e.target.checked)}
                />
              }
              label="Quiero recibir novedades"
            />

            {error && <Alert severity="error">{error}</Alert>}

            <Button type="submit" variant="contained">
              Suscribirme
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default FormularioSuscripcion;