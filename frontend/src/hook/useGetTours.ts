import {useEffect, useState} from "react";
import {Tour} from "../model/Tour";
import axios from "axios";
import DeleteTour from "./DeleteTour";

export default function useGetTours() {

    const [tours, setTours] = useState<Tour[]>([])
    function getTours(){
            axios.get("/api/tours")
                .then((response) => {
                    setTours(response.data)})
                .catch((error) => console.error(error))

    }


    return {tours, getTours}
}
