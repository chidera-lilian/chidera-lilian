import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {useRef, useEffect} from 'react';
import Portfolio from "./Portfolio";
import SidePanel from "./SidePanel";
import Light from "./Light";
import Arrow from "./Arrow";
import './index.css'

export default function MainSection(props) {
    console.log(props.greetUser)
    console.log(props.engageUser)

    const [isDark, setIsDark] = React.useState(true)

    const [moused, setMouse] = React.useState (false)

    function handleClicked() {
        setIsDark(function () {
            return !isDark
        })
      }

    function mouseOver() {
        setMouse(function () {
            return !moused
        })
    }
      
    return (
        <section className="section">

            <div className="triangle" 
            /* ref={ref} */ 
            onClick={handleClicked}
            onMouseOver={mouseOver}>
                <div className="inner-tri"></div>
            </div>

            {/* <SidePanel /> */}

            <p className={moused? "show" : "click"}>
                <span className="clicks">Click me to view portfolio</span>
            </p>

            <Arrow />

            <div className="main-page-content">
                <h2>{props.greetUser}</h2>
                <p>{props.engageUser}</p>
            </div>

            {/* <SidePanel /> */}

            <BrowserRouter>
                <Routes>
                    <Route path="./furniture-store/furniture.html" element={<Portfolio darkMode = {isDark}/>}/>
                </Routes>
            </BrowserRouter>
            {/* <Portfolio darkMode = {isDark}/> */}

            <Light />
        </section>
    )
}


