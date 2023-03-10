import axios from "axios";
import {Tour} from "../model/Tour";

export default function DeleteTour(){

    function handleDeleteTour(props: Tour){
        if(props){
            axios
                .delete(`/api/tours/delete/` + props.id)
                .then(() => {
                    console.log(`Tour with ID  deleted successfully`);
                    window.location.assign("/tours")
                })
                .catch(() => {
                    console.error(`Deleting tour with ID  was not successful`);
                });
        }}
        return {handleDeleteTour}
    }








