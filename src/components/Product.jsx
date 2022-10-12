import React, { useEffect, useState } from "react";
import { getProducto } from "../services/ProductService";
import { useLocation } from "react-router";
import { getProductoDetalles } from "../services/ProductoDetalleService";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/Cart";
import { Add, Favorite, Remove } from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";

const Product = () => {
  const { pathname } = useLocation();
  const idProductoSeleccionado = pathname.split("/")["2"];
  const dispatch = useDispatch();

  const { especificacionesProductoLista } = useSelector((item) => item.cart);

  const [producto, setProducto] = useState({});
  const [especificacionesProductos, setEspecificacionesProductos] = useState(
    []
  );
  const [especificacionProducto, setEspecificacionProducto] = useState({});
  const [cantidadProducto, setCantidadProducto] = useState(1);
  const [idEspecificacionProducto, setIdEspecificacionProducto] = useState(0);
  const [unidadesDisponibles, setUnidadesDisponibles] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loadProducto = () => {
      getProducto(idProductoSeleccionado).then((_producto) => {
        setProducto(_producto);
      });
    };
    const loadEspecificacionesProductos = () => {
      getProductoDetalles().then((_productoDetalles) => {
        setEspecificacionesProductos(_productoDetalles);
        getProducto(idProductoSeleccionado).then((_producto) => {
          _productoDetalles.filter((_productoDetalle) => {
            if (
              _productoDetalle.producto.id === _producto.id &&
              _productoDetalle.principal === true
            ) {
              setEspecificacionProducto(_productoDetalle);
              setIdEspecificacionProducto(_productoDetalle.id);
              setUnidadesDisponibles(_productoDetalle.stock);

              if (especificacionesProductoLista != "") {
                especificacionesProductoLista.map((__productoDetalle) => {
                  if (
                    __productoDetalle.principal === true &&
                    _productoDetalle.id === __productoDetalle.id
                  ) {
                    setCantidadProducto(__productoDetalle.cantidad);
                  }
                });
              }
            }
          });
        });
      });
    };
    loadProducto();
    loadEspecificacionesProductos();
  }, []);

  const handleInput = (productoDetalle) => {
    setEspecificacionProducto(productoDetalle);
    setIdEspecificacionProducto(productoDetalle.id);
    setUnidadesDisponibles(productoDetalle.stock);
    setCantidadProducto(1);

    if (especificacionesProductoLista != "") {
      especificacionesProductoLista.map((_productoDetalle) => {
        if (_productoDetalle.id === productoDetalle.id) {
          setCantidadProducto(_productoDetalle.cantidad);
        }
      });
    }
  };

  const handleAdd = () => {
    if (cantidadProducto < especificacionProducto.stock) {
      setCantidadProducto(cantidadProducto + 1);
    }
  };
  const handleRemove = () => {
    if (cantidadProducto !== 1) {
      setCantidadProducto(cantidadProducto - 1);
    }
  };
  const handleToCart = () => {
    setOpen(true);
    dispatch(
      cartActions.addToCart({
        especificacionProducto,
        cantidadProducto,
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
          Producto agregado
        </Alert>
      </Snackbar>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 md:pt-20 gap-5">
        <div className=" flex justify-center">
          <div className="relative">
            <img
              src={producto.imagen}
              className={"w-72 h-72 md:w-96 md:h-96"}
              alt="imagen"
            />
            <div className="absolute  right-0 bottom-0 ">
              <Favorite
                className="text-slate-500"
                style={{ fontSize: "2rem" }}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto  sm:mx-0 text-center sm:text-start">
          <h1 className="text-2xl font-bold ">{producto.nombre}</h1>

          <h2 className="py-4 font-bold text-red-600 text-xl">
            $ {especificacionProducto.precio}
          </h2>

          <p>{especificacionProducto.descripcion}</p>

          <h2 className="font-bold text-lg py-4">
            Unidades disponibles
            <span className="text-2xl text-red-600 ml-2">
              {unidadesDisponibles}
            </span>
          </h2>

          <div className="flex gap-3 justify-center sm:justify-start">
            {especificacionesProductos
              .filter(
                (_especificacionProducto) =>
                  _especificacionProducto.producto.id === producto.id
              )
              .map((especificacionProducto) => (
                <div className="flex gap-2" key={especificacionProducto.id}>
                  <input
                    value={especificacionProducto.id}
                    name="tipo"
                    type={"radio"}
                    onChange={(e) => handleInput(especificacionProducto)}
                    checked={
                      idEspecificacionProducto === especificacionProducto.id
                    }
                  />
                  <h2>{especificacionProducto.nombre}</h2>
                </div>
              ))}
          </div>

          <div className="flex gap-4 md:gap-3 mt-4 justify-center sm:justify-start ">
            <button onClick={handleRemove}>
              <Remove />
            </button>
            <h2 className=" text-lg">{cantidadProducto}</h2>
            <button onClick={handleAdd}>
              <Add />
            </button>
          </div>

          <button
            className="bg-red-600 w-72 p-2 text-white mt-4 hover:bg-red-800 "
            onClick={handleToCart}>
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
