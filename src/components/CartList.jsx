import { Add, Close, Remove } from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/Cart";

const CartList = () => {
  const dispatch = useDispatch();
  const { especificacionesProductoLista } = useSelector((item) => item.cart);
  const [open, setOpen] = useState(false);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const handleAddToCart = (especificacionProducto) => {
    if (especificacionProducto.cantidad < especificacionProducto.stock) {
      dispatch(
        cartActions.addToCart({
          especificacionProducto: {
            id: especificacionProducto.id,
            precio: especificacionProducto.precio,
          },
          cantidadProducto: especificacionProducto.cantidad + 1,
        })
      );
    }
  };
  const handleRemoveToCart = (especificacionProducto) => {
    dispatch(
      cartActions.removeToCart({
        especificacionProducto: {
          id: especificacionProducto.id,
          precio: especificacionProducto.precio,
        },
        cantidadProducto: especificacionProducto.cantidad - 1,
      })
    );
    if (especificacionProducto.cantidad === 1) {
      setOpen(true);
    }
  };
  const handleDeleteToCart = (especificacionProducto) => {
    setOpen(true);
    dispatch(
      cartActions.removeToCart({
        especificacionProducto: {
          id: especificacionProducto.id,
        },
        cantidadProducto: 0,
      })
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="pt-20">
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Producto eliminado
        </Alert>
      </Snackbar>
      <div className="flex  justify-between p-5 relative overflow-auto">
        <div>
          <div className="flex gap-4 font-bold text-center">
            <h2 className="w-20">Producto</h2>
            <h2 className="w-32"> Nombre</h2>
            <h2 className="w-32"> Tipo </h2>
            <h2 className="w-56 ">Descripcion</h2>
            <h2 className="w-10">Precio</h2>
            <h2 className="w-28">Cantidad</h2>
            <h2 className="w-10">Total</h2>
          </div>
          {especificacionesProductoLista.map((especificacionProducto) => (
            <div
              className=" relative text-center"
              key={especificacionProducto.id}>
              <div className="flex gap-4 mt-2 hover:bg-slate-50 shadow-md ">
                <img
                  src={especificacionProducto.producto.imagen}
                  className="w-20 h-20"
                  alt=""
                />
                <h2 className="w-32">
                  {especificacionProducto.producto.nombre}
                </h2>
                <h2 className="w-32 font-bold text-red-600">
                  {especificacionProducto.nombre}
                </h2>
                <h2 className="w-56 ">{especificacionProducto.descripcion}</h2>
                <h2 className="w-10 ">$ {especificacionProducto.precio}</h2>
                <div className="w-28 ">
                  <div className="flex justify-center gap-1 items-center">
                    <button
                      className="text-red-600"
                      onClick={(e) => handleAddToCart(especificacionProducto)}>
                      <Add />
                    </button>
                    <label>{especificacionProducto.cantidad}</label>
                    <button
                      className="text-red-600"
                      onClick={(e) =>
                        handleRemoveToCart(especificacionProducto)
                      }>
                      <Remove />
                    </button>
                  </div>
                </div>
                <h2 className="w-10">{especificacionProducto.total}</h2>
              </div>
              <button
                className="absolute -top-2 -right-3 text-red-600"
                onClick={(e) => handleDeleteToCart(especificacionProducto)}>
                <Close />
              </button>
            </div>
          ))}
        </div>

        <div className=" flex flex-col text-center justify-between bg-zinc-700 p-4 text-white w-72  h-40">
          <h2 className="font-bold">TOTAL</h2>
          <div className="flex gap-2 justify-between">
            <span className="font-semibold">Total:</span>
            <h2>$ {cantidadTotal}</h2>
          </div>
          <button className="bg-red-600 p-2 rounded-sm w-full">ACEPTAR</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
