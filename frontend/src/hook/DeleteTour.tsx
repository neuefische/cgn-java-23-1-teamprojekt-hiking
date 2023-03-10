import axios from "axios";
import {FormEvent, MouseEventHandler, useEffect} from "react";
import {Tour} from "../model/Tour";
import useGetTours from "./useGetTours";
import {redirect, useNavigate} from "react-router-dom";

export default function DeleteTour(){

    const navigate = useNavigate()


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








