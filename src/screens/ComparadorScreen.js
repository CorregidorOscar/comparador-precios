import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cargarProductos, obtenerNombresUnicos, filtrarProductosPorBusqueda } from '../controllers/ProductosController';

import ListaProductos from '../components/ListaProductos';
import BuscadorProducto from '../components/BuscadorProducto';

export default function ComparadorScreen() {

  const [productos, setProductos] = useState(cargarProductos());
  const [busqueda, setBusqueda] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState('Yerba');
  
  const productosUnicos = obtenerNombresUnicos(productos)
  const productosFiltrados = filtrarProductosPorBusqueda(
    productosUnicos,
    busqueda
  )

  const manejarSeleccionProducto = (nombre) => {
    setProductoSeleccionado((actual) => 
      actual === nombre ? null : nombre
    );
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Comparador de Precios</Text>
      <Text style={styles.subtitulo}>
        Buscá y seleccioná un producto para consultar sus precios
      </Text>

      <BuscadorProducto
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <ListaProductos
        productosUnicos={productosFiltrados}
        productos={productos}
        productoSeleccionado={productoSeleccionado}
        onSeleccionarProducto={manejarSeleccionProducto}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F7F4EF',
    paddingTop: 60,
    paddingHorizontal: 20
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
    marginBottom: 16,
  },
});