import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearProducto } from "../services/productos.service";

const CrearProductoForm = () => {
  const [libro, setLibro] = useState({
    name: "",
    author: "",
    price: 0,
    description: "",
    genre: "",
    image_url: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLibro({ ...libro, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await crearProducto(libro);
      navigate(`/productos/${response._id}`);
    } catch (error) {
      console.error("Error al crear el libro:", error);
    }
  };

  return (
<div class="container">
  <h2>Crear Libro</h2>
  <form class="row g-3" onSubmit={handleSubmit}>
    <div class="col-md-6">
      <label for="inputNombre" class="form-label">Nombre:</label>
      <input
        type="text"
        class="form-control"
        id="inputNombre"
        name="name"
        value={libro.name}
        onChange={handleChange}
        required
      />
    </div>
    <div class="col-md-6">
      <label for="inputAutor" class="form-label">Autor:</label>
      <input
        type="text"
        class="form-control"
        id="inputAutor"
        name="author"
        value={libro.author}
        onChange={handleChange}
        required
      />
    </div>
    <div class="col-md-6">
      <label for="inputPrecio" class="form-label">Precio:</label>
      <input
        type="number"
        class="form-control"
        id="inputPrecio"
        name="price"
        value={libro.price}
        onChange={handleChange}
        required
      />
    </div>
    <div class="col-md-6">
      <label for="inputDescripcion" class="form-label">Descripción:</label>
      <textarea
        class="form-control"
        id="inputDescripcion"
        name="description"
        value={libro.description}
        onChange={handleChange}
        required
      ></textarea>
    </div>
    <div class="col-md-6">
      <label for="inputGenero" class="form-label">Género:</label>
      <input
        type="text"
        class="form-control"
        id="inputGenero"
        name="genre"
        value={libro.genre}
        onChange={handleChange}
        required
      />
    </div>
    <div class="col-md-6">
      <label for="inputImagen" class="form-label">URL de la imagen:</label>
      <input
        type="text"
        class="form-control"
        id="inputImagen"
        name="image_url"
        value={libro.image_url}
        onChange={handleChange}
        required
      />
    </div>
    {/* Puedes agregar más campos según sea necesario */}
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Crear Libro</button>
    </div>
  </form>
</div>
  );
};

export default CrearProductoForm;
