import {Tour} from "../model/Tour";
import {Link, useParams} from "react-router-dom";
import React, {MouseEventHandler, useEffect, useState} from "react";
import axios from "axios";
import testtwo from "../testtwo.jpg";
import handleDeleteTour from "../hook/DeleteTour";
import DeleteTour from "../hook/DeleteTour";


export default function TourCardDetails (){

    const handleDeleteTour = DeleteTour()
    const params = useParams();
    const id: string | undefined = params.id;
    const [details, setDetails] = useState<Tour | undefined>();
    const requestURL:string = "/api/tours/" + id

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


    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
    }

    const handleSubmitDelete: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        handleDeleteTour.handleDeleteTour(details)
    }



    return(
        <div className="TourCard">
            <div className="cards">
                <div className="card-item">
                    <div className="card-image">
                        <img src={testtwo}  height={"200"} width={"100%"} alt={"TourCard Image"}/>
                    </div>
                    <div className="card-info">
                        <p>{details.title}</p>
                        <p>{details.category}</p>
                        <p>{details.description}</p>
                        <p>Start:{details.startLongitude} {details.startLatitude}</p>
                        <p>End: {details.endLongitude}  {details.endLatitude}</p>
                        <Link to={"/tours/edit/" + id}>Edit</Link>

                        <button type="submit" value="delete" onClick={handleSubmitDelete}>delete</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
