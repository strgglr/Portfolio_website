import React from "react";
import './index.css';


export default function Progress({props}){
    return(
        <div className="outer">
            <div className="progress-container" style={{width:`${props.width}%`}}>
                {props.text}
            </div>
        </div>
    )
}