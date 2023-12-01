import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
    <div className="container about-us">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="text-center">Sobre Nosotros</h2>
          <p>
            En LibroNet, nos apasiona la lectura y creemos que los libros pueden cambiar vidas. Nuestra misión es
            proporcionar acceso a una amplia variedad de libros para lectores de todas las edades e intereses. Desde
            novelas de fantasía hasta libros de no ficción, tenemos algo para todos.
          </p>
          <div className="row">
            <div className="col-md-6 i-s">
              <img src="https://i.pinimg.com/736x/6a/28/54/6a28540c8e509f5418042e2c024ebca8.jpg" alt="Nuestra Oficina" className="img-fluid float-start" />
            </div>
            <div className="col-md-6 t-s">
              <p>
                Fundada en 20XX, nuestra tienda en línea se ha convertido en un destino confiable para los amantes de los
                libros. Trabajamos con autores, editoriales y distribuidores para ofrecer una selección diversa y de alta
                calidad. Desde novelas de fantasía hasta libros de no ficción, tenemos algo para todos los gustos. Nuestra
                visión es convertirnos en la mejor plataforma en línea para la adquisición y disfrute de libros en todo el
                mundo.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 t-s">
              <p>
                Nuestro equipo está compuesto por apasionados lectores y expertos en la industria editorial. Estamos aquí
                para ayudarte a encontrar el libro perfecto y brindarte una experiencia de compra excepcional. Nos
                enorgullece trabajar en estrecha colaboración con autores y editoriales para garantizar que nuestros
                clientes tengan acceso a las últimas novedades y los clásicos eternos. Nos esforzamos por ofrecer un
                servicio de atención al cliente excepcional y estamos comprometidos a convertirnos en la primera opción
                para los amantes de los libros en todo el mundo.
              </p>
            </div>
            <div className="col-md-6 i-s">
              <img src="https://idesaa.edu.mx/blog/wp-content/uploads/2020/02/beneficios-trabajo-en-equipo.jpg" alt="Nuestro Equipo" className="img-fluid float-end" />
            </div>
          </div>
          <h3 className="text-center">Nuestra Historia</h3>
          <p>
            Desde nuestros modestos comienzos como una pequeña librería local, hemos crecido y evolucionado para
            convertirnos en un referente en la industria. Nuestra dedicación a la excelencia y la satisfacción del cliente
            ha sido el motor de nuestro éxito. A lo largo de los años, hemos superado desafíos y hemos crecido en tamaño y
            alcance, convirtiéndonos en una fuente confiable para lectores de todas partes.
          </p>
          <div className="row">
            <div className="col-md-6 i-s">
              <img src="https://media.lmneuquen.com/p/743b51dcda145ae26d0fa0fad41b3877/adjuntos/195/imagenes/006/902/0006902064/770x0/smart/siringa-kune-grimberg-2jpg.jpg" alt="Nuestra Historia" className="img-fluid float-start" />
            </div>
            <div className="col-md-6 t-s">
              <p>
                Nuestra historia es una prueba de nuestra dedicación y pasión por los libros. Hemos enfrentado obstáculos
                y desafíos con determinación, lo que nos ha llevado a crecer en tamaño y alcance. Continuamos
                comprometidos con nuestro objetivo de ser un referente en la industria editorial y proporcionar a los
                lectores una amplia gama de opciones de lectura.
              </p>
            </div>
          </div>
          <h3 className="text-center">Nuestra Misión</h3>
          <p>
            Nuestra misión es inspirar y enriquecer las vidas de las personas a través de la lectura. Creemos en el poder
            de los libros para transformar el mundo y queremos ser un puente entre los lectores y el conocimiento. Estamos
            comprometidos a ofrecer libros de calidad y a fomentar la pasión por la lectura en todo el mundo. Nuestra
            misión es lo que nos impulsa todos los días, y trabajamos incansablemente para cumplirla.
          </p>
          <div className="row">
            <div className="col-md-6 i-s">
              <img src="https://www.mbaonline.es/images/easyblog_articles/7/b2ap3_large_vision-mision-valores-empresa.jpg" alt="Nuestra Misión" className="img-fluid float-end" />
            </div>
            <div className="col-md-6 t-s">
              <p>
                En LibroNet, creemos en el poder transformador de la lectura. Nuestra misión es inspirar y enriquecer las
                vidas de las personas a través de la lectura. Nos esforzamos por ofrecer una amplia variedad de libros de
                calidad para satisfacer los intereses de todos los lectores. Trabajamos en estrecha colaboración con
                autores y editoriales para cumplir nuestra misión y fomentar la pasión por la lectura en todo el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <footer className="bg-dark text-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
              <h5>Enlaces rápidos</h5>
              <ul className="list-unstyled">
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Catálogo</a></li>
                <li><a href="/contacto">Contacto</a></li>
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
                  <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
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

export default AboutPage;
