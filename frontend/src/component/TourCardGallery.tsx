import React from "react";
import TourCard from "./TourCard";
import {Tour} from "../model/Tour";
import useAuthRedirect from "../hook/useAuthRedirect";
import Footer from "../component/Footer";
import "../Styling/CardGallery.css"

type TourCardGalleryProps = {
    tourList: Tour[]
}
export default function TourCardGallery(props: TourCardGalleryProps) {
    useAuthRedirect()


    const displayCards = props.tourList.map((tour) => {
        return TourCard(tour);
    })

    return(
        <div className="TourGallery">
            {displayCards}
        </div>
    )
}
