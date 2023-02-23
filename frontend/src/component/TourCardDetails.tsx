import {Tour} from "../model/Tour";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
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
                setDetails(response.data);
                console.log(details);
            })
            .catch((error) => console.error(error));
    }, [requestURL]);



    if (!details) {
        return <h1>NO DATA</h1>;
    }

    return(
        <div>
            <p>{details.title}</p>
            <p>{details.category}</p>
            <p>{details.description}</p>
            <p>{details.startLongitude} {details.startLatitude}</p>
            <p>{details.endLongitude}  {details.endLatitude}</p>
            
        </div>
    )

}