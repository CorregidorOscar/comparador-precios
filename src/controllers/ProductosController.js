import { obtenerProductos } from '../repositories/ProductosRepository';

export function cargarProductos() {
  return obtenerProductos();
}

// Extrae los nombres de productos sin repetir para armar el catálogo
export function obtenerNombresUnicos(productos) {
  const nombres = productos.map((item) => item.nombre);
  return [...new Set(nombres)];
}

export function obtenerPreciosPorProducto(productos, nombreProducto) {
  return productos.filter((item) => item.nombre === nombreProducto);
}

export function filtrarProductosPorBusqueda(nombresUnicos, busqueda) {
  const textoLimpio = busqueda.trim().toLowerCase();

  if (!textoLimpio) {
    return nombresUnicos;
  }

  return nombresUnicos.filter((nombre) =>
    nombre.toLowerCase().includes(textoLimpio)
  );
}