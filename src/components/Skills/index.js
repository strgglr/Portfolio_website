import { faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faCode, faGear, faMedal} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.css";


export default function Skills(){
    return(
        <div className="skills-container">
            <div className="skills-left">
                <div className="skills">
                    <FontAwesomeIcon className="skill-icon" icon={faGear} />
                    <span className="skill-heading">Problem Solving</span>
                    <span className="skill-main">Ability to solve new problems. Optimization for space and time.</span>
                    <button className="more">
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
                <div className="skills">
                    <FontAwesomeIcon className="skill-icon" icon={faCode} />
                    <span className="skill-heading">Programming Languages</span>
                    <span className="skill-main">Knowledge of different programming languages like C++, Javascript, MATLAB.</span>
                    <button className="more">
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <div className="skills-center">
                <FontAwesomeIcon className="skill-image" icon={faMedal}></FontAwesomeIcon>
            </div>
            <div className="skills-right">
                <div className="skills">
                    <FontAwesomeIcon className="skill-icon" icon={faHtml5} />
                    <span className="skill-heading">Web Developer</span>
                    <span className="skill-main">Knowledge of HTML, CSS, Javascript, Bootstrap, Reactjs</span>
                    <button className="more">
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
                <div className="skills">
                    <FontAwesomeIcon className="skill-icon" icon={faReact} />
                    <span className="skill-heading">Libraries and Frameworks</span>
                    <span className="skill-main">Reactjs, Bootstrap, Python-Tkinter, Python-Kivy</span>
                    <button className="more">
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}