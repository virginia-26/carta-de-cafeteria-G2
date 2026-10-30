// src/data.js
// Datos de la página: los componentes los recorren con .map()

// Horarios de atención de Wöllen.
// dias: 0 = domingo, 1 = lunes ... 6 = sábado. Cada turno va de "desde" a "hasta" (hora de 0 a 23).
export const horarios = [
  {
    id: 1,
    diasTexto: "Lunes a domingo",
    dias: [0, 1, 2, 3, 4, 5, 6],
    textoHora: "8 a 12 y de 15 a 21",
    turnos: [
      { desde: 8, hasta: 12 },
      { desde: 15, hasta: 21 },
    ],
  },
];

// Las novedades son las fotos del carrusel de Inicio (están en public/imagenesinicio).
export const novedades = [
  {
    id: 1,
    titulo: "Nuevas masas finas",
    descripcion: "Ya disponible en Wöllen.",
    imagen: "/imagenesinicio/WhatsApp Image 2026-10-02 at 11.50.50.jpeg",
  },
  {
    id: 2,
    titulo: "Lemon pie",
    descripcion: "Ya disponible en Wöllen.",
    imagen: "/imagenesinicio/WhatsApp Image 2026-10-02 at 11.51.56.jpeg",
  },
  {
    id: 3,
    titulo: "Pistacho y frambuesa",
    descripcion: "Ya disponible en Wöllen.",
    imagen: "/imagenesinicio/WhatsApp Image 2026-10-02 at 11.54.52.jpeg",
  },
  {
    id: 4,
    titulo: "Nutella y ganache",
    descripcion: "Ya disponible en Wöllen.",
    imagen: "/imagenesinicio/WhatsApp Image 2026-10-02 at 13.09.47.jpeg",
  },
  {
    id: 5,
    titulo: "Brunch Wöllen",
    descripcion: "Ya disponible en Wöllen.",
    imagen: "/imagenesinicio/WhatsApp Image 2026-10-02 at 13.11.21.jpeg",
  },
];