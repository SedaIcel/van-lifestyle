import React from "react"
import Footer from "./Footer"

export default function Home(){
    return(
        <div>
            <div className="home-page-details">
                <p className="home-page-title">You got the travel plans, we got the travel vans.</p>
                <p className="home-page-description">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className="finding-van">Find your van</button>
            </div>
            <Footer/>   
        </div>
    )
}