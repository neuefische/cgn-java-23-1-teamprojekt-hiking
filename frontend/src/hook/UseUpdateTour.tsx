import {Tour} from "../model/Tour";
import axios from "axios";

export default function useUpdateTour(){

    function updateSingleTour(props: Tour | undefined){

        if(props) {

            axios.put("/api/tours/" + props.id, {
                title: props.title,
                description: props.description,
                startLongitude: props.startLongitude,
                startLatitude: props.startLatitude,
                endLongitude: props.endLongitude,
                endLatitude: props.endLatitude,
                category: props.category
            })
                .then(() => {
                    console.log(props)
                    window.location.assign("/tours")
                })
                .catch((error) => console.error(error))
        }
    }
 return {updateSingleTour}
}
