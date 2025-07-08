"use client"
import React from 'react'
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
const Heading = ({ text, size }) => {

  const ref = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    let split = SplitText.create(ref.current, { type: "words" });
    gsap.from(split.words, {
      rotationX: -100,
      transformOrigin: "50% 50% -100px",
      opacity: 0,
      duration: 0.8,
      ease: "power3",
      stagger: 0.25,
      scrollTrigger: {
        trigger: split.words,
        autoSplit: true,
        ease: 'power1.in',
        start: 'top 70%',
        toggleActions: "play complete complete reset",
      },
    });
  }, []);
  return (
    <div ref={ref} className='heading-animation relative opacity-80 text-2xl md:text-6xl font-black  text-black-700 my-12 mb-20 text-center'>{text}</div>
  )
}

export default Heading