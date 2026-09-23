document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-enviar");

  btn.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    const productos = Array.from(
      document.querySelectorAll('input[name="producto"]:checked')
    ).map((cb) => cb.value);

    const calificacionInput = document.querySelector(
      'input[name="calificacion"]:checked'
    );
    const calificacion = calificacionInput ? calificacionInput.value : null;

    if (!nombre || !apellido || !calificacion || !comentario) {
      alert("Por favor completá nombre, apellido, calificación y comentario.");
      return;
    }

    const nuevaOpinion = {
      nombre,
      apellido,
      productos,
      calificacion,
      comentario,
      fecha: new Date().toLocaleDateString("es-AR"),
    };

    const opiniones = JSON.parse(localStorage.getItem("wollenOpiniones")) || [];
    opiniones.push(nuevaOpinion);
    localStorage.setItem("wollenOpiniones", JSON.stringify(opiniones));

    window.location.href = "comentarios.html";
  });
});