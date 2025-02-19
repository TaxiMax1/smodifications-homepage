import React, { useState } from "react";
import axios from "axios";
import CheckLogin from "../components/CheckLogin"; 

const ProductsPage = () => {
    const { user } = CheckLogin(); 

    const [products] = useState([
        { id: 1, name: "Modded Cars", description: "You need to buy minimum: 3 cars.", price: "€0.00" },
        { id: 2, name: "Money", description: "You need to buy minimum: 100 mil.", price: "€10.00" },
        { id: 3, name: "Levels", description: "You need to buy minimum: 200 levels.", price: "€5.00" },
        { id: 4, name: "Mod Menu", description: "No limit to buy a mod menu.", price: "N/A" },
        { id: 5, name: "Yim Menu", description: "Lifetime and is gonna fix ur game", price: "€15.00" },
    ]);

    const handleBuyNow = async (product) => {
        if (!user) {
            alert("You must be logged in to make a purchase.");
            return;
        }
    
        if (product.price === "N/A") {
            alert("This product cannot be purchased.");
            return;
        }
    
        try {
            const response = await axios.post("http://localhost:5002/create-checkout-session", {
                product,
                user: { username: user.username },
            });
            window.location.href = response.data.url;
        } catch (error) {
            console.error("Error creating checkout session:", error);
        }
    };    

    return (
        <div className="products-container">
            <div className="all-products">
                <h1>All Products</h1>
                <div className="all-products-scroll">
                    {products.map((product) => (
                        <div key={product.id} className="product">
                            <h2>{product.name}</h2>
                            <h4>{product.description}</h4> 
                            <span className="price">{product.price}</span> 
                            <button 
                                className="buy-button" 
                                onClick={() => handleBuyNow(product)} 
                                disabled={!user} 
                                style={{
                                    backgroundColor: !user ? "gray" : "",
                                    cursor: !user ? "not-allowed" : "pointer",
                                    pointerEvents: !user ? "none" : "auto",
                                }}
                            >
                                {user ? "Buy Now" : "Login to Buy"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;