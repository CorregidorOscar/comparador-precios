import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ResumenCompra({
  productosEnCompra,
  comparativaNegocios,
  onLimpiarCompra,
}) {
  if (productosEnCompra.length === 0) {
    return null;
  }

  const menorTotal =
    comparativaNegocios.length > 0 ? comparativaNegocios[0].total : null;

  return (
    <View style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>
          Compra seleccionada ({productosEnCompra.length})
        </Text>

        <Pressable style={styles.botonLimpiar} onPress={onLimpiarCompra}>
          <Text style={styles.textoLimpiar}>Vaciar</Text>
        </Pressable>
      </View>

      <Text style={styles.listaNombres}>{productosEnCompra.join(" • ")}</Text>

      <View style={styles.divisor} />

      <Text style={styles.subtitulo}>Total por negocio:</Text>

      {comparativaNegocios.length === 0 ? (
        <Text style={styles.sinStock}>
          Ningún comercio cuenta con todos los productos seleccionados.
        </Text>
      ) : (
        <View style={styles.listaTotales}>
          {comparativaNegocios.map((item) => {
            const esElMasBarato =
              menorTotal !== null && item.total === menorTotal;

            return (
              <View
                key={item.negocio}
                style={[
                  styles.filaNegocio,
                  esElMasBarato && styles.filaGanadora,
                ]}
              >
                <Text
                  style={[
                    styles.nombreNegocio,
                    esElMasBarato && styles.textoGanador,
                  ]}
                >
                  {item.negocio}
                </Text>

                <Text
                  style={[
                    styles.montoTotal,
                    esElMasBarato && styles.textoGanador,
                  ]}
                >
                  ${item.total.toLocaleString("es-AR")}
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#53745B",
  },
  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  botonLimpiar: {
    backgroundColor: "#FBE9E7",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  textoLimpiar: {
    color: "#B3261E",
    fontSize: 12,
    fontWeight: "600",
  },
  listaNombres: {
    fontSize: 13,
    color: "#53745B",
    fontWeight: "600",
    marginTop: 6,
  },
  divisor: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 10,
  },
  subtitulo: {
    fontSize: 13,
    color: "#777777",
    marginBottom: 6,
  },
  listaTotales: {
    gap: 6,
  },
  filaNegocio: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  filaGanadora: {
    backgroundColor: "#E7EFE8",
  },
  nombreNegocio: {
    fontSize: 14,
    color: "#555555",
  },
  montoTotal: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333333",
  },
  textoGanador: {
    color: "#53745B",
    fontWeight: "bold",
  },
});
