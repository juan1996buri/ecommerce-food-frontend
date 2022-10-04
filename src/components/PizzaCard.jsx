import React from "react";
import Pizza3 from "../imgs/Pizza3.png";

const PizzaCard = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl">Pizza</h2>
      <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-y-5 gap-2 mt-3">
        <div className="flex flex-col justify-center items-center max-h-max w-60 bg-white shadow-2xl">
          <img src={Pizza3} className="h-44 w-44" />
          <h3 className="text-red-500 font-bold">Nombre</h3>
          <h3>80$</h3>
          <button className="bg-red-600 text-white px-3 py-1 rounded-md">
            Añadir
          </button>
          <h2 className="px-2">descripcion</h2>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
