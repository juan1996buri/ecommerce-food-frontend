import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

import { getCategorias } from "../services/CategoriaService";
import { getProducts } from "../services/ProductService";
import { getProductoDetalles } from "../services/ProductoDetalleService";
import { CircularProgress } from "@mui/material";
import { Search } from "@mui/icons-material";

const FoodList = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [productosDetalles, setDetallesProductos] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      await getProducts()
        .then((res) => {
          setProductos(res);
        })
        .catch(function (error) {
          if (error.response) {
          }
        });
    }
    async function loadCategories() {
      await getCategorias()
        .then((res) => {
          setCategorias(res);
        })
        .catch(function (error) {
          if (error.response) {
          }
        });
    }
    async function loadproductosDetalles() {
      await getProductoDetalles()
        .then((_productosDetalles) => {
          setDetallesProductos(_productosDetalles);
        })
        .catch(function (error) {
          if (error.response) {
          }
        });
      setLoading(true);
    }
    loadCategories();
    loadProducts();
    loadproductosDetalles();
  }, []);

  return (
    <div className="pt-6">
      {loading !== true ? (
        <div className="flex justify-center ">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className="text-center sm:px-2 md:px-44">
            <h2>Pizza</h2>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              obcaecati deserunt minima eligendi perspiciatis, amet impedit
              voluptatibus sequi ipsum vitae? Dolores at placeat ex, nihil esse
              qui cum laboriosam natus!
            </p>
          </div>
          <div className="bg-white rounded-md w-max ml-4 mb-4">
            <input
              placeholder="buscar..."
              className="p-1"
              onChange={(e) => setBuscar(e.target.value)}
            />
            <Search />
          </div>

          {categorias?.map((categoria) => (
            <div className="mt-3 px-4" key={categoria.id}>
              <h2 className="font-bold text-3xl">{categoria.nombre}</h2>

              <div className="sm:grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2   flex flex-col items-center grid-cols-1 gap-y-5 gap-2 mt-3">
                {productos
                  .filter((producto) => {
                    if (buscar == "") {
                      if (producto?.categoria.nombre === categoria.nombre) {
                        return producto;
                      }
                    } else if (
                      producto?.categoria.nombre === categoria.nombre
                    ) {
                      return producto.nombre
                        .trim()
                        .toLowerCase()
                        .includes(buscar.trim().toLowerCase());
                    }
                  })
                  .map((producto) => (
                    <FoodCard
                      productosDetalles={productosDetalles}
                      id={producto.id}
                      imagen={producto.imagen}
                      nombre={producto.nombre}
                      precio={producto.precio}
                      key={producto.id}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodList;
