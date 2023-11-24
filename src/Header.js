import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header(props) {
    const [showNav, setShowNav] = React.useState(false) //to display nav

    function displayNav() {
        setShowNav(!showNav)
    }

    function removeNav() {
        setShowNav(false)
    } //to remove nav when an option has been clicked

    const style = {
        textDecoration: "underline",
        fontWeight: "bold"
    }

    //style header shadow based on time of day
   
    const shadow = {
        boxShadow : `-10px 1px 35px #FFFF00`
    }
    const shadow2 = {
        boxShadow : `-10px 1px 35px rgb(233, 233, 233)`
    }

    /* 
    props.hour === 0 && props.hour <= 5 ? shadow2 : props.hour > 5 && props.hour <= 18 ? shadow :  props.hour > 18 ? shadow2 : null

    style={props.hour === 0 && props.hour <= 5 ? shadow2 : props.hour > 5 && props.hour <= 18 ? shadow :  props.hour > 18 ? shadow2 : null}
    */
    return (
        <>
        <header style={props.hour === 0 && props.hour <= 5 ? shadow2 : props.hour > 5 && props.hour <= 18 ? shadow :  props.hour > 18 ? shadow2 : null} >
            <nav>
                <h4>
                    <NavLink to='/'
                    style = {function({isActive}){
                        return isActive ? style : null
                    }}
                    onClick={removeNav}
                    >Chidera</NavLink>
                </h4>

                <ul className={showNav ? "show-nav" : ""}>
                    <li>
                        <NavLink 
                            to='/'
                            style = {function({isActive}){
                                return isActive ? style : null
                            }}
                            onClick={removeNav}> 
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='portfolio'
                            style = {function({isActive}){
                                return isActive ? style : null
                            }}
                            onClick={removeNav}> 
                            Portfolio
                        </NavLink>
                    </li>
                    
                </ul>

                <div className="burger" onClick={displayNav}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
        <Outlet/>
        </>
    )
}