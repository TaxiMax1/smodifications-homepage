import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <h1>Payment Failed!</h1>
            <h3>Oops! Something went wrong with your payment. Please try again.</h3>
            <a href="/contact"><button>Create a ticket</button></a>
        </div>
    );
};

export default Error;