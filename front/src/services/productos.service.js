import { call, post, put, remove } from "./http.service";

export function getProductos() {
  return call({ uri: "productos" });
}

export function getProducto(id) {
  return call({ uri: `productos/${id}` });
}

export function crearProducto(producto) {
  return post({ uri: "productos", data: producto });
}

export function editarProducto(id, producto) {
  return put({ uri: `productos/${id}`, data: producto });
}

export function deleteProducto(id) {
  return remove({ uri: `productos/${id}` });
}


export default {
  getProductos,
  getProducto,
  crearProducto,
  editarProducto,
  deleteProducto
};