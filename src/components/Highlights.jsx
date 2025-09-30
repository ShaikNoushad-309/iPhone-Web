import React from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {rightImg, watchImg} from "../utils/index.js";
import VideoCarousel from "../components/VideoCarousel.jsx"
// import watch from "/assets/images/watch.svg";

const Highlights = () => {

    useGSAP(() => {
        gsap.to("#title", {
            opacity: 1,
            y: 0,
            delay: 1
        })
        gsap.to(".link", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.5,
            stagger: 0.5
        })
    }, [])
    return (
        <section id="highlights" className="w-screen overflow-hidden h-full bg-zinc common-padding">
            <div className="screen-max-width">
                <div className="md:flex mb-12 w-full items-end justify-between">
                    <h1 id="title" className="section-heading ">Get the
                        Highlights.</h1>
                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link">Watch the film
                            <img src={watchImg} alt="watch" className="ml-2"/></p>
                        <p className="link">Watch the event
                            <img src={rightImg} alt="watch" className="ml-2"/></p>
                    </div>
                </div>
                <VideoCarousel/>
            </div>
        </section>
    );
};

export default Highlights;