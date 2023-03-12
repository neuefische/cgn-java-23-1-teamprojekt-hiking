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
                        <img src={testtwo} height={"200"} width={"100%"} alt={"tourcard"}/>
                    </div>
                    <div className="card-info">
                        <p className={"card-info-tour"}>Tour:</p>
                        <p>{props.title}</p>
                        <p className={"card-info-category"}>Difficulty level:</p>
                        <p>{props.category}</p>
                        <p className={"card-info-description"}>Description:</p>
                        <p>{props.description}</p>

                        <button className="card-info-btn-details">
                        <Link to={"/tours/" + props.id}>Details</Link>
                    </button>
                        <button className="card-info-btn-edit">
                            <Link to={"/tours/edit/" + props.id}>Edit</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
