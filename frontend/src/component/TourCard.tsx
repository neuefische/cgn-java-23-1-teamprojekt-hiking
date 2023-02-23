import {Tour} from "../model/Tour";
import React from "react";



export default function TourCard(props: Tour) {

    return (
        <div className="TourCard">
            <p>{props.id}</p>
            <p>{props.title}</p>
        </div>


    )
}