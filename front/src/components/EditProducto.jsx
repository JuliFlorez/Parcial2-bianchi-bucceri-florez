
import React, { useState, useEffect } from 'react';
import { getProductoById, editarProducto } from '../services/productos.services';

const EditProduct = ({ match }) => {
  const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoObtenido = await getProductoById(match.params.id);
        setProducto(productoObtenido);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    fetchProducto();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await editarProducto(match.params.id, producto);
    } catch (error) {
      console.error('Error al editar el producto:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Editar Producto</button>
    </form>
  );
};

export default EditProduct;
