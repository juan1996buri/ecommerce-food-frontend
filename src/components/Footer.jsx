import React from "react";
import bg from "../imgs/bg.png";

const Footer = () => {
  return (
    <div className="pt-20 h-screen overflow-hidden ">
      <div className="bg-zinc-700 text-white h-screen grid grid-cols-4 p-4 gap-3">
        <div>
          <img src={bg} className={"h-screen object-cover"} />
        </div>

        <div className=" flex justify-center items-center font-bold text-3xl  text-center">
          <h1>PIDE TU PIZZA AL MEJOR PRECIO</h1>
        </div>
        <div className=" text-center mt-10">
          <h1 className="mb-8 text-red-600 font-bold ">
            ENCUENTRANOS EN LOS RESTAURANTES
          </h1>
          <div className="mt-9">
            <h1>24 de mayo</h1>
            <h1>Azogues</h1>
            <h1>(+593) 12345</h1>
          </div>
          <div className="mt-9">
            <h1>24 de mayo</h1>
            <h1>Azogues</h1>
            <h1>(+593) 12345</h1>
          </div>
          <div className="mt-9">
            <h1>24 de mayo</h1>
            <h1>Azogues</h1>
            <h1>(+593) 12345</h1>
          </div>
        </div>
        <div className=" text-center mt-10">
          <h1 className="mb-8 text-red-600 font-bold ">HORARIOS DE ATENCION</h1>
          <div className="mt-9">
            <h1>24 de mayo</h1>
            <h1>Azogues</h1>
            <h1>(+593) 12345</h1>
          </div>
          <div className="mt-9">
            <h1>24 de mayo</h1>
            <h1>Azogues</h1>
            <h1>(+593) 12345</h1>
          </div>
          <div className="mt-9">
            <h1>24 de mayo</h1>
            <h1>Azogues</h1>
            <h1>(+593) 12345</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
