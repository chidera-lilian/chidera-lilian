import React from "react";
//import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {useRef, useEffect} from 'react';
import Portfolio from "./Portfolio";
import Light from "./Light";
import './index.css'


export default function Home(props) {
    console.log(props.greetUser)
    console.log(props.engageUser)

    const [isDark, setIsDark] = React.useState(true)
      
    return (
        <section className="section">

            <div className="main-page-content">
                <h2>{props.greetUser}</h2>
                <p>{props.engageUser}</p>
            </div>

            <Light />
        </section>
    )
}


