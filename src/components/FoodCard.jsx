import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ id, imagen, nombre, productosDetalles }) => {
  const navegate = useNavigate();

  const handleProduct = () => {
    const produtoDetalle = productosDetalles.filter(
      (_produtoDetalle) => _produtoDetalle.producto.id === id
    );
  };

  const handleImagenProducto = () => {
    const productoDetalles = [
      productosDetalles.filter((_produtoDetalle) => {
        if (_produtoDetalle.producto.id === id) {
          return _produtoDetalle.principal === true;
        }
      }),
    ];
    navegate(`producto/${id}`, { state: { ...productoDetalles[0] } });
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col justify-center items-center max-h-max sm:w-60 w-80 bg-white shadow-2xl p-3 hover:cursor-pointer"
        onClick={handleImagenProducto}>
        <img
          src={imagen}
          className="sm:h-44 sm:w-44 h-52  w-52 "
          alt="imagen"
        />

        <h3 className="text-red-500 font-bold">{nombre}</h3>
        {productosDetalles
          .filter((tamano) => {
            if (tamano.producto.id === id) {
              return tamano.principal === true;
            }
          })
          .map((tamano) => {
            return <h2 key={tamano.id}>$ {tamano.precio}</h2>;
          })}
      </div>
    </div>
  );
};

export default FoodCard;
