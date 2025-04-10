import React from "react";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";

const AppLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Nav/>
            <main className="flex-grow">
                <Outlet/>
            </main>

            <Footer/>

        </div>
    );
};

export default AppLayout;
