import React, {useEffect, useState} from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {heroVideo, smallHeroVideo} from "../utils/index.js";


// gsap.utils = undefined;
const Hero = () => {
    // const [videoSrc, setVideoSrc] = useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo);
    const [videoSrc, setVideoSrc] = useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo);
    const handelSetInnerWidth = () => {
        if (window.innerWidth > 760) {
            setVideoSrc(heroVideo)
        } else {
            setVideoSrc(smallHeroVideo);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handelSetInnerWidth);
        return () => {
            window.removeEventListener("resize", handelSetInnerWidth);
        };
    }, []);

    useGSAP(() => {
        gsap.to("#hero", {
            opacity: 1,
            delay: 1,
            duration: 1,
        })
        gsap.to("#cta", {
            opacity: 1,
            y: 0,
            delay: 1.5,
            duration: 1
        })

    }, [])
    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title ">iPhone 15 pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video autoPlay muted playsInline={true}>
                        <source src={videoSrc} type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 lg:pb-5">
                <a href="#highlights" className="btn">Buy</a>
                <p className="font-normal text-xl">From $199/month or $999</p>
            </div>
        </section>
    );
};

export default Hero;