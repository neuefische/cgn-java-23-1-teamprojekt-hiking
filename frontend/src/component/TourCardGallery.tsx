import React from "react";
import TourCard from "./TourCard";
import {Tour} from "../model/Tour";
import {Link} from "react-router-dom";
import "../Styling/TourGallery.css"

type TourCardGalleryProps = {
    tourList: Tour[]
}

export default function TourCardGallery(props: TourCardGalleryProps) {

    const displayCards = props.tourList.map((tour) => {
        return TourCard(tour);
    })


    return(
        <div>
            {displayCards}
        </div>
    )
}