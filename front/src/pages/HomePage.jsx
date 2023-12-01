import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div>
      <div className="home-container">

        <header>
          <div className="welcome-text">
          <h1><span>L</span><span>I</span><span>B</span><span>R</span><span>O</span><span> </span><span>N</span><span>E</span><span>T</span><span>!</span></h1>
          
          </div>
        
        </header>

        <section>
          <h2 className='t-c'>Libros Destacados</h2>
          <div id="masPopularesCarousel" className="carousel slide mb-5" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="https://m.media-amazon.com/images/I/41XCt9P4s9L._SY445_SX342_.jpg"
                      className="d-block w-100"
                      style={{ maxWidth: '100%', height: '500px' }}
                      alt="Libro Popular 1"
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="https://www.normainfantilyjuvenil.com/ar/uploads/2019/05/resized/800_9789580428633.jpg"
                      className="d-block w-100"
                      style={{ maxWidth: '100%', height: '500px' }}
                      alt="Libro Popular 2"
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg"
                      className="d-block w-100"
                      style={{ maxWidth: '100%', height: '500px' }}
                      alt="Libro Popular 3"
                    />
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="https://www.tematika.com/media/catalog/Ilhsa/Imagenes/710073.jpg"
                      className="d-block w-100"
                      style={{ maxWidth: '100%', height: '500px' }}
                      alt="Libro Popular 4"
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="https://www.tematika.com/media/catalog/Ilhsa/Imagenes/457465.jpg"
                      className="d-block w-100"
                      style={{ maxWidth: '100%', height: '500px' }}
                      alt="Libro Popular 5"
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="http://biblioteca.tajamar.es/wp-content/uploads/2020/02/Las-aventuras-de-Ulises-Sut..jpg"
                      className="d-block w-100"
                      style={{ maxWidth: '100%', height: '500px' }}
                      alt="Libro Popular 6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#masPopularesCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#masPopularesCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </a>
          </div>
        </section>



        <section>
          <h2 className='t-c'>Recomendados</h2>
          <div id="recomendadosCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <img src="https://www.normainfantilyjuvenil.com/ar/uploads/2019/05/resized/800_9789580428633.jpg"
                      className="d-block w-100" style={{ maxWidth: '100%', height: '500px' }} alt="Libro Popular 2" />
                  </div>
                  <div className="col-md-4">
                    <img src="https://www.tematika.com/media/catalog/Ilhsa/Imagenes/457465.jpg" className="d-block w-100"
                      style={{ maxWidth: '100%', height: '500px' }} alt="Libro Popular 3" />
                  </div>
                  <div className="col-md-4">
                    <img src="http://biblioteca.tajamar.es/wp-content/uploads/2020/02/Las-aventuras-de-Ulises-Sut..jpg" className="d-block w-100"
                      style={{ maxWidth: '100%', height: '500px' }} alt="Libro Popular 3" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <img src="https://m.media-amazon.com/images/I/41XCt9P4s9L._SY445_SX342_.jpg" style={{ maxWidth: '100%', height: '500px' }} className="d-block w-100" alt="Libro Popular 4" />
                  </div>
                  <div className="col-md-4">
                    <img src="https://www.tematika.com/media/catalog/Ilhsa/Imagenes/457465.jpg" style={{ maxWidth: '100%', height: '500px' }} className="d-block w-100" alt="Libro Popular 5" />
                  </div>
                  <div className="col-md-4">
                    <img src="https://www.tematika.com/media/catalog/Ilhsa/Imagenes/710073.jpg" style={{ maxWidth: '100%', height: '500px' }} className="d-block w-100" alt="Libro Popular 6" />
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#recomendadosCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#recomendadosCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </a>
          </div>
        </section>



        <section id='categorias'>

          <h2 className='t-c'>Explora Nuestras Categorías</h2>
          <div className="row c1">
            <div className="col-md-6 p-c">
              <h3>Ciencia Ficción</h3>
              <p>Explora nuestra amplia selección de novelas de ciencia ficción. Sumérgete en mundos imaginarios, tecnología avanzada y aventuras galácticas que desafiarán tu mente.</p>
              <a href="/productos" className="btn btn-primary">Ver más</a>
            </div>
            <div className="col-md-6 i-c">
              <img
                src="https://sbslibreria.vteximg.com.br/arquivos/ids/203214-1000-1000/9789505472123.jpg"
                alt="Ciencia Ficción"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row mt-4 c2">
            <div className="col-md-6 i-c">
              <img
                src="https://sbslibreria.vteximg.com.br/arquivos/ids/373325-1000-1000/9789878001005.jpg"
                alt="Mitologia"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 p-c">
              <h3>Mitología</h3>
              <p>Explora los misterios y las historias de la mitología de diferentes culturas. Descubre libros que te llevarán a los tiempos antiguos y a las deidades que moldearon el mundo.</p>
              <a href="/productos" className="btn btn-primary">Ver más</a>
            </div>
          </div>

          <div className="row c3">
            <div className="col-md-6 p-c">
              <h3>Misterio</h3>
              <p>Adéntrate en el misterio y la intriga con nuestra selección de novelas de misterio. Resuelve enigmas, sigue a detectives y vive emocionantes aventuras llenas de suspense.</p>
              <a href="/productos" className="btn btn-primary">Ver más</a>
            </div>
            <div className="col-md-6 i-c">
              <img
                src="https://sbslibreria.vteximg.com.br/arquivos/ids/307314-1000-1000/9788433998859.jpg"
                alt="Misterio"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row mt-4 c4">
            <div className="col-md-6 i-c">
              <img
                src="https://sbslibreria.vteximg.com.br/arquivos/ids/560189-1000-1000/9788418061776.jpg"
                alt="Aventuras"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 p-c">
              <h3>Aventuras</h3>
              <p>Embárcate en emocionantes aventuras con nuestros libros de aventuras. Desde exploraciones en la jungla hasta búsquedas de tesoros, encontrarás historias llenas de acción y emoción.</p>
              <a href="/productos" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </section>


      </div>
      <footer class="bg-dark text-light">
        <div class="container py-4">
          <div class="row">
            <div class="col-md-4">
              <h5>Enlaces rápidos</h5>
              <ul class="list-unstyled">
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Catálogo</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Contacto</h5>
              <address>
                <p>Dirección: 123 Calle Libros, Ciudad</p>
                <p>Email: info@libronet.com</p>
                <p>Teléfono: (123) 456-7890</p>
              </address>
            </div>
            <div class="col-md-4">
              <h5>Síguenos</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center py-3">
          <p>&copy; 2023 LibroNet. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
