import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../components/supabaseClient";
import strandlogo from "../assets/strandlogo.png";
import CheckLogin from "../components/checklogin";

const Navbar = () => {
    const { user, handleLogout } = CheckLogin();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);

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
                        <div className="profile-container" ref={dropdownRef}>
                            <button className="profile-button" onClick={toggleDropdown}>
                                {user.username}
                            </button>
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    <Link to="/profile" className="dropdown-item">Profile</Link>
                                    <button className="dropdown-item logout-button" onClick={handleLogout}>Log Out</button>
                                </div>
                            )}
                        </div>
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