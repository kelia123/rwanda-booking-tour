import React,{useState} from "react";
import HomeLayout from "../components/HomeLayout";
import { Drawer } from "antd"
import "antd/dist/antd.css"
import SingleTour from "./singleTour";

const Tourscard = ({data}) => {
  
    const[drawerVisible,setDrawerVisible]=useState(false);

    const handleClickDrawerVisible=()=>{
        setDrawerVisible(true);
    }

    const closeDrawerVisible=()=>{
        setDrawerVisible(false);
    }
    return (
        <>
        <Drawer title={data.title} placement="left" visible={drawerVisible} width= "720" onClose={()=>closeDrawerVisible()}>
        <SingleTour tour={data}/></Drawer>
        <div className="tourscard-container">
            <div className="tourscard-container1">
                <img src={data.images}/>
            </div>
            <div className="tourscard-container2">
                <div className="visitkarongi">
                <h1>{data.title}</h1>
                </div>
                <div className="karongi">
                    <div className="karongi1">
                        <h1> Date scheduled: </h1>
                        <h2> 20 August 2021 </h2>
                    </div>
                    <div className="karongi2">
                        <h1> Due date scheduled: </h1>
                        <h2> 25 August 2021 </h2>
                    </div>
                </div>
                <div className="seats">
                    <h1> Seats available: 20/30 </h1>
                    <a href="#" onClick={()=>handleClickDrawerVisible()}> Read more... </a>
                </div>
            </div>
        </div>
        </>
    )

}
export default Tourscard;