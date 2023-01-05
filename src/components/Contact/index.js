import { faLinkedin, faSquareFacebook, faSquareGithub, faSquareInstagram, faSquareTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './index.css';

export default function Contact(){
    return(
        <div className="contact-container">
            <div className="contact-top">
                <div className="contact-info">
                    <h1>
                        CONTACT ME
                    </h1>
                    <ul className="info-list">
                        <li className="info-item"><FontAwesomeIcon className="info-icon" icon={faHome}></FontAwesomeIcon>F-5, Ravindra Bhawan, IIT Roorkee</li>
                        <li className="info-item"><FontAwesomeIcon className="info-icon" icon={faWhatsapp}></FontAwesomeIcon>+91-7015978234</li>
                        <li className="info-item"><FontAwesomeIcon className="info-icon" icon={faEnvelope}></FontAwesomeIcon>evilu100@gmail.com</li>
                    </ul>
                </div>
                <div className="linkedin">
                    <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin}></FontAwesomeIcon>
                    <a href="https://www.linkedin.com/in/mohit-verma-894020236/">Connect</a>
                </div>
            </div>
            <div className="contact-bottom">
                <div className="bottom-copyright">
                    Copyright <FontAwesomeIcon className="copyright" icon={faCopyright}></FontAwesomeIcon> 2022, Mohit
                </div>
                <div className="contact-socials">
                    <a href="https://www.instagram.com/ig_strgglr/?next=%2Fig_strgglr%2F" className="social-item"><FontAwesomeIcon icon={faSquareInstagram}></FontAwesomeIcon></a>
                    <a href="https://www.facebook.com/evil.sparkie/" className="social-item"><FontAwesomeIcon icon={faSquareFacebook}></FontAwesomeIcon></a>
                    <a href="https://github.com/strgglr" className="social-item"><FontAwesomeIcon icon={faSquareGithub}></FontAwesomeIcon></a>
                    <a href="http://link" className="social-item"><FontAwesomeIcon icon={faSquareTwitter}></FontAwesomeIcon></a>
                </div>
            </div>
        </div>
    )
}