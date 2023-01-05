import React from "react";
import Progress from "../Progress";
import './index.css'

export default function About(){
    return(
        <div className="about-container">
            <h2 className="about-heading">ABOUT ME</h2>
            <div className="about-desc-container">
                <p className="about-desc">I am Mohit, an undergraduate at IIT Roorkee from Engineering Physics. I am in deep love with programming since the day I started it. I am a keen observer and quick learner which has allowed me to maintain a constant interest in algorithms and problem solving. I am also an intermediate level web developer and love to develop different kinds of web-platfroms which offer unreal experience.</p>
                <div className="about-skills">
                    <Progress props={{width:90, text:'Problem solving'}}/>
                    <Progress props={{width:67, text:'Database'}}/>
                    <Progress props={{width:86, text:'Languages'}}/>
                    <Progress props={{width:81, text:'Web Devlopment'}}/>
                </div>
            </div>
        </div>
    )
}