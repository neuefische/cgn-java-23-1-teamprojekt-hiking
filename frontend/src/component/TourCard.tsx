import {Tour} from "../model/Tour";
import React from "react";
import "../Styling/TourCard.css"
import {Link} from "react-router-dom";


export default function TourCard(props: Tour) {

    return (
        <div className="TourCard">
                <div className="card-item">
                    <div className="card-image">
                        <img src={"https://source.unsplash.com/featured/?hiking"} height={"200"} width={"100%"} alt={"tourcard"}/>
                    </div>
                    <div className="card-info">
                        <p className={"card-info-tour"}>Tour:</p>
                        <p>{props.title}</p>
                        <p className={"card-info-category"}>Difficulty level:</p>
                        <p>{props.category}</p>


                        <button className="card-info-btn-details">
                        <Link to={"/tours/" + props.id}>Details</Link>
                    </button>

                    </div>
                </div>
            </div>

    )
}
