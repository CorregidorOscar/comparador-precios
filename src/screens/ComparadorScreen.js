import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cargarProductos, obtenerNombresUnicos } from '../controllers/ProductosController';
import ListaProductos from '../components/ListaProductos';

export default function ComparadorScreen() {

  const [productos, setProductos] = useState(cargarProductos());

  const productosUnicos = obtenerNombresUnicos(productos)

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Comparador de Precios</Text>
      <Text style={styles.subtitulo}>
        Precios en negocios de barrio
      </Text>
      <ListaProductos
        productosUnicos={productosUnicos}
        productos={productos}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F7F4EF',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitulo: {
    fontSize: 15,
    color: '#777777',
    marginTop: 5,
    marginBottom: 20,
  },
});