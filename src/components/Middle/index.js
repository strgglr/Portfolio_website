import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "../assets/profile.jpg"
import "./index.css"


export default function Middle(){
    return (
        <div className="middle-container">
            <div className="middle-intro">
                <h2 className="intro-1">I AM MOHIT</h2>
                <h1 className="intro-2"><span className="intro-2-gold">Struggling</span> and <span className="intro-2-gold">Hustling</span> forever</h1>
                <NavLink to="/hire" className="button-about">HIRE ME</NavLink>
            </div>
            <div className="middle-profile">
                <div className="img-profile">
                    <img src={Profile} alt="Profile" />
                </div>
                <div className="middle-desc">
                    <h2 className="desc">Mohit</h2>
                    <h2 className="desc">Age 20</h2>
                </div>
            </div>
        </div>
    )
}