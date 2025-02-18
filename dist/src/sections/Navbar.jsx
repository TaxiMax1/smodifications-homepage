import { Link } from "react-router-dom";
import strandlogo from "../assets/strandlogo.png";

const Navbar = () => {
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
                    <button className="signup-button">Sign Up</button>
                    <button className="signin-button">Sign In</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;