import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import FoodList from "./components/FoodList";
import Footer from "./components/Footer";
import Product from "./components/Product";
import CartList from "./components/CartList";
import Home from "./Pages/Home";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
const Component = ({ title }) => {
  return (
    <div>
      <p style={{ paddingTop: "150vh" }}>{title}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="overflow-hidden">
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartList />} />
              <Route path="/producto/:id" element={<Product />} />
            </Routes>
          </Wrapper>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
