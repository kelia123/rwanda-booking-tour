import React from "react";
import HomeLayout from "../components/HomeLayout";
import { FacebookOutlined   } from '@ant-design/icons';
import { TwitterOutlined   } from '@ant-design/icons';
import { InstagramOutlined  } from '@ant-design/icons';

const Contactus=()=>{
    return(
       

        <HomeLayout>
            <div className="contactus">
            <div className="contactus1">
                <div className="contactus2">
                    <h1> Leave us a message </h1>
                    <h2> Names </h2>
                    <input placeholder=""></input>
                    <h3> Email </h3>
                    <input placeholder=""></input>
                    <h4> Phone </h4>
                    <input placeholder=""></input>
                    <h5> Your Message </h5>
                    <input placeholder=""></input>
                    <div className="button">
                        <p> Send </p>
                    </div>
                </div>
                <div className="contactus3">
                    <h1> Stay in touch with us </h1>
                    <div className="con">
                    <div className="contactus3a">
                        <h1> Our Location </h1>
                        <h2> KG 549 St </h2>
                        <h3> Kigali, RWANDA </h3>
                        <h4> Tel: +250789655208 </h4>
                        <h5> rwandabooking@gmail.com</h5>
                        {/* <h6> Rwanda Booking Tours </h6> */}
                    </div>
                    <div className="contactus3b">
                        <h1> Connect with us </h1>
                        <div className="icons">
                        <div className="icon1"><FacebookOutlined /></div>
                        <div className="icon2"><TwitterOutlined /></div>
                        <div className="icon3"><InstagramOutlined /></div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div className="contactus4"></div> */}
            </div>
            </div>
        </HomeLayout>
        
        
    );
}
export default Contactus;