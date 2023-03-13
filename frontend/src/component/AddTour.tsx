import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Tour} from "../model/Tour";
import "../Styling/AddTour.css"
import AddSingleTour from "../hook/AddSingleTour";
import useAuthRedirect from "../hook/useAuthRedirect";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export default function AddTour() {
    useAuthRedirect()

    const{postSingleTour}=AddSingleTour()
    const [addTour, setAddTour] = useState<Tour>();
    const [inputFields, setInputFields] = React.useState({
        title: "",
        description: "",
        category: "",
        endLatitude: 0,
        endLongitude: 0,
        startLatitude: 0,
        startLongitude: 0

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
            endLatitude: inputFields.endLatitude,
            endLongitude: inputFields.endLongitude,
            startLatitude: inputFields.startLatitude,
            startLongitude: inputFields.startLongitude
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
                   maxLength={500} minLength={3}/>
            <label>Start Latitude</label>
            <input type="text" value={inputFields.startLatitude} onChange={handleChange} name="startLatitude"
                   maxLength={50} minLength={3}/>
            <label>Start Longitude</label>
            <input type="text" value={inputFields.startLongitude} onChange={handleChange} name="startLongitude"
                   maxLength={50} minLength={3}/>
            <label>End Latitude</label>
            <input type="text" value={inputFields.endLatitude} onChange={handleChange} name="endLatitude"
                   maxLength={50} minLength={3}/>
            <label>End Longitude</label>
            <input type="text" value={inputFields.endLongitude} onChange={handleChange} name="endLongitude"
                   maxLength={50} minLength={3}/>
            <button className={"add-button"} onClick={() => handleChange}>share your Moment</button>
        </form>
    )
}
