import React from "react"
import {Routes,Route} from "react-router-dom";
import Home from "../views/home";
import Aboutus from "../views/Aboutus";
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import Gallery from "../views/Gallery";
import Contactus from "../views/Contactus";
import Tours from "../views/Tours";
import SingleTour from "../components/singleTour";
import NewTour from "../views/Dashboard/NewTour";
import DashLayout from "../components/dashboardLayout";
import AllTours from "../views/Dashboard/AllTours";
const index=()=>{ return(
    <>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/aboutus" element={<Aboutus/>}/>
        <Route exact path="/contactus" element={<Contactus/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/signin" element={<Signin/>}/>
        <Route exact path="/Gallery" element={<Gallery/>}/>
        <Route exact path="/Tours" element={<Tours/>}/>
        <Route exact path="/singleTour" element={<SingleTour/>}/>
        {/* <Route exact path="/dash/alltour" element={<AllTours/>}/> */}
        {/* <Route exact path="/dash/NewTour" element={<NewTour/>}/> */}

        </Routes>
        <DashLayout>
            <Routes>
            <Route path="/dash/newtour" element={<NewTour/>}></Route>
            <Route path="/dash/alltour" element={<AllTours/>}></Route>
            </Routes>
        </DashLayout>
        </>
)
}
export default index;