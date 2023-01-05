import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Error(){
    return(
        <div className="error-container">
            <h1>
                OOPS, Such a page does not exist
            </h1>
            <br />
            <NavLink className="home-btn" to='/'>Home</NavLink>
        </div>
    )
}