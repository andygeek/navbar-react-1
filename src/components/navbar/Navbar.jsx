import React, { useState } from "react";
import { Link } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

export const Navbar = () => {
   // Click del menu
   const [click, setClick] = useState(false);

   return (
      <>
         <div className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                  AndyGeek
                  <FontAwesomeIcon icon={faCoffee} />
               </Link>
               <div className="menu-icon">
                  {click ? (
                     <FontAwesomeIcon icon={faTimes} color="white" />
                  ) : (
                     <FontAwesomeIcon icon={faBars}  color="white"/>
                  )}
               </div>
               <ul className="nav-menu">
                  <li className="nav-item">
                     <Link to="/" className="nav-links">
                        Home
                     </Link>
                  </li>

                  <li className="nav-item">
                     <Link to="/services" className="nav-links">Services</Link>
                  </li>

                  <li className="nav-item">
                     <Link to="/products" className="nav-links">Products</Link>
                  </li>

                  <li className="nav-item">
                     <Link to="/sign-up" className="nav-links">Sign-up</Link>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
};
