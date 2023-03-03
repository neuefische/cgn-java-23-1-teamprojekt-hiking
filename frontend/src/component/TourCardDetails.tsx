import {Tour} from "../model/Tour";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";


export default function TourCardDetails (){

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

    return(
        <div>
            <p>{details.title}</p>
            <p>{details.category}</p>
            <p>{details.description}</p>
            <p>Start:{details.startLongitude} {details.startLatitude}</p>
            <p>End: {details.endLongitude}  {details.endLatitude}</p>
            <Link to={"/tours/edit/" + id}>Edit</Link>
            
        </div>
    )

}