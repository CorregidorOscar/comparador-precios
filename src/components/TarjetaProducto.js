import { View, Text, StyleSheet } from 'react-native';

export default function TarjetaProducto({ nombre, precios }) {
  return (
    <View style={styles.tarjeta}>
      <View style={styles.encabeado}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.cantidad}>
          {precios.length} comercios
        </Text>
      </View>

      <View style={styles.listaPrecios}>
        {precios.map((item) => (
          <View key={item.id} style={styles.filaPrecio}>
            <Text style={styles.negocio}>{item.negocio}</Text>
            <Text style={styles.precio}>
              ${item.precio.toLocaleString('es-AR')}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  cantidad: {
    fontSize: 12,
    color: '#53745B',
    backgroundColor: '#E7EFE8',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontWeight: '600',
  },
  listaPrecios: {
    gap: 6,
  },
  filaPrecio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  negocio: {
    fontSize: 14,
    color: '#777777',
  },
  precio: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#53745B',
  },
});