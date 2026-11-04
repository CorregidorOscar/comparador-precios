## Estructura del proyecto

El código está organizado separando los datos, la lógica y las vistas para que sea más cómodo de leer y mantener:

- components: Componentes visuales (Buscador, Lista, Tarjeta, ResumenCompra)
- controllers: Lógica de filtrado, ordenamiento y cálculo de totales
- repositories: Datos locales (array de productos)
- screens: Pantalla principal que maneja los estados (useState)

---

## Cómo correr el proyecto

1. **Instalar las dependencias** (usando `pnpm`):

   ```bash
   pnpm install
   ```

2. **Iniciar el servidor de Expo:**
   ```bash
   pnpm start
   ```

---

## Tecnologías y conceptos usados

- **React Native + Expo**
- Manejo de estado con `useState`
- Componentes nativos (`View`, `Text`, `TextInput`, `Pressable`, `ScrollView`)
- Métodos de arrays en JavaScript (`map`, `filter`, `find`, `reduce`, `sort`) para procesar la información localmente sin base de datos.
