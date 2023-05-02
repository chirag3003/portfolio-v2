import React, {useEffect, useRef} from 'react';
import Card1 from "../Card1";
import {Phone} from "react-feather";
import gsap from "utils/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import SkillCardsStyle from "./SkillCards.style";

function Index() {
    const ref = useRef<HTMLElement>(null)
    useEffect(() => {
        const timeline = gsap.timeline()
        new ScrollTrigger({
            animation:timeline,
            trigger:ref.current,
            start:"30% bottom",
            end:"50% bottom",
            scrub:1
        })
        timeline.to("#blob1",{
            x:"-20vw",
            y:"-20vw"
        },0)
    },[])
    return (
        <SkillCardsStyle ref={ref} id={"skill_section"} className={"p-10 lg:p-32 xl:p-48 pt-36 lg:pt-48"}>
            <h2 className={"title text-3xl xl:text-4xl font-semibold mb-10"}>What do I do ?</h2>
            <div className="list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <Card1 Icon={Phone} heading={"Web Development"} description={"some description"}/>
                <Card1 Icon={Phone} heading={"Web Development"} description={"some description"}/>
                <Card1 Icon={Phone} heading={"Web Development"} description={"some description"}/>
            </div>
        </SkillCardsStyle>
    );
}

export default Index;