import React from "react";
import TourCard from "./TourCard";
import {Tour} from "../model/Tour";
import useAuthRedirect from "../hook/useAuthRedirect";

type TourCardGalleryProps = {
    tourList: Tour[]
}
export default function TourCardGallery(props: TourCardGalleryProps) {

    const displayCards = props.tourList.map((tour) => {
        return TourCard(tour);
    })

    return(
        <div className="TourGallery">
            {displayCards}
        </div>
    )
}
