import React from "react";
import headerImg from "../headBackground.png"
import "../Styling/Header.css"
import {Link} from "react-router-dom";

export default function Header(){

    return (
        <div className="header">
            <div className="button-container">
                <Link to={"/"}>HOME</Link>
                <b className={"button-divtext"}>|</b>
                <Link to={"/tours"}>TOURS</Link>
                <b className={"button-divtext"}>|</b>
                <Link to={"/tours/add"}>ADD TOUR</Link>
            </div>
            <img src={headerImg} alt="header" className="background-image" />
            <div id="foglayer_01" className="fog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
            <div id="foglayer_02" className="fog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
            <div id="foglayer_03" className="fog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
                <h1 className={"title-text"}>TRAILMATE</h1>
        </div>
    );
};
