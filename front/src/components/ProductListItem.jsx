import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './productListItem.css';

const ProductListItem = ({ producto, onEdit, onDelete }) => {
  const { _id, name, price, description, image_url } = producto;

  return (
    <Card style={{ width: '18rem' }} className="product-list-item">
      <Card.Img
        variant="top"
        src={image_url}
        alt=""
        loading="lazy"
        width={400} 
        height={400} 
        className="card-img-top"
      />

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Precio: {price}</Card.Text>
        <Link className="btn btn-primary" to={`/productos/${_id}`}>
          Ver producto
        </Link>
       
      </Card.Body>
    </Card>
  );
};

export default ProductListItem;

