import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.css";


export default function Reviews(){
    const Reviews = ["Review 1", "Review 2", "Review 3", "Review 4", "Review 5"];
    const [slide, setSlide] = useState(0);
    let len = Reviews.length;
    return(
        <div className="reviews-container">
            <FontAwesomeIcon icon={faChevronLeft} className="left" onClick = {() => setSlide((slide-1+len)%len)}>&lt;</FontAwesomeIcon>
            <div className="review">{Reviews[slide]}</div>
            <FontAwesomeIcon icon={faChevronRight} className="right" onClick = {() => setSlide((slide+1+len)%len)}>&gt;</FontAwesomeIcon>
        </div>
    )
}