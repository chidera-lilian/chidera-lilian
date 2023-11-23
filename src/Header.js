import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header() {
    return (
        <>
        <header>
            <nav>
                <h4>
                    <NavLink to='/'>Chidera</NavLink>
                </h4>

                <ul class="nav-links">
                    <li><NavLink to='/'> Home</NavLink></li>
                    <li><NavLink to='portfolio'> Portfolio</NavLink></li>
                    
                </ul>

                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        </header>
        <Outlet/>
        </>
    )
}