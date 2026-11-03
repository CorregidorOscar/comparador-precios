import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

export default function BuscadorProducto({ busqueda, setBusqueda }) {
  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder="Buscar producto (ej. Yerba, Leche)..."
        value={busqueda}
        onChangeText={setBusqueda}
      />

      {busqueda.length > 0 && (
        <Pressable
          style={styles.botonLimpiar}
          onPress={() => setBusqueda('')}
        >
          <Text style={styles.textoLimpiar}>Limpiar</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
  },
  botonLimpiar: {
    backgroundColor: '#E7EFE8',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoLimpiar: {
    color: '#53745B',
    fontSize: 13,
    fontWeight: '600',
  },
});