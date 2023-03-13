import React from "react";
import headerImg from "../headBackground.png"
import "../Styling/Header.css"
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header(){

    function useNavigationBarHander() {
        const location = useLocation();

        if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
            return (
                <div className="button-container">
                    <Link to={"/sign-in"}>LOG IN</Link>
                    <b className={"button-divtext"}>|</b>
                    <Link to={"/sign-up"}>SIGN UP</Link>
                </div>
            );
        } else {
            return (
                <div className="button-container">
                    <Link to={"/"}>HOME</Link>
                    <b className={"button-divtext"}>|</b>
                    <Link to={"/tours"}>TOURS</Link>
                    <b className={"button-divtext"}>|</b>
                    <Link to={"/tours/add"}>ADD TOUR</Link>
                    <b className={"button-divtext"}>|</b>
                    <Link to={"/log-out"}>LOG OUT</Link>
                </div>
            );
        }
    }

    return (
        <div className="header">
            {useNavigationBarHander()}
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
