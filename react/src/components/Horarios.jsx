// src/components/Horarios.jsx
import { useState, useEffect } from "react";
import {
  Box,
  Chip,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { horarios } from "../data.js";

// Devuelve true si en este momento Wöllen está abierto
function estaAbierto() {
  const ahora = new Date();
  const dia = ahora.getDay();   // 0 = domingo ... 6 = sábado
  const hora = ahora.getHours(); // de 0 a 23

  // some: da true si al menos un horario cumple la condición
  return horarios.some(
    (h) =>
      h.dias.includes(dia) &&
      h.turnos.some((turno) => hora >= turno.desde && hora < turno.hasta)
  );
}

function Horarios() {
  // Estado: si está abierto o no (se calcula al aparecer)
  const [abierto, setAbierto] = useState(estaAbierto);

  // Efecto: revisa de nuevo cada 60 segundos
  useEffect(() => {
    const intervalo = setInterval(() => setAbierto(estaAbierto()), 60000);

    // Al desaparecer el componente, frena el reloj
    return () => clearInterval(intervalo);
  }, []);

  return (
    <Container id="horarios" sx={{ py: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <Typography variant="h4">Horarios</Typography>
        <Chip
          label={abierto ? "ABIERTO AHORA" : "CERRADO"}
          color={abierto ? "primary" : "default"}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Días</TableCell>
              <TableCell>Horario</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {horarios.map((horario) => (
              <TableRow key={horario.id}>
                <TableCell>{horario.diasTexto}</TableCell>
                <TableCell>{horario.textoHora}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Horarios;