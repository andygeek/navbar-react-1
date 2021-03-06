import React, { useState } from "react";
import { Link } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

export const Navbar = () => {
   // Click del menu
   const [click, setClick] = useState(false);

   const closeMenu = () => setClick(false);

   const handleClick = () => {
      setClick(!click);
   };

   return (
      <>
         <div className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                  Andy
                  <FontAwesomeIcon icon={faCoffee} />
                  Geek
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                  {click ? (
                     <FontAwesomeIcon icon={faTimes} color="white" />
                  ) : (
                     <FontAwesomeIcon icon={faBars} color="white" />
                  )}
               </div>
               <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                     <Link to="/" className="nav-links" onClick={closeMenu}>
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/services"
                        className="nav-links"
                        onClick={closeMenu}
                     >
                        Services
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/products"
                        className="nav-links"
                        onClick={closeMenu}
                     >
                        Products
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/sign-up"
                        className="nav-links"
                        onClick={closeMenu}
                     >
                        Sign-up
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
};
