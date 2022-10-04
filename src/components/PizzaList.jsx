import React from "react";
import Pizza3 from "../imgs/Pizza3.png";
import { Search, Add, Remove } from "@material-ui/icons";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  const handleSearch = (e) => {
    const { value } = e.target;
    console.log(value);
  };
  return (
    <div className="bg-yellow-50 mt-5">
      <div className="text-center sm:px-2 md:px-44">
        <h2>Pizza</h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          obcaecati deserunt minima eligendi perspiciatis, amet impedit
          voluptatibus sequi ipsum vitae? Dolores at placeat ex, nihil esse qui
          cum laboriosam natus!
        </p>
      </div>
      <div className="bg-white rounded-md w-max ml-4 mb-4">
        <input
          placeholder="buscar..."
          className="p-1"
          onChange={(e) => handleSearch(e)}
        />
        <Search />
      </div>
      <div className="mt-3 px-4">
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
    </div>
  );
};

export default PizzaList;
