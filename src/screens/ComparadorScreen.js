import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PRODUCTOS_INICIALES } from '../data/productos';

export default function ComparadorScreen() {

    const [productos, setProductos] = useState(PRODUCTOS_INICIALES);

    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comparador de Precios</Text>
        <Text style={styles.subtitle}>
          Negocios de Barrio ({productos.length} precios registrados)
        </Text>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a202c',
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
    marginTop: 4,
  },
});