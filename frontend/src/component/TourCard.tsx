import {Tour} from "../model/Tour";
import React from "react";
import "../Styling/TourCard.css"
import {Link} from "react-router-dom";
import testtwo from "../testtwo.jpg"

export default function TourCard(props: Tour) {

    return (
        <div className="TourCard">
            <div className="cards">
                <div className="card-item">
                    <div className="card-image">
                        <img src={testtwo} height={"200"} width={"100%"} alt={"tourcard-image"}/>
                    </div>
                    <div className="card-info">
                        <Link to={"/tours/" + props.id}>Details</Link>
                        <Link to={"/tours/edit/" + props.id}>Edit</Link>
                        <p>{props.title}</p>
                        <p>{props.description}</p>
                        <p>{props.category}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
