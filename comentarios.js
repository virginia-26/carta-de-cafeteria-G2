document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-comentarios");
  const opiniones = JSON.parse(localStorage.getItem("wollenOpiniones")) || [];

  if (opiniones.length === 0) {
    contenedor.innerHTML =
      "<p>Todavía no hay opiniones. ¡Sé el primero en dejar la tuya!</p>";
    return;
  }

  opiniones
    .slice()
    .reverse()
    .forEach((op) => {
      const estrellas =
        "★".repeat(op.calificacion) + "☆".repeat(5 - op.calificacion);

      const card = document.createElement("div");
      card.className = "comentario-card";
      card.innerHTML = `
        <div class="comentario-header">
          <strong>${op.nombre} ${op.apellido}</strong>
          <span class="estrellas">${estrellas}</span>
        </div>
        <p class="comentario-productos">${op.productos.join(", ") || "No especificó productos"}</p>
        <p class="comentario-texto">"${op.comentario}"</p>
        <span class="comentario-fecha">${op.fecha}</span>
      `;
      contenedor.appendChild(card);
    });
});