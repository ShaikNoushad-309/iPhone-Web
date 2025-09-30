import React, {useRef} from 'react';
// import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {animateWithGsap} from "../utils/animations.js";
import {exploreVideo, explore1Img, explore2Img} from "../utils/index.js";
import gsap from "gsap";

const Features = () => {
    const videoRef = useRef()
    useGSAP(() => {
        gsap.to("#exploreVideo", {
            scrollTrigger: {
                trigger: "#exploreVideo",
                toggleActions: "play pause reverse restart ", // determines hoe animation acts on {start , leave , enterBack , leaveBack }
                start: '-10% bottom',
                // markers: true
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })
        animateWithGsap("#features_title", {y: 0, opacity: 1})
        animateWithGsap(".g_grow", {scale: 1, opacity: 1, ease: 'power1'},
            {scrub: 5.5})
        animateWithGsap(".g_text", {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1
        })
    }, [])
    return (
        <section className="h-full common-padding bg-zinc relative overflow-hidden">
            <div className="screen-max-width">
                <div className="mb-12 w-full ">
                    <h1 id="features_title" className="section-heading">
                        Explore the full story.
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center overflow-hidden ">`
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold">Forged in Titanium.</h2>
                    </div>
                    <div className="flex-col flex-center sm:px-10">
                        <div className="relative h-[15vh] w-full flex items-center ">
                            <video playsInline id="exploreVideo" className="w-full h-full object-center object-cover"
                                   preload="none" muted autoPlay ref={videoRef}>
                                <source src={exploreVideo} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container">
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore1Img} alt="Titanium" className="feature-video g_grow"/>
                                </div>
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore2Img} alt="Titanium2" className="feature-video g_grow"/>
                                </div>
                            </div>
                            <div className="feature-text-container">
                                <div className=" flex-1 flex-center ">
                                    <p className="feature-text g_text">
                                        iPhone 15 pro is {' '}
                                        <span className="text-white">
                                            the first iPhone to feature aerospace-grade titanium design using the same alloy that space crafts use fro missions to Mars.
                                        </span>
                                    </p>
                                </div>
                                <div className=" flex-1 flex-center ">
                                    <p className="feature-text g_text">
                                        Titanium has one of the best strength-to-weight ratio of any metal, making these
                                        our
                                        {' '}
                                        <span className="text-white">
                                          lightest Pro model ever.
                                        </span>
                                        You'll notice the difference the moment you pick one up.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;