import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
   return (
      <>
         <Link to="/" exact>
            Home
         </Link>
         <Link to="/services">Services</Link>
         <Link to="/products">Products</Link>
         <Link to="/sign-up">Sign-up</Link>
      </>
   );
};
