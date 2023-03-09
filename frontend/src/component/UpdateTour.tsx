import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Tour} from "../model/Tour";
import {useParams} from "react-router-dom";
import GetTours from "../hook/GetTours";
import useUpdateTour from "../hook/UseUpdateTour";

export default function UpdateTour() {

    const params = useParams();
    const id: string | undefined = params.id;
    const {updateSingleTour} = useUpdateTour();
    const {tours, getTours} = GetTours();
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
          console.log(addTour)
      }

      function useHandleChange(event: ChangeEvent<HTMLInputElement>) {
          event.preventDefault();
          setInputFields({...inputFields, [event.target.name]: event.target.value})
      }

      useEffect(() => {
          setAddTour({
              title: inputFields.title.toString(),
              description: inputFields.description.toString(),
              category: inputFields.category.toString(),
              id: id?id:"",
              endLatitude: 12.123,
              endLongitude: 12.123,
              startLatitude: 12.123,
              startLongitude: 12.123
          })

          console.log(addTour)

      }, [inputFields, setInputFields])

      return (
          <form onSubmit={handleSubmit}>
              <h1>share Tour - share Moments</h1>
              <label>Title</label>
              <input type="text" value={inputFields.title} onChange={useHandleChange} name="title"/>
              <label>Category</label>
              <input type="text" value={inputFields.category} onChange={useHandleChange} name="category"/>
              <label>Description</label>
              <input type="text" value={inputFields.description} onChange={useHandleChange} name="description"/>
              <button onClick={() => useHandleChange}>Share your Moment</button>
              <button type="reset" value="Reset" onClick={resetForm}>Reset</button>
          </form>
      )
}
