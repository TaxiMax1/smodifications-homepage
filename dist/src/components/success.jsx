import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import thmubsupIMG from "../assets/thmubsup.png";

const Success = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);
        
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="success-container">
            <div className='success-title'>Payment Successful!</div>
            <div className='success-description'>Thank you for your purchase. Your order has been processed successfully. <br /> <br />Redirecting back to homepage...</div>
            <img className="success-img" src={thmubsupIMG} alt="thumbs up"/>
        </div>
    );
};

export default Success;