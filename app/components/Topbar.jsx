"use client"
import React, {useState, useEffect, useRef } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from '@gsap/react';
import Loader from "./Loader";

const Topbar = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const loaderAnimation = () => {
        gsap.to("#loader", {
            scale: 0.95,
            duration: 0.1,
            ease: "power2.out",
            onComplete: () => {
                gsap.fromTo(
                    "#hero",
                    { y: 10, },
                    {
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                    }
                );
            },
        });
    };
    
    const handleFinishLoading = () => {
        loaderAnimation();
        setIsLoading(false);
    };

    const ref = useRef(null);
    useGSAP(() => {
        if (typeof window != "undefined" && !ref.current) return;
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollSmoother.create({
            smooth: 0.9,
            smoothTouch: 0.01,
            effects: true,
            normalizeScroll: true
        });

        document.querySelectorAll("a[href^='#']").forEach(anchor => {
            anchor.addEventListener("click", (e) => {
                const targetId = anchor.getAttribute("href");
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault(); // Prevent native jump
                    smoother.scrollTo(targetElem, true, "power2.out"); // Smooth scroll
                }
            });
        });
    }, []);

    return (
        <>
                {isLoading && <Loader onFinish={handleFinishLoading} />}

                <div className='' id="smooth-wrapper" ref={ref}>
                    <div className='' id="smooth-content">
                        <div className='fixed inset-0 z-50 pointer-events-none'>
                            <div className='bottom-strip absolute bottom-28 left-0 p-2'>
                                <ul className='pl-2 text-xl text-white'>
                                    <li className='m-3'>
                                        <a
                                            href='https://github.com/malikanubhav'
                                            className='hover:cursor-pointer pointer-events-auto'
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <FaGithub />
                                        </a>
                                    </li>
                                    <li className='m-3'>
                                        <a
                                            href='https://www.linkedin.com/in/anubhav010/'
                                            className='hover:cursor-pointer pointer-events-auto'
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <FaLinkedin />
                                        </a>
                                    </li>
                                    <li className='m-3'>
                                        <a
                                            href='https://x.com/Deval_A_'
                                            className='hover:cursor-pointer pointer-events-auto'
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <FaSquareXTwitter />
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <div className='top-strip absolute top-0 right-0 p-2'>
                                <ul className='flex flex-row text-white'>
                                    <li className='p-4'>
                                        <a
                                            href='#work'
                                            className='hover:cursor-pointer pointer-events-auto'
                                        >
                                            Work
                                        </a>
                                    </li>
                                    <li className='p-4'>
                                        <a
                                            href='#exp'
                                            className='hover:cursor-pointer pointer-events-auto'
                                        >
                                            Experience
                                        </a>
                                    </li>
                                    <li className='p-4'>
                                        <a
                                            href='#contact'
                                            className='hover:cursor-pointer pointer-events-auto'
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {children}
                    </div>
                </div>

            </>
            )
}

            export default Topbar