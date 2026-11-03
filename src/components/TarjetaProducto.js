import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function TarjetaProducto({ nombre, precios, seleccionado, onSeleccionar }) {
  return (
    <Pressable
      style={[
          styles.tarjeta,
          seleccionado && styles.tarjetaSeleccionada,
        ]}
      onPress={onSeleccionar}
      accessibilityRole="button"
      accessibilityLabel={`Consultar precios de ${nombre}`}
    >
        <View style={styles.encabeado}>
          <View>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.accionTexto}>
            {seleccionado ? 'Ocultar precios ▲' : 'Tocá para consultar precios ▼'}
          </Text>
        </View>

        <Text style={styles.cantidad}>
          {precios.length} comercios
        </Text>
        </View>

        {seleccionado && (
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
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  tarjetaSeleccionada: {
    borderColor: '#53745B',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  accionTexto: {
    fontSize: 12,
    color: '#777777',
    marginTop: 4,
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
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    gap: 6,
  },
  filaPrecio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 3,
  },
  negocio: {
    fontSize: 14,
    color: '#555555',
  },
  precio: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#53745B',
  },
});