// src/components/Novedades.jsx
import { Link } from "react-router";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { novedades } from "../data.js";

function Novedades() {
  return (
    <Container id="novedades" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Novedades
      </Typography>

      {/* Grilla: 1 columna en celular, 2 en tablet y 3 en pantallas grandes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {/* Una tarjeta por cada novedad de data.js */}
        {novedades.map((novedad) => (
          <Card key={novedad.id}>
            <CardMedia
              component="img"
              height="200"
              image={novedad.imagen}
              alt={novedad.titulo}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                {novedad.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {novedad.descripcion}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/carta">
                Ver la carta
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Novedades;