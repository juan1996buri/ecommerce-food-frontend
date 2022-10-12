import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Pizza1 from "../imgs/Pizza1.png";
import Pizza2 from "../imgs/Pizza2.png";
import Pizza3 from "../imgs/Pizza3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getSliders } from "../services/SliderService";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    imagen: Pizza1,
    descripcion: "111",
  },
  {
    id: 2,
    imagen: Pizza2,
    descripcion: "22",
  },
  {
    id: 3,
    imagen: Pizza3,
    descripcion: "333",
  },
];

const SliderProduct = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const loadSlider = () => {
      getSliders().then((_slider) => setSliders(_slider));
    };

    loadSlider();
  }, []);
  return (
    <div className=" pt-20 h-screen bg-red-600  ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id} className="flex justify-between ">
            <div className="text-white w-full flex flex-col items-center justify-center text-5xl gap-8 ">
              <div className="text-center">
                <h1 className="font-bold text-7xl">
                  {slider.especificacionProducto.producto.categoria.nombre}
                </h1>
              </div>
              <div className="text-center px-8">
                <h1>{slider.descripcion}</h1>
              </div>
              <Link
                to={`/producto/${slider.especificacionProducto.producto.id}`}
                className="bg-white p-2 text-center text-red-600 w-52 hover:text-white hover:bg-yellow-400">
                VER
              </Link>
            </div>
            <img
              src={slider.especificacionProducto.producto.imagen}
              alt={slider.especificacionProducto.producto.categoria.nombre}
              className="h-screen pb-24 mr-10"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderProduct;
