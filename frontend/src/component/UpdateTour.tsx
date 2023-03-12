import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Tour} from "../model/Tour";
import {useParams} from "react-router-dom";
import useGetTours from "../hook/useGetTours";
import useUpdateTour from "../hook/UseUpdateTour";
import "../../src/Styling/UpdateTour.css"

export default function UpdateTour() {

    const params = useParams();
    const id: string | undefined = params.id;
    const {updateSingleTour} = useUpdateTour();
    const {tours, getTours} = useGetTours();
    const [addTour, setAddTour] = useState<Tour | undefined>();
    const [inputFields, setInputFields] = useState({
        title: "",
        description: "",
        category: "",
    });

    useEffect(() => {
        const tour = tours.find((tour) => tour.id === id);
        if (tour) {
            setAddTour(tour);
            setInputFields({
                title: tour.title,
                description: tour.description,
                category: tour.category,
            });
        }
    }, [id, tours]);

    useEffect(() => {
        getTours();
    }, [getTours])

    const resetForm = () => {
            const tour = tours.find((tour) => tour.id === id);
            if (tour) {
                setAddTour(tour);
                setInputFields({
                    title: tour.title,
                    description: tour.description,
                    category: tour.category,
                });
            }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateSingleTour(addTour as Tour)
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        setInputFields({...inputFields, [evt.target.name]: evt.target.value})
    }

    useEffect(() => {
        setAddTour({
            title: inputFields.title,
            description: inputFields.description,
            category: inputFields.category,
            id: id?id: "",
            endLatitude: 12.123,
            endLongitude: 12.123,
            startLatitude: 12.123,
            startLongitude: 12.123
        })
    }, [id, inputFields])

      return (
          <form onSubmit={handleSubmit}>
              <h1>share Tour - share Moments</h1>
              <label>Title</label>
              <input type="text" value={inputFields.title} onChange={handleChange} name="title"/>
              <label>Category</label>
              <input type="text" value={inputFields.category} onChange={handleChange} name="category"/>
              <label>Description</label>
              <input type="text" value={inputFields.description} onChange={handleChange} name="description"/>
              <button className={"edit-button"} onClick={() => handleChange}>Share your Moment</button>
              <button className={"reset-button"} type="reset" value="Reset" onClick={resetForm}>Reset</button>
          </form>
      )
}
