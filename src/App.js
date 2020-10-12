import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar.jsx";
import "./App.css";

export const App = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Switch>
            <Route path="/" exact>
            
            </Route>
         </Switch>
      </BrowserRouter>
   );
};
