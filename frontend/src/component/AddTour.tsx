import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Tour} from "../model/Tour";
import "../Styling/AddTour.css"
import AddSingleTour from "../hook/AddSingleTour";


export default function AddTour() {

    const{postSingleTour}=AddSingleTour()
    const [addTour, setAddTour] = useState<Tour>();
    const [inputFields, setInputFields] = React.useState({
        title: "",
        description: "",
        category: ""
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postSingleTour(addTour as Tour)
    }
    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        setInputFields({...inputFields, [evt.target.name]: evt.target.value})

    }

    useEffect(() => {
        setAddTour({
            title: inputFields.title,
            description: inputFields.description,
            category: inputFields.category,
            id: "ABCD123",
            endLatitude: 12.123,
            endLongitude: 12.123,
            startLatitude: 12.123,
            startLongitude: 12.123
        })
    }, [setInputFields, inputFields])

    return (
        <form onSubmit={handleSubmit}>
            <h1>share Tour - share Moments</h1>
            <label>Title</label>
            <input type="text" value={inputFields.title} onChange={handleChange} name="title" maxLength={40}
                   minLength={3}/>
            <label>Category</label>
            <input type="text" value={inputFields.category} onChange={handleChange} name="category" maxLength={20}
                   minLength={3}/>
            <label>Description</label>
            <input type="text" value={inputFields.description} onChange={handleChange} name="description"
                   maxLength={300} minLength={3}/>
            <button onClick={() => handleChange}>share your Moment</button>
        </form>
    )
}
