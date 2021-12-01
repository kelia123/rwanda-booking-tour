import React from "react";
import "./home.css"
import HomeLayout from "../components/HomeLayout";


const Home=()=>{
    return(
       <div className="home-container">
           
        <HomeLayout>
            <div className="home-bg">
                <h1> Rwanda Booking Tours </h1>
            </div>
            <div className="quote-div">
                <h1> Book a tour with us </h1>
                <p> From the hillside overlooking Lake Kivu, our expansive Cleo Lake Kivu offers privacy while being your launchpad into boundless adventures and relaxation. Enjoy our tropical retreat of farm-to-table dining, the privacy of our refreshing swimming pool and relaxing spa treatments. With customized itineraries for families, couples, and all, we can’t wait to welcome you to experience a “murugo heza”!</p>
                <div className="booknow">
                    <h2> BOOK NOW!! </h2>
                </div>
              
            </div>
            
            <div className="explore">
                
                <div className="explore1">
                    <h1>Explore Karongi </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus ex, viverra sit amet nisl scelerisque, interdum convallis elit. Nunc a urna sed lorem hendrerit faucibus eget pharetra nisi. Suspendisse eget lobortis ex, eu vestibulum est. Donec non laoreet sem. Donec consequat dui elit, vitae condimentum magna venenatis id </p>
                </div>
                <div className="explore2">
                    <h1> Our Tours </h1>
                </div>
            </div>

            <div className="discover">
              <div className="discover2">
                
                </div>
                <div className="discover1">
                    <h1> Discover Virunga National Park </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus ex, viverra sit amet nisl scelerisque, interdum convallis elit. Nunc a urna sed lorem hendrerit faucibus eget pharetra nisi. Suspendisse eget lobortis ex, eu vestibulum est. Donec non laoreet sem. Donec consequat dui elit, vitae condimentum magna venenatis id </p>
                </div>
               
            </div>

            <div className="tembera">
                <div className="tembera1">
                    <h1> Visit Akagera National Park </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus ex, viverra sit amet nisl scelerisque, interdum convallis elit. Nunc a urna sed lorem hendrerit faucibus eget pharetra nisi. Suspendisse eget lobortis ex, eu vestibulum est. Donec non laoreet sem. Donec consequat dui elit, vitae condimentum magna venenatis id </p>
                </div>
                <div className="tembera2">
                </div>
            </div>
            
        </HomeLayout>
        
       </div>
    );
}
export default Home ;
