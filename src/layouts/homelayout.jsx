import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../component/navbar"
const Homelayout = () => {
    return (
        <div className="layout-container">
            <Navigation />
            <Outlet />
            <h1>footer</h1>
        </div>
    );
}
export default Homelayout;                                                                                                                                                                                                                                                                                  