import {Tour} from "../model/Tour";
import {Link, useParams} from "react-router-dom";
import React, {MouseEventHandler, useEffect, useState} from "react";
import axios from "axios";
import DeleteTour from "../hook/DeleteTour";
import "../../src/Styling/CardDetails.css"


export default function TourCardDetails (){

    const handleDeleteTour = DeleteTour()
    const params = useParams();
    const id: string | undefined = params.id;
    const [details, setDetails] = useState<Tour | undefined>();
    const requestURL:string = "/api/tours/" + id
    const Image = "https://source.unsplash.com/featured/?hiking"

    useEffect(() => {
        axios
            .get(requestURL)
            .then((response) => {
                setDetails(response.data)
            })
            .catch((error) => console.error(error));
    }, [requestURL]);

    if (!details) {
        return <h1>Error loading data</h1>;
    }

    const handleSubmitDelete: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        handleDeleteTour.handleDeleteTour(details)
    }

    const handleNavigationClick = () => {
        window.location.href = "https://www.google.com/maps/dir/" + details.startLatitude + "," + details.startLongitude + "/" + details.endLatitude + "," + details.endLongitude;
    };


    return(
        <div className="TourCardDetails">
                <div className="card-item-details">
                    <div className="card-image-details">
                        <img src={Image}  height={"200"} width={"100%"} alt={"tourcard"}/>
                    </div>
                    <div className="card-info-details">
                        <p className={"card-info-tour-details"}>Tour:</p>
                        <p>{details.title}</p>
                        <p className={"card-info-category-details"}>Difficulty level:</p>
                        <p>{details.category}</p>
                        <p className={"card-info-description-details"}>Description:</p>
                        <p>{details.description}</p>
                        <p>Start:{details.startLongitude} {details.startLatitude}</p>
                        <button className={"navigation-btn-start-details"} onClick={handleNavigationClick}>Start Navigation</button>
                        <Link to={"/tours/edit/" + id}>Edit</Link>
                        <button className="card-info-btn-edit-details">
                        <Link to={"/tours/edit/" + details.id}>Edit</Link>
                    </button>

                        <div className={"back-and-delete-button"}>
                            <button className={"backwards-button-details"}>
                                <Link to={"/tours"}><img src={"/back.png"} width={"30px"} height={"30px"}/></Link>
                            </button>
                            <button className={"delete-button-details"} type="submit" value="delete"
                                    onClick={handleSubmitDelete}><img src={"/delete.png"}/></button>
                        </div>



                    </div>
                </div>
            </div>

    )
}
