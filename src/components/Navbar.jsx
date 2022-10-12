import { CardTravel, ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../imgs/logo.png";
import telephone from "../imgs/telephone.png";

const Navbar = () => {
  const { cantidadCart } = useSelector((item) => item.cart);
  return (
    <div className="h-20 fixed " style={{ zIndex: "100" }}>
      <div className=" h-full flex justify-between bg-red-600 items-center px-7 text-yellow-50 w-screen relative ">
        <div className="flex items-center gap-3 ">
          <Link to={"/"}>
            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
              <img src={telephone} className="w-6 h-6" alt="phone" />
            </div>
          </Link>

          <div className="flex flex-col">
            <span>Ordena ahora!</span>
            <span>+(593)1234567</span>
          </div>
        </div>
        <div className="flex gap-10">
          <button>Home Page</button>
          <button>Product</button>
          <button>Menu</button>
        </div>
        <div>
          <img src={logo} className=" h-14" alt="logo" />
        </div>
        <div className="flex gap-10">
          <button>Event</button>
          <button>Blog</button>
          <button>Contact</button>
        </div>
        <div>
          <NavLink to={"/cart"}>
            <IconButton>
              <Badge
                badgeContent={cantidadCart}
                color="secondary"
                className="p-1">
                <ShoppingCart className="text-white " />
              </Badge>
            </IconButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
