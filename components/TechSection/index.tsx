import React, {useEffect} from 'react';
import gsap from "utils/gsap"
import TechSectionStyle from "./TechSection.style";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

function  TechSection() {
    useEffect(() => {
        const timeline = gsap.timeline()
        new ScrollTrigger({
            animation:timeline,
            trigger: document.querySelector("#tech_section"),
            start: "30px bottom",
            end: "50% bottom",
            scrub: 1,
        })
        timeline.to("#wave1", {
            y: "80%", x: "80%",
        },0)
        timeline.to("#blob1",{x:0,y:0},0)

    }, [])
    return (
        <TechSectionStyle id={"tech_section"}></TechSectionStyle>
    );
}

export default TechSection;