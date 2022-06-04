import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
//import { Link } from "react-router-dom";

// About page: explaning the purpose of the website
export default function AboutPage() {
    return (
        <div>
            <NavBar/>
            <main className="about">
                <h2>About Us</h2>
                <p>
                Community Recommended
                <br/>
                We have been around since 2001 and have a loyal following of the many customers we have served in the community.
                </p>
                <p>
                The Best Choice for Pet Supply
                <br/>
                We carry supplies for dogs and cats of every type, size, and age. We have the knowledge that it takes to keep up with all of the new products that are available, helping you choose supplies that will give your pets the nutrition, health and fun that they deserve.
                </p>
            </main>
            <Footer className="about-footer"/>
        </div>
    )
}