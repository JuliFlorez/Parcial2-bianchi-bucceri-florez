
import { Container, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducto, deleteProducto } from "../../services/productos.service";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProducto(id).then((data) => setProducto(data));
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteProducto(id);
      navigate("/productos"); 
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };
  const handleEdit = () => {
    navigate(`/productos/${id}/editar`);
  };

  return (
    <Container className="mt-5">
      {producto ? (
        <Card className="d-flex flex-row " style={{ width: "1120px" }}>
          <Card.Img
            src={producto.image_url}
            alt={producto.name}
            style={{ width: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text>{producto.description}</Card.Text>
            <Card.Text>Precio: {producto.price}</Card.Text>
            <div class="mb-3">
    <button class="btn btn-primary">Comprar</button>
</div>

<div class="mb-3">
    <button class="btn btn-primary" onClick={handleEdit}>Editar Producto</button>
    <button class="btn btn-danger ms-2" onClick={handleDelete}>Eliminar Producto</button>
</div>

          </Card.Body>
        </Card>
      ) : (
        <div className="text-center">
          <h1>Cargando...</h1>
        </div>
      )}
    </Container>
  );
};

export default ProductDetailsPage;
