import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutPage = () => {
    return (  
        <>
            <Navbar />
            <div className="about-container">
                <div className="about-header">About <span>Us</span></div>
                <div className="about-smod">
                    <span>Welcome to S Modifications,</span><br/><br/>
                    At S Modifications, we are dedicated to enhancing your GTA gaming experience with our premium modding services. Whether you're looking for modded cars, rank boosts, in-game money, or an advanced mod menu, we have everything you need to take your gameplay to the next level.
                    <br /><br />
                    <span>Who We Are</span><br /><br />
                    S Modifications was founded by a team of passionate gamers and experienced developers who understand the GTA platform inside and out. Our goal is to provide high-quality, reliable, and undetectable modding solutions that allow you to enjoy the game your way.
                    <br /><br />
                    <span>What We Offer</span><br /><br />
                    Our services include:<br /><br />
                    - <strong>Modded Cars</strong>: Get access to rare, custom, and high-performance vehicles that will set you apart from other players.<br />
                    - <strong>Rank Boosts</strong>: Instantly level up your account to unlock new features, weapons, and abilities.<br />
                    - <strong>In-Game Money</strong>: Never worry about grinding for cash again – we provide large sums of GTA money instantly.<br />
                    - <strong>Mod Menu</strong>: Gain access to an advanced mod menu packed with powerful features to enhance your gaming experience.
                    <br /><br />
                    <span>Why Choose S Modifications?</span><br /><br />
                    - <strong>Fast and Reliable Service</strong>: We deliver your mods quickly and efficiently so you can enjoy them as soon as possible.<br />
                    - <strong>Safe and Undetectable</strong>: We use the latest stealth techniques to ensure your account remains secure.<br />
                    - <strong>Regular Updates</strong>: Our mods are always up-to-date with the latest GTA patches to ensure full compatibility.<br />
                    - <strong>Customer Support</strong>: Our support team is available to assist you with any questions or issues.
                    <br /><br />
                    <span>Get in Touch</span><br /><br />
                    If you're ready to take your GTA experience to the next level, contact us today! Whether you need modded cars, ranks, money, or a mod menu, we've got you covered.
                    <br /><br />
                    <span>Contact Information:</span><br /><br />
                    Support: <a href="mailto:support@smodifications.xyz">support@smodifications.xyz</a>
                    <br /><br />
                    Thank you for choosing S Modifications. We look forward to enhancing your GTA journey!
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;