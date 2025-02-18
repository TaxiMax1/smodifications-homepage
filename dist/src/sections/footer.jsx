import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="rights-reserved">
                © 2025 S Modifications. All rights reserved | Developed by Taxzyyy
            </div>
            <div className="footer-title">S Modifications</div>
            <div className="footer-socials">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
                <a href="/store">Store</a>
            </div>
        </footer>
    );
};

export default Footer;