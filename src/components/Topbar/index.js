import React from "react";
import "./index.css";
import Middle from "../Middle";
import About from '../About'
import Skills from '../Skills'
import Contact from '../Contact'
import Reviews from "../Reviews";
import {useActiveMenu} from "react-active-menu";


function Topbar(){
    // eslint-disable-next-line
    const{registerSection, registerTrigger} = useActiveMenu('active');
    return(
        <div className="main-container">
            <div className="leftbar-container">
                <div className="leftbar-logo">
                    s7rgglr
                </div>
                <div className="leftbar-options">
                    <button ref={registerTrigger('home')}>HOME</button>
                    <button ref={registerTrigger('about')}>ABOUT</button>
                    <button ref={registerTrigger('skills')}>SKILLS</button>
                    <button ref={registerTrigger('reviews')}>REVIEWS</button>
                    <button ref={registerTrigger('contact')}>CONTACT</button>
                </div>
            </div>
            <section ref={registerSection('home')}>
                <Middle/>
            </section>
            <section ref={registerSection('about')}>
                <About/>
            </section>
            <section ref={registerSection('skills')}>
                <Skills/>
            </section>
            <section ref={registerSection('reviews')}>
                <Reviews/>
            </section>
            <section ref={registerSection('contact')}>
                <Contact/>
            </section>
        </div>
    )
}
export default Topbar;