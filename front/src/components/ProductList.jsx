import ProductListItem from "./ProductListItem";
import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const ProductList = ({ list }) => {
  const [texto, setTexto] = useState('');
  const listFilter = useMemo(() => list.filter((producto) => {
    return producto.name.toLowerCase().includes(texto);
  }), [list, texto]);

  const filtrar = useCallback((e) => {
    setTexto(e.target.value.toLowerCase());
  }, [setTexto]);

  return (
    <div className="d-flex align-items-center" style={{ height: "100%" }}>
      <Row className="w-100 justify-content-center">
        <Col md={12} className="my-3 text-center">
          <form className="d-inline-block p-3 rounded bg-dark">
            <label htmlFor="filtro" className="mr-2 text-light">Filtro:</label>
            <input
              id="filtro"
              className="product-list__filter form-control"
              type="text"
              onChange={filtrar}
            />
          </form>
          <Link to="/productos/crear" className="btn btn-primary">
          Crear Producto
        </Link>
        </Col>
        {listFilter.map((producto) => (
          
        <Col key={producto._id} md={4} className="my-3">
            <div className=" cards"> 
            
              <ProductListItem producto={producto} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

ProductList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ProductList;


