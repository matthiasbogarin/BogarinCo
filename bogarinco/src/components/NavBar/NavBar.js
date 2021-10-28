import React from "react";
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
    return (
        <div style={{ margin: "0", padding: "0"}}>
            <div className="Wrapper">
                <ul className="NavBar">
                    <li><Link to="/" className="logo">Bogarin Co.</Link></li>
                    <li className="active-link"><Link to="/Dashboard" className="NavBar-Link">Dashboard</Link></li>
                    <li><Link to="/Tools" className="NavBar-Link">Tools</Link></li>
                    <li><Link to="/Clients" className="NavBar-Link">Clients</Link></li>
                    <li><Link to="/Manage" className="NavBar-Link">Manage</Link></li>
                    <li><Link to="/Files" className="NavBar-Link">Files</Link></li>
                </ul>
            </div>
        </div>   
    )
};

export default NavBar;