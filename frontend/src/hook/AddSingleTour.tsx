import {Tour} from "../model/Tour";
import axios from "axios";
export default function AddSingleTour(){

    function postSingleTour(props: Tour | undefined){

        if(props) {
            axios.post("/api/tours/add", {
                id: props.id,
                title: props.title,
                description: props.description,
                startLongitude: props.startLongitude,
                startLatitude: props.startLatitude,
                endLongitude: props.endLongitude,
                endLatitude: props.endLatitude,
                category: props.category
            })
                .then(() => {
                    window.location.assign("/tours");
                })
                .catch((error) => console.error(error))
        }
    }
    return {postSingleTour}
}
