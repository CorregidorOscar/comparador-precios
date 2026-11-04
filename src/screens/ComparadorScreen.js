import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  calcularCompraCompleta,
  cargarProductos,
  filtrarProductosPorBusqueda,
  obtenerNombresUnicos,
} from "../controllers/ProductosController";

import BuscadorProducto from "../components/BuscadorProducto";
import ListaProductos from "../components/ListaProductos";
import ResumenCompra from "../components/ResumenCompra";

export default function ComparadorScreen() {
  const [productos, setProductos] = useState(cargarProductos());
  const [busqueda, setBusqueda] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState("Yerba");
  const [productosEnCompra, setProductosEnCompra] = useState([]);

  const productosUnicos = obtenerNombresUnicos(productos);
  const productosFiltrados = filtrarProductosPorBusqueda(
    productosUnicos,
    busqueda,
  );

  const manejarSeleccionProducto = (nombre) => {
    setProductoSeleccionado((actual) => (actual === nombre ? null : nombre));
  };

  const comparativaCompra = calcularCompraCompleta(
    productos,
    productosEnCompra,
  );

  const manejarAlternarCompra = (nombre) => {
    setProductosEnCompra((actual) =>
      actual.includes(nombre)
        ? actual.filter((item) => item !== nombre)
        : [...actual, nombre],
    );
  };

  const manejarLimpiarCompra = () => {
    setProductosEnCompra([]);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Comparador de Precios</Text>
      <Text style={styles.subtitulo}>
        Buscá y seleccioná un producto para consultar sus precios
      </Text>

      <BuscadorProducto busqueda={busqueda} setBusqueda={setBusqueda} />

      <ResumenCompra
        productosEnCompra={productosEnCompra}
        comparativaNegocios={comparativaCompra}
        onLimpiarCompra={manejarLimpiarCompra}
      />

      <ListaProductos
        productosUnicos={productosFiltrados}
        productos={productos}
        productoSeleccionado={productoSeleccionado}
        onSeleccionarProducto={manejarSeleccionProducto}
        productosEnCompra={productosEnCompra}
        onAlternarCompra={manejarAlternarCompra}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#F7F4EF",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
  },
  subtitulo: {
    fontSize: 15,
    color: "#777777",
    marginTop: 5,
    marginBottom: 16,
  },
});
