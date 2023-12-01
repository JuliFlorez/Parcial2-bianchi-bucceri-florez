
import React, { useState, useEffect } from 'react';
import { getProductoById, eliminarProducto } from '../services/productos.services';

const EliminarProducto = ({ match }) => {
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

  const handleEliminar = async () => {
    try {
      await eliminarProducto(match.params.id);
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  return (
    <div>
      <button onClick={handleEliminar}>Eliminar Producto</button>
    </div>
  );
};

export default EliminarProducto;
    