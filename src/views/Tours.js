import React, {useState} from "react";
import SingleTour from "../components/singleTour"
import HomeLayout from "../components/HomeLayout";
import Tourscard from "../components/Tourscard";
import allToursData from "../asset/constants/Tours.json"



// import "../components/HomeLayout.css"


const Toursview = () => {
    

    return (

        <>
        
        <HomeLayout>
            <div className="tours-category">
            <div className="tours-container">   
                {
                    allToursData.map((data) => (<Tourscard data={data}/>))
                }
            </div>
           

            </div>
        </HomeLayout>
        </>
    )

}
export default Toursview;