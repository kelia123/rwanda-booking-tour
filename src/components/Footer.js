import React from "react";
import "./Footer.css";
import { ArrowRightOutlined  } from '@ant-design/icons';
const Footer=()=>{
    return(
        <div className="footer">
            <div className="column1">
                <h1>Reservations</h1>
                <h2>Email: rwandabooking@gmail.com</h2>
                <h3>Tel: +250789655208</h3>
            </div>
            <div className="column2">
                <h1>Our location</h1>
                <h2>KG 549 St, Kacyiru</h2>
                <h3>Kigali, RWANDA</h3>
                <h4>© Copyright Rwanda Booking Tours</h4>
            </div>
            <div className="column3">
                <h1>Subscribe to our Newsletter!</h1>
                <input placeholder="Email"></input>
                <div className="icon">
                <ArrowRightOutlined />
                </div> 
            </div>
        </div>
        
        
    );
}
export default Footer