import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Tour} from "../model/Tour";
import {useParams} from "react-router-dom";
import GetTours from "../hook/GetTours";
import useUpdateTour from "../hook/UseUpdateTour";

export default function UpdateTour() {

    const params = useParams();
    const id: string | undefined = params.id;
    const {updateSingleTour} = useUpdateTour();
    const allTours = GetTours();
    const [addTour, setAddTour] = useState<Tour | undefined>();
    const [inputFields, setInputFields] = useState({
        title: "",
        description: "",
        category: "",
    });

    useEffect(() => {
        const tour = allTours.find((tour) => tour.id === id);
        if (tour) {
            setAddTour(tour);
            setInputFields({
                title: tour.title,
                description: tour.description,
                category: tour.category,
            });
        }
    }, [id, allTours]);

    const resetForm = () => {
            const tour = allTours.find((tour) => tour.id === id);
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

      function handleChange(evt: ChangeEvent<HTMLInputElement>) {
          setInputFields({...inputFields, [evt.target.name]: evt.target.value})
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
      }

      return (
          <form onSubmit={handleSubmit}>
              <h1>share Tour - share Moments</h1>
              <label>Title</label>
              <input type="text" value={inputFields.title} onChange={handleChange} name="title"/>
              <label>Category</label>
              <input type="text" value={inputFields.category} onChange={handleChange} name="category"/>
              <label>Description</label>
              <input type="text" value={inputFields.description} onChange={handleChange} name="description"/>
              <button onClick={() => handleChange}>Share your Moment</button>
              <button type="reset" value="Reset" onClick={resetForm}>Reset</button>
          </form>
      )
}
