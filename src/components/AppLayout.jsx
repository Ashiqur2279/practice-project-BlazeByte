import React from "react";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";

const AppLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Nav/>
            <div className='flex-grow'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default AppLayout;
