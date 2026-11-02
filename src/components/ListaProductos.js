import { ScrollView, Text, StyleSheet } from 'react-native';
import TarjetaProducto from './TarjetaProducto';
import { obtenerPreciosPorProducto } from '../controllers/ProductosController';

export default function ListaProductos({
  productosUnicos,
  productos,
}) {
  if (productosUnicos.length === 0) {
    return (
      <Text style={styles.vacio}>
        No se encontraron productos disponibles.
      </Text>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {productosUnicos.map((nombreProducto) => {
        const precios = obtenerPreciosPorProducto(
          productos,
          nombreProducto
        );

        return (
          <TarjetaProducto
            key={nombreProducto}
            nombre={nombreProducto}
            precios={precios}
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