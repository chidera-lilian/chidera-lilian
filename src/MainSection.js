import React from "react";
//import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {useRef, useEffect} from 'react';
import Portfolio from "./Portfolio";
import Light from "./Light";
import Sun from "./Sun";
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

            <div className="moon" 
            /* ref={ref} */ 
            >
                <div className="inner-moon"></div>
            </div>

            {/* <SidePanel /> */}

            {/* <p className={moused? "show" : "click"}>
                <span className="clicks">Click me to view portfolio</span>   Apologies. Clicking on any link and then returning to this page will cause a reload. This means you will have to type out your name again. Will surely fix this as I progress :)
            </p> */}

            <Sun />

            <div className="main-page-content">
                <h2>{props.greetUser}</h2>
                <p>{props.engageUser}</p>
            </div>

            <div 
                className="arrow-down" 
                onMouseOver={mouseOver}
                onClick={handleClicked}
            >
            </div>
            

            {/* <SidePanel /> */}

            <Portfolio showElement = {isDark}/>
            {/* <Portfolio darkMode = {isDark}/> */}

            <Light />
        </section>
    )
}


