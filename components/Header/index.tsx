// noinspection TypeScriptValidateJSTypes

import React, {useEffect, useRef} from 'react';
import HeaderStyle from "./Header.style";
import Link from "next/link";
import {GitHub, Instagram, Mail, Menu} from "react-feather";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import gsap from "utils/gsap"

function Header() {
    const navRef = useRef(null)
    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": function () {
                gsap.to(navRef.current, {
                    y: 30, width: "75%", borderRadius: 40,
                    scrollTrigger: {
                        trigger: document.body,
                        start: 30,
                        end: 30,
                        scrub: 1,
                    }
                })
            },
            "(max-width: 1023px)": function () {
                gsap.to(navRef.current, {
                    y: 5, width: "98%", borderRadius: 5,
                    scrollTrigger: {
                        trigger: document.body,
                        start: 30,
                        end: 30,
                        scrub: 1,

                    }
                })
            }
        })
    }, [])
    return (
        <HeaderStyle ref={navRef}>
            <div className="container">
                <div className="title"><h1>{"<"}Chirag{"/>"}</h1></div>
                <div className="links gap-2">
                    <Link
                        className={"bg-gray-100 bg-opacity-30 rounded"}
                        href={"#"}>
                        <p>Contact Me</p>
                    </Link>
                    <Link className={"bg-gray-100 bg-opacity-30 rounded"} href={"#"}>
                        <p>My Projects</p>
                    </Link>
                </div>
                <div className="social flex ">
                    <a href="#">
                        <GitHub height={25} width={25}/>
                    </a>
                    <a href="#">
                        <Instagram height={25} width={25}/>
                    </a>
                    <a href="#">
                        <Mail height={25} width={25}/>
                    </a>
                </div>
                <div className="menu-btn">
                    <button>
                        <Menu height={25} width={25}/>
                    </button>
                </div>
            </div>
        </HeaderStyle>
    );
}

export default Header;