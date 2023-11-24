import React from "react";
//import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {useRef, useEffect} from 'react';
import Light from "./Light";
import './index.css'


export default function Home(props) {
    const [date, setDate] = React.useState(new Date());
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

    return (
        <section className="section">

            <div className="main-page-content">
                <h2 className="clock">{date.toLocaleTimeString()}</h2>
                <h2>{props.greetUser}</h2>
                <p>{props.engageUser}</p>
            </div>

            <Light />
        </section>
    )
}

/* 
Fixed the query selector with '!important'.
Added styles to active navigation.
Made header shadow reflect the time of day.
Added 'a clock' for some unknown reasons */

