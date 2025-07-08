"use client"
import React, { useEffect, useRef } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Project = ({ title, stack, demoUrl }) => {
  const demo = useRef(null);
  

  const ref = useRef(null);
  // useGSAP(() => {
  //   gsap.fromTo(ref.current, {
  //     opacity:0,
  //     scale:0,
  //     ease: "power2.out",
  //   }, {
  //     opacity:1,
  //     scale:1,
  //     duration:1,
  //     ease: "power2.in",
  //   }) },[]);

  useEffect(() => {
    const parent = ref.current;
    const follower = demo.current;
  
    follower.style.pointerEvents = "none";
  
    const handleMouseEnter = () => {
      gsap.to(follower, {
        duration: 0.5,
        overwrite: "auto",
        autoAlpha: 1,
        scale: 1,
        ease: "power3.out",
      });
    };
  
    const handleMouseLeave = () => {
      gsap.to(follower, {
        duration: 0.5,
        overwrite: "auto",
        autoAlpha: 0,
        scale: 0,
        ease: "power3.in",
      });
    };
  
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);
  
    
    const moveFollower = (e) => {
      const offsetX = e.pageX - (follower.offsetWidth / 2);
      const offsetY = e.pageY - (follower.offsetHeight / 2);
  
      gsap.to(follower, {
        duration: 0.2,                  
        x: offsetX,
        y: offsetY,
        overwrite: "auto",
        ease: "power3.out",             
      });
    };
  
    window.addEventListener("mousemove", moveFollower);
  
    return () => {
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", moveFollower);
    };
  }, [ref, demo]);
  


  return (
    <>
      <div ref={ref} className='relative project group grid   auto-rows-max w-full px-4 lg:px-20 py-6 lg:py-12 '>
      <div className='z-20  top-0 left-0 block lg:hidden col-span-2'>
          <img src={demoUrl} className='' />
        </div>
        <div className='project-title flex flex-row items-center transition delay-150 duration-300 ease-in-out hover:-translate-x-6 '>
          <h3 className='text-2xl lg:text-5xl transform '>{title} </h3>
          <span className="text-5xl "><GoArrowUpRight /></span>
        </div>
        <div ref={demo}  className='project-demo fixed w-86 h-86 z-20 top-0 left-0 opacity-0 scale-0'>
          <img src={demoUrl} className='' />
        </div>
        <div className='flex flex-wrap gap-1 my-8 justify-self-end opacity-80 '>
          <div className="badge badge-primary text-xl p-2">Next.js</div>
          <div className="badge badge-primary text-xl p-2">Node.js</div>
          <div className="badge badge-primary text-xl p-2">MongoDB</div>
          <div className="badge badge-primary text-xl p-2">Javascript</div>
          <div className="badge badge-primary text-xl p-2">Tailwind </div>
        </div>
      </div>
      <hr className='opacity-40' />
    </>
  )
}

export default Project