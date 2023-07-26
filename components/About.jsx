import React from "react"
import Footer from "./Footer"
import bgImg from "../assets/images/about-hero.png"

export default function About(){
    return(
        <div className="about-page">
            
                <img src={bgImg} alt="van-life" className="about-img"/>
                <div className="about-page-details">
                    <h1 className="about-page-title">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental.
                        Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        <br/>(Hitch costs extra 😉)</p>
                    <p>
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                    <div className="about-page-button">
                        <p >Your destination is waiting. <br/>Your van is ready.</p>
                        <button>Explore our vans</button>
                    </div>
                </div>

            
            <Footer/>
        </div>
    )
}