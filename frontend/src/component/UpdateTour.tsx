import React, {useState} from "react";
import AddSingleTour from "../hook/AddSingleTour";
import {Tour} from "../model/Tour";
import {useParams} from "react-router-dom";
import GetTours from "../hook/GetTours";


export default function UpdateTour() {

    const params = useParams();
    const id: string | undefined = params.id;

    const tours = GetTours();
    //const tourToUpdate = tours.filter(value => {return value.id === id}).map((tour:Tour) =>resultTour:Tour = {id: tour.id, title: tour.title } )

    const {postSingleTour} = AddSingleTour()

    const [addTour, setAddTour] = useState<Tour>();

    /* /!* const [inputFields, setInputFields] = React.useState({
          //title: tourToUpdate.title,
          //description: tourToUpdate.description,
          category: tourToUpdate.category
      })*!/


      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          postSingleTour(addTour as Tour)
      }


      function handleChange(evt: ChangeEvent<HTMLInputElement>) {
          setInputFields({...inputFields, [evt.target.name]: evt.target.value})
          setAddTour({
              title: inputFields.title,
              description: inputFields.description,
              category: inputFields.category,
              id: inputFields.id,
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
              <button onClick={() => handleChange}>share your Moment</button>
          </form>
      )*/
}
