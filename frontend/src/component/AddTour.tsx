import React, {FormEvent, useState} from "react";
import {Tour} from "../model/Tour";
import "../Styling/AddTour.css"


export default function AddTour() {

    const [state, setState] = React.useState({
        title: "",
        description: "",
        category: ""
    })


    const handleSubmit =  (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state)
        postSingleTour(addTour as Tour)
    }

    function handleChange(evt: any) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        })
    console.log(state)
    };

    return(
        <div>
                <form onSubmit={handleSubmit} >
                    <h1>share Tour - share Moments</h1>
                    <label>Title</label>
                    <input type="text" value={state.title} onChange={handleChange} name="title" />
                    <label>Category</label>
                    <input type="text" value={state.category} onChange={handleChange} name="category" />
                    <label>Description</label>
                    <input type="text" value={state.description} onChange={handleChange} name="description" />
                    <button>share your Moment</button>
                </form>
        </div>
    )

}