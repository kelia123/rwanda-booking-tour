import React from "react";
import "./HomeLayout.css";
import "../components/Header.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout=({children})=>{
    return(
       <div className="home-container">
           
           <Header/>
           <div className="children">
               {children}
               </div>
           <Footer/>
       </div>
    );
}
export default HomeLayout ;
