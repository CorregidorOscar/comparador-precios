const productosIniciales = [
  { id: 1, nombre: 'Yerba 1Kg', negocio: 'Despensa María', precio: 3850 },
  { id: 2, nombre: 'Yerba 1Kg', negocio: 'Supermercado Norte', precio: 4950 },
  { id: 3, nombre: 'Yerba 1Kg', negocio: 'Almacén Don José', precio: 4400 },
  { id: 4, nombre: 'Yerba 1Kg', negocio: 'Mayorista El Sol', precio: 4600 },

  { id: 5, nombre: 'Leche 1L', negocio: 'Despensa María', precio: 1950 },
  { id: 6, nombre: 'Leche 1L', negocio: 'Supermercado Norte', precio: 1650 },
  { id: 7, nombre: 'Leche 1L', negocio: 'Almacén Don José', precio: 1650 },
  { id: 8, nombre: 'Leche 1L', negocio: 'Mayorista El Sol', precio: 2100 },

  { id: 9, nombre: 'Fideos 500g', negocio: 'Despensa María', precio: 1350 },
  { id: 10, nombre: 'Fideos 500g', negocio: 'Supermercado Norte', precio: 1500 },
  { id: 11, nombre: 'Fideos 500g', negocio: 'Almacén Don José', precio: 980 },
  { id: 12, nombre: 'Fideos 500g', negocio: 'Mayorista El Sol', precio: 1200 },

  { id: 13, nombre: 'Azúcar 1Kg', negocio: 'Despensa María', precio: 1550 },
  { id: 14, nombre: 'Azúcar 1Kg', negocio: 'Supermercado Norte', precio: 1650 },
  { id: 15, nombre: 'Azúcar 1Kg', negocio: 'Almacén Don José', precio: 1450 },
  { id: 16, nombre: 'Azúcar 1Kg', negocio: 'Mayorista El Sol', precio: 1250 },

  { id: 17, nombre: 'Aceite de Girasol 900cc', negocio: 'Despensa María', precio: 2990 },
  { id: 18, nombre: 'Aceite de Girasol 900cc', negocio: 'Supermercado Norte', precio: 3350 },
  { id: 19, nombre: 'Aceite de Girasol 900cc', negocio: 'Almacén Don José', precio: 3650 },
  { id: 20, nombre: 'Aceite de Girasol 900cc', negocio: 'Mayorista El Sol', precio: 3500 },

  { id: 21, nombre: 'Arroz Largo Fino 1Kg', negocio: 'Despensa María', precio: 2400 },
  { id: 22, nombre: 'Arroz Largo Fino 1Kg', negocio: 'Supermercado Norte', precio: 1950 },
  { id: 23, nombre: 'Arroz Largo Fino 1Kg', negocio: 'Almacén Don José', precio: 2300 },
  { id: 24, nombre: 'Arroz Largo Fino 1Kg', negocio: 'Mayorista El Sol', precio: 2650 },

  { id: 25, nombre: 'Harina de Trigo 000 1Kg', negocio: 'Despensa María', precio: 1150 },
  { id: 26, nombre: 'Harina de Trigo 000 1Kg', negocio: 'Supermercado Norte', precio: 1250 },
  { id: 27, nombre: 'Harina de Trigo 000 1Kg', negocio: 'Almacén Don José', precio: 920 },
  { id: 28, nombre: 'Harina de Trigo 000 1Kg', negocio: 'Mayorista El Sol', precio: 1100 },

  { id: 29, nombre: 'Puré de Tomate 520g', negocio: 'Despensa María', precio: 1100 },
  { id: 30, nombre: 'Puré de Tomate 520g', negocio: 'Supermercado Norte', precio: 1200 },
  { id: 31, nombre: 'Puré de Tomate 520g', negocio: 'Almacén Don José', precio: 1050 },
  { id: 32, nombre: 'Puré de Tomate 520g', negocio: 'Mayorista El Sol', precio: 850 },

  { id: 33, nombre: 'Galletitas de Agua 300g', negocio: 'Despensa María', precio: 1380 },
  { id: 34, nombre: 'Galletitas de Agua 300g', negocio: 'Supermercado Norte', precio: 1850 },
  { id: 35, nombre: 'Galletitas de Agua 300g', negocio: 'Almacén Don José', precio: 1600 },
  { id: 36, nombre: 'Galletitas de Agua 300g', negocio: 'Mayorista El Sol', precio: 1700 },

  { id: 37, nombre: 'Dulce de Leche 400g', negocio: 'Despensa María', precio: 3600 },
  { id: 38, nombre: 'Dulce de Leche 400g', negocio: 'Supermercado Norte', precio: 3100 },
  { id: 39, nombre: 'Dulce de Leche 400g', negocio: 'Almacén Don José', precio: 3500 },
  { id: 40, nombre: 'Dulce de Leche 400g', negocio: 'Mayorista El Sol', precio: 3750 },

  { id: 41, nombre: 'Yerba 500g', negocio: 'Despensa María', precio: 2300 },
  { id: 42, nombre: 'Yerba 500g', negocio: 'Supermercado Norte', precio: 2500 },
  { id: 43, nombre: 'Yerba 500g', negocio: 'Almacén Don José', precio: 2000 },
  { id: 44, nombre: 'Yerba 500g', negocio: 'Mayorista El Sol', precio: 2200 },

  { id: 45, nombre: 'Dulce de Leche 200g', negocio: 'Despensa María', precio: 1800 },
  { id: 46, nombre: 'Dulce de Leche 200g', negocio: 'Supermercado Norte', precio: 1900 },
  { id: 47, nombre: 'Dulce de Leche 200g', negocio: 'Almacén Don José', precio: 1550 },
  { id: 48, nombre: 'Dulce de Leche 200g', negocio: 'Mayorista El Sol', precio: 1550 },
];

export function obtenerProductos() {
  return productosIniciales;
}