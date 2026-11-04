import { ScrollView, StyleSheet, Text } from "react-native";
import {
  obtenerMenorPrecio,
  obtenerPreciosPorProducto,
} from "../controllers/ProductosController";
import TarjetaProducto from "./TarjetaProducto";

export default function ListaProductos({
  productosUnicos,
  productos,
  productoSeleccionado,
  onSeleccionarProducto,
  productosEnCompra,
  onAlternarCompra,
}) {
  if (productosUnicos.length === 0) {
    return (
      <Text style={styles.vacio}>No se encontraron productos disponibles.</Text>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {productosUnicos.map((nombreProducto) => {
        const precios = obtenerPreciosPorProducto(productos, nombreProducto);

        const menorPrecio = obtenerMenorPrecio(precios);
        const estaSeleccionado = productoSeleccionado === nombreProducto;

        const estaEnCompra = productosEnCompra.includes(nombreProducto);

        return (
          <TarjetaProducto
            key={nombreProducto}
            nombre={nombreProducto}
            precios={precios}
            menorPrecio={menorPrecio}
            seleccionado={estaSeleccionado}
            onSeleccionar={() => onSeleccionarProducto(nombreProducto)}
            enCompra={estaEnCompra}
            onAlternarCompra={() => onAlternarCompra(nombreProducto)}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  vacio: {
    textAlign: "center",
    marginTop: 20,
    color: "#777777",
  },
});
