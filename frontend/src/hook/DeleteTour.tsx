import axios from "axios";
import {FormEvent, MouseEventHandler} from "react";
import {Tour} from "../model/Tour";
import GetTours from "./GetTours";
import {useNavigate} from "react-router-dom";

export default function DeleteTour(){

    function handleDeleteTour(props: Tour){

        if(props){
            axios
                .delete(`/api/tours/delete/` + props.id)
                .then((response) => {
                    console.log(`Tour with ID  deleted successfully`);
                    navigate("/tours", {replace: true})
                })
                .catch((error) => {
                    console.error(`Deleting tour with ID  was not successful`);
                });

        }}
        return {handleDeleteTour}


    }








