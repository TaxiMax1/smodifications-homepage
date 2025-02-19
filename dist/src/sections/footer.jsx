import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="rights-reserved">
                © 2025 S Modifications. All rights reserved | Developed by Taxzyyy
            </div>
            <div className="footer-title">S Modifications</div>
            <div className="footer-socials">
                <a href="https://discord.gg/NQJz66eGsF" target="_blank" rel="noopener noreferrer">Discord</a>
                <a href="/tos">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;