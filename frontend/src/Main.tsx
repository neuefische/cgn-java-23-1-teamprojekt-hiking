import homepageBGR from "../src/homepageBGR.png"
import logo from "./trailmatelogo.png";
import React from "react";
import './Styling/Main.css'

export default function Main() {

    return(
        <div className={"homepage"}>
            <div className={"container"}>
                <div className={"overlay"}>
                    <p className={"subtitle"}>FIND UNFORGETTABLE TOURS</p>
                    <p className={"subtitle-text"}>Trailmate is a website where users can discover hiking trails and add their own hiking routes. With a variety of trails and user-generated content, Trailmate is a one-stop destination for outdoor enthusiasts looking to explore new paths. Whether you're a seasoned hiker or a beginner, Trailmate has something for everyone.</p>
                </div>
                <div className={"overlay"}>
                    <img src={logo} alt="Logo" className="logo" style={{ height: '300px', width: '300px' }} />
                </div>
                <div className={"content"}>
                    <img src={homepageBGR} alt="Logo" className="subheader-image"/>
                </div>


            </div>
        </div>
    )

}