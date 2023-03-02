import {Tour} from "../model/Tour";
import React from "react";
import "../Styling/TourCard.css"
import {Link} from "react-router-dom";

export default function TourCard(props: Tour) {

    return (
        <div className="TourCard">
            <Link to={"/tours/" + props.id }>Details</Link>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.category}</p>
        </div>


    )
}