import React from 'react';
import './SupportPage.css';

const SupportPage = () => {
  return (
    <div>
      <div className="container support">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center">Soporte</h2>
            <p>
              En LibroNet, tu satisfacción es nuestra prioridad. Estamos aquí para brindarte un servicio excepcional y
              resolver cualquier pregunta o inquietud que puedas tener.
            </p>
            <p>
              Nuestro equipo de soporte está compuesto por expertos en la industria y amantes de los libros que están listos
              para ayudarte en cada paso del camino. Ya sea que necesites asistencia con un pedido, tengas preguntas sobre
              un libro en particular o simplemente desees obtener recomendaciones de lectura, estamos a tu disposición.
            </p>
            <p>
              Para ponerte en contacto con nuestro equipo de soporte, puedes utilizar cualquiera de las siguientes opciones:
            </p>
            <ul>
              <li>
                <strong>Chat en Vivo:</strong> Nuestro chat en vivo está disponible durante el horario comercial para
                responder a tus preguntas de manera inmediata.
              </li>
              <li>
                <strong>Correo Electrónico:</strong> Si prefieres comunicarte por correo electrónico, puedes escribirnos a
                support@libronet.com y te responderemos en un plazo de 24 horas.
              </li>
              <li>
                <strong>Teléfono:</strong> Si deseas hablar con un representante de soporte por teléfono, llama al
                +1-800-123-4567 durante nuestro horario de atención telefónica.
              </li>
            </ul>
            <p>
              También te invitamos a consultar nuestra sección de Preguntas Frecuentes, donde encontrarás respuestas a
              muchas de las preguntas comunes que los clientes suelen hacer.
            </p>
            <p>
              En LibroNet, estamos comprometidos a brindarte la mejor experiencia de compra de libros en línea. No dudes en
              ponerte en contacto con nosotros en cualquier momento, ¡estamos aquí para ayudarte a encontrar el libro
              perfecto y hacer que tu experiencia de lectura sea excepcional!
            </p>
          </div>
        </div>
        <br />
        <div className="text-center img-soporte">
          <img src="https://www.securitec.pe/blog/wp-content/uploads/2022/07/soporte-tecnico-via-chat-tips-1024x576.jpg" alt="" />
        </div>
        <br />
      </div>
      <footer className="bg-dark text-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
              <h5>Enlaces rápidos</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="/productos">Catálogo</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contacto</h5>
              <address>
                <p>Dirección: 123 Calle Libros, Ciudad</p>
                <p>Email: info@libronet.com</p>
                <p>Teléfono: (123) 456-7890</p>
              </address>
            </div>
            <div className="col-md-4">
              <h5>Síguenos</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <p>&copy; 2023 LibroNet. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default SupportPage;
