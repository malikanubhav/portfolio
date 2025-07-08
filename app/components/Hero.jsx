"use client"
import React from 'react';
import gsap from 'gsap';
import layer1 from '../assets/Layer1.1.png'
import layer2 from '../assets/Layer2.1.png'
import layer3 from '../assets/Layer3.jpg'
import { GoArrowDownLeft, GoArrowDownRight } from "react-icons/go";
import { IoIosAirplane } from "react-icons/io";
import { useGSAP } from '@gsap/react';

const Hero = () => {

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     repeat: 2,
  //     repeatDelay: 1,
  //     ease: "none"
  //   }).to("#plane", { xPercent: 100, duration: 220 })
  //     .to("#plane", { rotate: 180 })
  //     .to("#plane", { xPercent: -100, duration: 220 })
  //     .to("#plane", { rotate: -180 });
  // }, []);

  return (
    <div className='relative h-dvh w-full overflow-hidden scale-104' id="hero">
      {/* <div className='absolute -l-30 top-2/12 w-full' id='plane'>
        <IoIosAirplane size={32} />
      </div> */}
      <div className='absolute top-1/6 bg-black h-1 ' id="trail"></div>
      <div className='absolute top-0 left-0 w-full h-full -z-20 overflow-hidden'>
        <img
          data-speed="clamp(1.2)"
          src={layer3.src}
          alt='Hero'
          className='layers absolute w-full h-dvh -z-10 object-cover scale-[2] md:scale-[1]'
        />
        <img
          data-speed="clamp(0.8)"
          src={layer2.src}
          alt='Layer2'
          className='layers absolute w-full transform md:origin-bottom-left bottom-0 -z-10  scale-[3] md:scale-[1]'
        />
        <div className="absolute inset-0 flex top-1/4 justify-center -z-10 ">
          <div className='relative '>
            <svg height="400" width="400" className='absolute -left-11  -top-4' >
              <circle r="65" cx="70" cy="70" fill="#BC002D" />
            </svg>
            <div className='relative  font-sans tracking-widest text-6xl text-center md:text-8xl text-slate-200 text-shadow-lg font-bold text-shadow-slate-600  antialiased'>
              ANUBHAV
            </div>
          </div>
        </div>
        <div className='absolute text-3xl md:text-3xl transform top-7/12 md:right-1/6 p-2 text-white  flex -z-1'>
          <div className='self-end hidden md:block'>
            <GoArrowDownLeft />
          </div>
          <span className='text-shadow-md text-shadow-slate-600' >Full Stack
            <p className='text-shadow-md text-shadow-slate-600'>
              Developer
            </p>
          </span>
          <div className='self-end md:hidden'>
            <GoArrowDownRight />
          </div>
        </div>
        <img
          data-speed="clamp(0.1)"
          src={layer1.src}
          alt='Layer1'
          className='layers absolute w-full bottom-0 left-0 -z-10 transform  origin-bottom md:origin-bottom-left scale-[2] lg:scale-[1] 2xl:scale-[0.92]'
        />
      </div>
      <div className='relative z-20 flex flex-col items-center justify-center h-full text-center text-white'>
      </div>
    </div>
  )
}


export default Hero;