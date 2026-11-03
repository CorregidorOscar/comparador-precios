import { ScrollView, Text, StyleSheet } from 'react-native';
import TarjetaProducto from './TarjetaProducto';
import { obtenerPreciosPorProducto } from '../controllers/ProductosController';

export default function ListaProductos({
  productosUnicos,
  productos,
  productoSeleccionado,
  onSeleccionarProducto,
}) {
  if (productosUnicos.length === 0) {
    return (
      <Text style={styles.vacio}>
        No se encontraron productos disponibles.
      </Text>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
      {productosUnicos.map((nombreProducto) => {
        const precios = obtenerPreciosPorProducto(
          productos,
          nombreProducto
        );

        const estaSeleccinado = productoSeleccionado === nombreProducto;

        return (
          <TarjetaProducto
            key={nombreProducto}
            nombre={nombreProducto}
            precios={precios}
            seleccionado={estaSeleccinado}
            onSeleccionar={ () => onSeleccionarProducto(nombreProducto)}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  vacio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777777',
  },
});