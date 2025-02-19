import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../components/supabaseClient";
import strandlogo from "../assets/strandlogo.png";
import CheckLogin from "../components/checklogin";

const Navbar = () => {
    const { user, handleLogout } = CheckLogin();
    console.log("User state:", user);

    return (
        <header className="header-container">
            <nav className="navbar-container">
                <div className="nav-left">
                    <a href="/" className="nav-logo-link">
                        <img className="nav-logoimg" src={strandlogo} alt="Strand Logo" />
                        <div className="nav-title">S Modifications</div>
                    </a>
                </div>
                <div className="nav-links">
                    <Link to="/"><h1>Home</h1></Link>
                    <Link to="/about"><h1>About</h1></Link>
                    <Link to="/contact"><h1>Contact</h1></Link>
                </div>
                <div className="login-buttons">
                    {user ? (
                        <button className="logout-button" onClick={handleLogout}>Log Out</button>
                    ) : (
                        <>
                            <a href="smodifications-homepage/signup"><button className="signup-button">Sign Up</button></a>
                            <a href="smodifications-homepage/signin"><button className="signin-button">Sign In</button></a>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;