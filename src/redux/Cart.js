import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    especificacionesProductoLista: [],
    cantidad: 0,
    cantidadCart: 0,
  },
  reducers: {
    addToCart(state, action) {
      const { especificacionProducto, cantidadProducto } = action.payload;
      const { especificacionesProductoLista } = state;
      const existeProductoDetalle = especificacionesProductoLista.find(
        (item) => item.id === especificacionProducto.id
      );

      if (!existeProductoDetalle) {
        especificacionesProductoLista.push({
          id: especificacionProducto.id,
          producto: especificacionProducto.producto,
          nombre: especificacionProducto.nombre,
          descripcion: especificacionProducto.descripcion,
          precio: especificacionProducto.precio,
          stock: especificacionProducto.stock,
          cantidad: cantidadProducto,
          total: especificacionProducto.precio * cantidadProducto,
          principal: especificacionProducto.principal,
        });
        state.cantidadCart++;
      } else {
        existeProductoDetalle.precio = especificacionProducto.precio;
        existeProductoDetalle.cantidad = cantidadProducto;
        existeProductoDetalle.total =
          especificacionProducto.precio * cantidadProducto;
      }
    },
    removeToCart(state, action) {
      const { especificacionProducto, cantidadProducto } = action.payload;
      const { especificacionesProductoLista } = state;
      const existeProductoDetalle = especificacionesProductoLista.find(
        (item) => item.id === especificacionProducto.id
      );
      if (existeProductoDetalle) {
        if (cantidadProducto === 0) {
          state.especificacionesProductoLista =
            especificacionesProductoLista.filter(
              (_especificacionProducto) =>
                _especificacionProducto.id !== especificacionProducto.id
            );
          state.cantidadCart--;
        } else {
          existeProductoDetalle.total =
            cantidadProducto * especificacionProducto.precio;
          existeProductoDetalle.cantidad = cantidadProducto;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
