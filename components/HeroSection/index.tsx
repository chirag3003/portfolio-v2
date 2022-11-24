import React, {useEffect} from 'react';
import HeroSectionStyle from "./HeroSection.style";
import gsap from "utils/gsap"
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

function setScrollanim(){
    const timeline = gsap.timeline()
    new ScrollTrigger({
        animation:timeline,
        trigger:document.body,
        start:0,
        end:"100vw",
        scrub:1
    })

    timeline.to(document.querySelector("#hero_section .text"),{
        x:"-100%"
    })

}

function HeroSection() {

    useEffect(() => {
        setScrollanim()
    },[])
    return (
        <HeroSectionStyle id={"hero_section"}>
            <div className="text">
                <div className="intro">
                    <p>
                        Hi, I am
                    </p>
                    <h1>Chirag Bhalotia</h1>
                </div>
                <div className="desc">
                    <p>A passionate Intermediate Full Stack Developer 🚀 having an experience of building responsive Web
                        applications with JavaScript / Reactjs / Nodejs and some other cool libraries and
                        frameworks.</p>
                </div>
                <div className="buttons">
                    <button className={"contact"}>
                        Contact Me
                    </button>
                </div>
            </div>
            <div className="image">
                <img src="/assets/hero_img.svg" alt=""/>
            </div>
        </HeroSectionStyle>
    );
}

export default HeroSection;