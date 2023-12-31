import * as service from "../../services/productos.services.js";

const getProductos = (req, res) => {
  const filter = req.query;
  console.log(req.cuenta)
  service.getProductos(filter).then((productos) => {
    res.status(200).json(productos);
  });
};
const getProductoById = (req, res) => {
  const id = req.params.id;
  service.getProductobyId(id).then((producto) => {
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json();
    }
  });
};

const agregarProducto = async (req, res) => {
  try {
    service
      .createProducto(req.body)
      .then((productoNuevo) => {
        res.status(201).json(productoNuevo);
      })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }

};
//PUT -> REEMPLAZA
const remplazarProducto = (req, res) => {
  const id = req.params.id;

  const producto = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    author: req.body.author,
    image_url: req.body.image_url,
    genre: req.body.genre,
  };

  service.remplazarProducto(id, producto).then((productoEditado) => {
    if (productoEditado) {
      res.status(200).json(productoEditado);
    } else {
      res.status(404).json();
    }
  });
};
//PATCH -> Actualiza


const actualizarProducto = async(req, res) => {
  const id = req.params.id;
  service.editProducto(id, req.body).then((productoEditado) => {
    if (productoEditado) {
      res.status(200).json(productoEditado);
    } else {
      res.status(404).json();
    }
  });
};
//DELETE -> Eliminar
const eliminarProducto = (req, res) => {
  const id = req.params.id;
  service
    .eliminarProducto(id)
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => res.status(500).json());
};

export {
  getProductos,
  getProductoById,
  agregarProducto,
  actualizarProducto,
  remplazarProducto,
  eliminarProducto,
};
