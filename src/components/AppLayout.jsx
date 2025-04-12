import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer.jsx";
import Loader from "./Loader.jsx";
import Nav from "./Nav.jsx";

const AppLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {navigation.state === "loading" ? <Loader /> : <Outlet />}
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
