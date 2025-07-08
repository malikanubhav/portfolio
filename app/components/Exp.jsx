import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Heading from "../components/Heading";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/all';
const Exp = () => {


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

        gsap.utils.toArray(".line").forEach((line, i) => {
            
            gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    start: "top 75%",
                    end: "bottom 60%",
                    scrub: true,
                    toggleActions: "restart end resume pause",
                }
            }).fromTo(line, { scaleY: 0, transformOrigin: "top center"}, { scaleY: 1 });
        });
            gsap.utils.toArray("li").forEach((item) => {
                const start = item.querySelector(".timeline-start");
                const middle = item.querySelector(".timeline-middle");
                const end = item.querySelector(".timeline-end");
    
            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 65%",
                    duration: 0.1,
                    toggleActions: "restart end end reverse",
                    autoAlpha:1,
                }
            })
            .fromTo(start, {opacity:0, x: -70, }, { opacity: 1, x: 0 },"<")
            .fromTo(middle, {autoAlpha:1, scale:0 }, { scale:1 },"<")
            .fromTo(end, {opacity:0, opacity: 0, x: 70, }, { opacity: 1, x: 0 },"<");
        });

    }, [])

    return (
        <div className=' min-h-dvh mx-auto p-8 bg-white experience flex align-center flex-col' id='exp'>
            <h2 className='text-5xl mb-20 text-center'><Heading text={"Exprience"} /></h2>
            <ul className="timeline timeline-vertical ">
                <li className="">
                    <div className="line h-24 border-l-2 border-black rounded-lg  mx-auto "></div>
                    <div className="timeline-start">
                        <div className=" text-xl font-semibold">Graduation</div>
                        <div className=" ">2019 -2023</div>
                    </div >
                    <div className="timeline-middle">
                        <FaGraduationCap size={40} />
                    </div>
                    <div className="timeline-end timeline-box text-xl font-semibold">Sharda University B.Tech (CSE)</div>
                    <div className="line h-24 border-l-2 border-black mx-auto "></div>
                </li>
                <li className="">
                    <div className="line h-24 border-l-2 border-black mx-auto"></div>
                    <div className="timeline-start ">
                        <div className="text-xl font-semibold">Software Engineer</div>
                        <div className="">Jan 2023 - Mar 2023</div>
                    </div >
                    <div className="timeline-middle">
                        <MdWork size={30} />
                    </div>
                    <div className="timeline-end timeline-box text-xl font-semibold">PrimeAuctions</div>
                    <div className="line h-24 border-l-2 border-black mx-auto"></div>
                </li>
                <li className="">
                    <div className="line h-24 border-l-2 border-black mx-auto"></div>
                    <div className="timeline-start ">
                        <div className="text-xl font-semibold">Software Enginer</div>
                        <div className="">May 2023 - Present</div>
                    </div >
                    <div className="timeline-middle">
                        <MdWork size={30} />
                    </div>
                    <div className="timeline-end timeline-box text-xl font-semibold ">Ixambee</div>
                    <div className="line h-24 border-l-2 border-black mx-auto"></div>
                </li>
            </ul>
        </div>
    )
}

export default Exp