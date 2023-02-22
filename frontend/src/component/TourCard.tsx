import {Tour} from "../model/Tour";
import React from "react";


type TourCardProps = {
    tour: Tour
}

export default function TourCard(props: TourCardProps) {

    return (
        <div>
            <p>{props.tour.id}</p>
            <p>{props.tour.title}</p>
        </div>


    )
}