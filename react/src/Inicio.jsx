import "./archivos_css/inicio.css";
import { Link } from "react-router";
function Inicio() {
  return (
    <>
      {/* BLOQUE 1 - BANNER DE NOVEDADES */}
      <section className="carrusel-novedades">
        <div className="carrusel-track">
          <img src="/imagenesinicio/WhatsApp Image 2026-10-02 at 11.50.50.jpeg" alt="Nuevas masas finas" className="carrusel-img img1" />
          <img src="/imagenesinicio/WhatsApp Image 2026-10-02 at 11.51.56.jpeg" alt="Lemon pie" className="carrusel-img img2" />
          <img src="/imagenesinicio/WhatsApp Image 2026-10-02 at 11.54.52.jpeg" alt="Pistacho y frambuesa" className="carrusel-img img3" />
          <img src="/imagenesinicio/WhatsApp Image 2026-10-02 at 13.09.47.jpeg" alt="Nutella y ganache" className="carrusel-img img4" />
          <img src="/imagenesinicio/WhatsApp Image 2026-10-02 at 13.11.21.jpeg" alt="Brunch Wöllen" className="carrusel-img img5" />
        </div>

        <div className="carrusel-overlay">
          <p>ÚLTIMAS NOVEDADES</p>
        </div>
      </section>

      {/* BLOQUE 2 - ENCABEZADO */}
      <header>
        <div className="header-contenido">
          <img
            src="/imagenes_de_vir/LOGO.jpeg"
            alt="Logo de Wöllen Heladería y Cafetería"
            className="logo"
          />

          <div className="header-texto">
            <h1>WÖLLEN</h1>
            <p>Swiss Ice Cream &amp; Specialty Coffee</p>
          </div>

          <nav className="nav-principal">
            <a
              href="https://www.instagram.com/wollenheladeriasanfrancisco/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONOCENOS
            </a>

            <Link to="/login">OPINÁ</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* BLOQUE 3 - PRESENTACIÓN */}
        <section className="presentacion">
          <div className="contenido-presentacion">
            <h2>WÖLLEN</h2>
            <h3>Swiss Ice Cream &amp; Specialty Coffee</h3>
            <hr />

            <p className="frase-principal">UN MOMENTO PARA DISFRUTAR</p>

            <p className="descripcion">
              Desde el corazón de los bosques alpinos, Wöllen trae a tu mesa una
              experiencia que combina la tradición suiza con los sabores
              auténticos de cada propuesta.
            </p>

            <div className="acciones">
                <Link to="/carta" className="boton-carta">
                 VER LA CARTA
                </Link>

            </div>
          </div>
        </section>

        {/* BLOQUE 4 - VIDEO */}
        <section className="seccion-video">
          <div className="contenido-video">
            <p className="video-etiqueta">CONOCÉ WÖLLEN</p>
            <h2 className="video-titulo">Viví la experiencia</h2>
            <hr />

            <div className="video-marco">
              <iframe
                className="video-wollen"
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fheladeriaswollenoficial%2Fvideos%2Fwollen-experience%2F116662963667083%2F&show_text=false&width=560"
                title="Wöllen Experience"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="lazy"
                scrolling="no"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* BLOQUE 5 - PIE DE PÁGINA */}
      <footer>
        <p>Wöllen Heladería y Cafetería</p>
      </footer>
    </>
  );
}

export default Inicio;