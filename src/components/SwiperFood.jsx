import React from "react";
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

const SwiperFood = () => {
  return (
    <div className="pt-20 h-screen bg-red-600 overflow-hidden ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        {products.map((pizza) => (
          <SwiperSlide key={pizza.id} className="flex justify-between ">
            <div className="text-white w-full flex flex-col items-center justify-center text-5xl gap-8 ">
              <div className="text-center">
                <h1>Hot & spixy</h1>
                <h1 className="font-bold text-7xl">Pizza</h1>
              </div>
              <div className="text-center">
                <h1>50% OFF</h1>
                <h1> Ordena ya !</h1>
              </div>
            </div>
            <img src={pizza.imagen} alt="" className="h-screen pb-24 mr-10" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperFood;
