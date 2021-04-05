import React from 'react'
import { NavLink } from "react-router-dom";
import "./../styles/Nav.css";

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-bar">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/temperature">Temperature</NavLink>
           <NavLink to="/customize-image">Image widget</NavLink>
           </div>
        </div>
    )
}

export default Nav
