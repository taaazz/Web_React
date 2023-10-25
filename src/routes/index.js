import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
      <Hero />
      <Footer />
    </div>
  );
};

export default Routes;
