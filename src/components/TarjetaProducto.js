import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TarjetaProducto({
  nombre,
  precios,
  menorPrecio,
  seleccionado,
  onSeleccionar,
  enCompra,
  onAlternarCompra,
}) {
  return (
    <Pressable
      style={[styles.tarjeta, seleccionado && styles.tarjetaSeleccionada]}
      onPress={onSeleccionar}
      accessibilityRole="button"
      accessibilityLabel={`Consultar precios de ${nombre}`}
    >
      <View style={styles.encabezado}>
        <View style={styles.infoPrincipal}>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.accionTexto}>
            {seleccionado ? "Ocultar precios" : "Tocá para consultar precios"}
          </Text>
        </View>
        <Pressable
          style={[styles.botonCompra, enCompra && styles.botonCompraActivo]}
          onPress={onAlternarCompra}
        >
          <Text
            style={[
              styles.textoBotonCompra,
              enCompra && styles.textoBotonCompraActivo,
            ]}
          >
            {enCompra ? "✓ En compra" : "+ Compra"}
          </Text>
        </Pressable>
      </View>

      {seleccionado && (
        <View style={styles.detalleContenedor}>
          {/* Lista completa */}
          <View style={styles.listaPrecios}>
            {precios.map((item) => {
              const esElMasBarato =
                menorPrecio && item.precio === menorPrecio.precio;

              return (
                <View
                  key={item.id}
                  style={[
                    styles.filaPrecio,
                    esElMasBarato && styles.filaMasBarata,
                  ]}
                >
                  <View style={styles.negocioContenedor}>
                    <Text
                      style={[
                        styles.negocio,
                        esElMasBarato && styles.textoMasBarato,
                      ]}
                    >
                      {item.negocio}
                    </Text>
                    {esElMasBarato && (
                      <Text style={styles.badgeMejor}>Más barato</Text>
                    )}
                  </View>

                  <Text
                    style={[
                      styles.precio,
                      esElMasBarato && styles.textoMasBarato,
                    ]}
                  >
                    ${item.precio.toLocaleString("es-AR")}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "transparent",
  },
  tarjetaSeleccionada: {
    borderColor: "#53745B",
  },
  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoPrincipal: {
    flex: 1,
    marginRight: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  accionTexto: {
    fontSize: 12,
    color: "#777777",
    marginTop: 4,
  },
  cantidad: {
    fontSize: 12,
    color: "#53745B",
    backgroundColor: "#E7EFE8",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontWeight: "600",
  },
  detalleContenedor: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  listaPrecios: {
    gap: 6,
  },
  filaPrecio: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  filaMasBarata: {
    backgroundColor: "#F7FAF8",
  },
  negocioContenedor: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  negocio: {
    fontSize: 14,
    color: "#555555",
  },
  precio: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333333",
  },
  textoMasBarato: {
    color: "#53745B",
    fontWeight: "bold",
  },
  badgeMejor: {
    fontSize: 10,
    color: "#FFFFFF",
    backgroundColor: "#53745B",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontWeight: "bold",
  },
  botonCompra: {
    backgroundColor: "#E7EFE8",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  botonCompraActivo: {
    backgroundColor: "#53745B",
  },
  textoBotonCompra: {
    fontSize: 12,
    color: "#53745B",
    fontWeight: "bold",
  },
  textoBotonCompraActivo: {
    color: "#FFFFFF",
  },
});
