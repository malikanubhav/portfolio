import React from 'react'
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

const TextBox = ({ text }) => {

    const ref = useRef(null);
    useGSAP(() => {
        gsap.registerPlugin(SplitText, ScrollTrigger);
        let split = SplitText.create(ref.current, { type: "lines" });
        gsap.from(split.lines, {
            rotationX: -100,
            transformOrigin: "50% 50% -100px",
            opacity: 0,
            duration: 0.8,
            ease: "power3",
            stagger: 0.25,
            scrollTrigger: {
                trigger: split.lines,
                autoSplit: true,
                ease: 'power1.in',
                start: 'top 80%',
                toggleActions: "play complete complete reset",
            },
        });
    }, []);
    return (
        <div ref={ref} className='mb-5  text-3xl text-center mx-auto'>{text}</div>
    )
}

export default TextBox