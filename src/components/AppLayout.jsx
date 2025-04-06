import React from "react";
import Home from "../pages/Home";
import Footer from "./Footer";
import Nav from "./Nav";

const AppLayout = () => {
  return (
    <div>
      <Nav />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
