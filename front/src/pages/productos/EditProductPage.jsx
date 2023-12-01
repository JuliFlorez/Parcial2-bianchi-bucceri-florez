import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getProducto, editarProducto } from "../../services/productos.service";

const EditProductPage = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProducto(id).then((data) => {
      setProducto(data)
    });
  }, [id]);

  const handleInputChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = async () => {
    try {
      await editarProducto(id, producto);

      navigate(`/productos/${id}`);
    } catch (error) {
      console.error("Error al editar el producto:", error);
    }
  };

  return (
    <Container className="mt-5">
      {producto ? (
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del producto"
              name="name"
              value={producto.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Precio del producto"
              name="price"
              value={producto.price}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Descripción del producto"
              name="description"
              value={producto.description}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Imagen del producto"
              name="image_url"
              value={producto.image_url}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleEdit}>
            Guardar Cambios
          </Button>
        </Form>
      ) : (
        <div className="text-center">
          <h1>Cargando...</h1>
        </div>
      )}
    </Container>
  );
};

export default EditProductPage;
