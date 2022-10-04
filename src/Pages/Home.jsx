import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PizzaList from "../components/PizzaList";
import SwiperFood from "../components/SwiperFood";

const Home = () => {
  return (
    <>
      <Navbar />
      <SwiperFood />
      <PizzaList />
      <Footer />
    </>
  );
};

export default Home;
