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
import axios from "axios";
import Cookies from "js-cookie"
import SignUp from "./security/SignUp";
import SignIn from "./security/SignIn";
import useAuthRedirect from "./hook/useAuthRedirect";
import LogOut from "./security/LogOut";

axios.interceptors.request.use(function (config) {
        return fetch("/api/csrf").then(() => {
            config.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
            return config;
        });
    }, function (error) {
        return Promise.reject(error);
    });


    function App() {

        useAuthRedirect()

    const {tours, getTours} = useGetTours()

    useEffect(() => {
        getTours();
    }, [getTours] );

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/tours" element={<TourCardGallery tourList={tours}/>}/>
            <Route path="/tours/:id" element={<TourCardDetails/>}/>
            <Route path="/tours/add" element={<AddTour/>}/>
            <Route path="/tours/edit/:id" element={<UpdateTour />}/>
            <Route path={"/sign-up"} element={<SignUp/>}/>
            <Route path={"/sign-in"} element={<SignIn/>}/>
            <Route path={"/log-out"} element={<LogOut/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}
export default App;
