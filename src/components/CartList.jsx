import { Add, Remove } from "@material-ui/icons";
import React from "react";
import Pizza3 from "../imgs/Pizza3.png";

const CartList = () => {
  return (
    <div className="pt-32">
      <div className="flex justify-between p-5">
        <div>
          <div className="flex gap-4 font-bold text-center">
            <h2 className="w-20">Producto</h2>
            <h2 className="w-32"> Nombre</h2>
            <h2 className="w-56 ">Descripcion</h2>
            <h2 className="w-10">Precio</h2>
            <h2 className="w-28">Cantidad</h2>
            <h2 className="w-10">Total</h2>
          </div>{" "}
          <div className="flex gap-4 ">
            <img src={Pizza3} className="w-20 h-20" />
            <h2 className="w-32">
              {" "}
              pizza de pollo con con concon conchampiñosnes champiñosnes
              champiñosnes champiñosnes
            </h2>
            <h2 className="w-56 ">contiene 4 pedasos de pizza mas cola</h2>
            <h2 className="w-10 ">$120.2</h2>
            <div className="w-28 ">
              <div className="flex justify-center gap-1 items-center">
                <button className="text-red-600">
                  <Add />
                </button>

                <h2>1</h2>
                <button className="text-red-600">
                  <Remove />
                </button>
              </div>
            </div>
            <h2 className="w-10">1000.1111111</h2>
          </div>
        </div>

        <div className="w-72 text-center bg-zinc-700 p-4 text-white h-min">
          <h2 className="font-bold">TOTAL</h2>
          <div className="flex gap-2 justify-between">
            <span className="font-semibold">Subtotal:</span>
            <h2>122</h2>
          </div>
          <div className="flex gap-2 justify-between">
            <span className="font-semibold">Descuento:</span>
            <h2>122</h2>
          </div>
          <div className="flex gap-2 justify-between">
            <span className="font-semibold">Total:</span>
            <h2>122</h2>
          </div>
          <button className="bg-red-600 p-2 rounded-md">ACEPTAR</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
