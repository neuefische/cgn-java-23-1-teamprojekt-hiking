import React from "react";
import logo from "../trailmatelogo.png"
import "../Styling/Header.css"
import {Link} from "react-router-dom";


export default function Header(){
    return(
        <div className="Header">
            <img src={logo} alt="trailmatelogo" width="80px" height="80px"/>
        <h1>Trailmate</h1>
            <h4>..better than komoot</h4>
            <Link to={"/gallery"}>Gallery</Link>


        </div>
    )
}