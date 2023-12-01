import React, { useState } from 'react';
import { crearProducto } from '../services/productos.services';

const CrearProducto = () => {
  const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await crearProducto(producto);
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default CrearProducto;
