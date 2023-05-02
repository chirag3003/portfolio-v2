import React, {useEffect} from 'react';
import gsap from "utils/gsap"
import TechSectionStyle from "./TechSection.style";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

function TechSection() {
    useEffect(() => {
        const timeline = gsap.timeline()
        new ScrollTrigger({
            animation: timeline,
            trigger: document.querySelector("#tech_section"),
            start: "30% bottom",
            end: "60% bottom",
            scrub: 1
        })
        timeline.fromTo("#tech_section",{
            opacity:0,
            y:200
        },{opacity:1,y:0},0)
        timeline.to("#wave1", {
            y: "80%", x: "80%",
        }, 0)
        timeline.to("#blob1", {x: 0, y: 0}, 0)
    }, [])
    return (
        <TechSectionStyle id={"tech_section"} className={"flex flex-col lg:flex-row p-10 lg:p-48 pt-36 lg:pt-48"}>
            <div className="header w-full lg:h-full p-2 flex flex-col justify-center">
                <h2 className={"text-3xl lg:text-4xl lg:max-w-md my-4 z-10"}>What are my Programming Skills</h2>
                <p className={"lg:max-w-lg lg:text-lg"}>
                    I develop simple, intuitive and responsive user interface that helps users get things done with less
                    effort and time with those technologies.
                </p>
            </div>
            <div className="skill-list w-full lg:h-full flex flex-col justify-center">
                <div className="list grid grid-cols-4 p-2 md:grid-cols-5 xl:grid-cols-6 gap-5 w-full">
                    {Array(10).fill("").map((_, index) => {
                        return (
                            <div key={index} className="skill ">
                                <div className="image w-full aspect-square">

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </TechSectionStyle>
    );
}

export default TechSection;