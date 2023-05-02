import React, {useEffect} from 'react';
import HeroSectionStyle from "./HeroSection.style";
import gsap from "utils/gsap"
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

function setScrollAnimation(){
    const timeline = gsap.timeline()
    new ScrollTrigger({
        animation:timeline,
        trigger:document.querySelector("#hero_section"),
        start:"40% top",
        end:"45% top",
        scrub:1,
    })

    timeline.to(document.querySelector("#hero_section .text"),{
        x:"-150%"
    })
    timeline.to(document.querySelector("#hero_section .image"),{
        x:"150%"
    },0)

}

function HeroSection() {

    useEffect(() => {
        setScrollAnimation()
    },[])
    return (
        <HeroSectionStyle id={"hero_section"} className={"flex-col lg:flex-row p-10 lg:p-48 pt-36 lg:pt-48"}>
            <div className="text w-full lg:w-1/2">
                <div className="intro text-3xl md:text-4xl lg:text-5xl">
                    <p>
                        Hi, I am
                    </p>
                    <h1>Chirag Bhalotia</h1>
                </div>
                <div className="desc mt-5 text-sm md:text-lg lg:mt-10 lg:text-xl">
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
            <div className="image w-full lg:w-1/2 m-10 sm:p-20">
                <img src="/assets/hero_img.svg" alt=""/>
            </div>
        </HeroSectionStyle>
    );
}

export default HeroSection;