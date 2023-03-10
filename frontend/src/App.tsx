import React, {useEffect} from 'react';
import './App.css';
import useGetTours from "./hook/useGetTours";
import TourCardGallery from "./component/TourCardGallery";
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import TourCardDetails from "./component/TourCardDetails";
import AddTour from "./component/AddTour";
import Footer from "./component/Footer";
import UpdateTour from "./component/UpdateTour";

function App() {

    const {tours, getTours} = useGetTours()

    useEffect(() => {
        getTours();
    }, [] );

  return (
    <div className="App">

        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/tours" element={<TourCardGallery tourList={tours}/>}/>
            <Route path="/tours/:id" element={<TourCardDetails/>}/>
            <Route path="/tours/add" element={<AddTour/>}/>
            <Route path="/tours/edit/:id" element={<UpdateTour />}/>
        </Routes>
        <Footer/>
    </div>
  );
}
export default App;
