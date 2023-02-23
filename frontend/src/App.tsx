import React from 'react';
import './App.css';
import GetTours from "./hook/GetTours";
import TourCardGallery from "./component/TourCardGallery";
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";

function App() {

    const tours = GetTours()

  return (
    <div className="App">

        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/gallery" element={<TourCardGallery tourList={tours}/>}/>
        </Routes>

    </div>
  );
}

export default App;
