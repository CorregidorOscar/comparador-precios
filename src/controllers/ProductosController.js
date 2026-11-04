import { obtenerProductos } from "../repositories/ProductosRepository";

export function cargarProductos() {
  return obtenerProductos();
}

// Extrae los nombres de productos sin repetir para armar el catálogo
export function obtenerNombresUnicos(productos) {
  const nombres = productos.map((item) => item.nombre);
  return [...new Set(nombres)];
}

export function obtenerPreciosPorProducto(productos, nombreProducto) {
  return productos
    .filter((item) => item.nombre === nombreProducto)
    .sort((a, b) => a.precio - b.precio);
}

export function filtrarProductosPorBusqueda(nombresUnicos, busqueda) {
  const textoLimpio = busqueda.trim().toLowerCase();

  if (!textoLimpio) {
    return nombresUnicos;
  }

  return nombresUnicos.filter((nombre) =>
    nombre.toLowerCase().includes(textoLimpio),
  );
}

export function obtenerMenorPrecio(preciosOrdenados) {
  if (!preciosOrdenados || preciosOrdenados.length === 0) {
    return null;
  }

  return preciosOrdenados[0];
}

// Calcula el costo total de una lista y los ordena de menor a mayor
export function calcularCompraCompleta(productos, productosEnCompra) {
  if (!productosEnCompra || productosEnCompra.length === 0) {
    return [];
  }

  // Nombres de todos los negocios sin repetir
  const negociosUnicos = [...new Set(productos.map((item) => item.negocio))];

  const totalesPorNegocio = negociosUnicos.reduce(
    (acumulador, nombreNegocio) => {
      let total = 0;
      let productosDisponibles = 0;

      productosEnCompra.forEach((nombreProducto) => {
        const productoEncontrado = productos.find(
          (item) =>
            item.negocio === nombreNegocio && item.nombre === nombreProducto,
        );

        if (productoEncontrado) {
          total += productoEncontrado.precio;
          productosDisponibles += 1;
        }
      });

      if (productosDisponibles === productosEnCompra.length) {
        acumulador.push({
          negocio: nombreNegocio,
          total,
        });
      }

      return acumulador;
    },
    [],
  );

  // Filtro de negocios que tienen los productos y orden menor a mayor
  return totalesPorNegocio.sort((a, b) => a.total - b.total);
}
