import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { useNavigate, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { fetchProductos } from "../../store/reducers/productosReducer";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

export default function ProductsListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productosData = useSelector((state) => state.productos.items);
  const loading = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

  useEffect(() => {
    dispatch(fetchProductos())
  }, []);



  if (loading) return <CircularProgress />
  if (error) return <div> {error} </div>

  return (
    <div>
      <div className="una clase, container">
        <ProductList list={productosData}
        />
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
  )
}
