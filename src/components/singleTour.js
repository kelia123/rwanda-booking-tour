import React from "react";
import HomeLayout from "./HomeLayout";
import Tourscard from "./Tourscard";
import "./HomeLayout.css";


const SingleTour =({tour})=>{
    return(
        <div className="singletour-container">
            <h1>{tour?.title}</h1>
            <div className="picture1">
            <img src={tour.images}/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare, arcu sed varius rhoncus, mi lacus vestibulum nisi, vitae tempor diam odio at erat. Cras nec sollicitudin est. Nullam eleifend nisi at sem mattis, molestie tristique erat commodo. Donec efficitur mi et facilisis laoreet. Morbi fermentum ipsum et sodales imperdiet. Maecenas vel ex at mi tincidunt commodo.</p>
            <h2> Gallery </h2>
            <div className="gallery">
               
                
           {
               tour.images.map((image)=>(
                <img src={image}/>
               ))
           }
               
                
                </div>
            
            
            
        </div>

        
        
    )
     
}
export default SingleTour;