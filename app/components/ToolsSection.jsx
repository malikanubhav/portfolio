import React from 'react';
import Heading from "./Heading";
import {  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker,} from 'react-icons/fa';
import {   SiMongodb, SiPostgresql, SiExpress, SiTailwindcss, SiRedux, SiNextdotjs, SiJenkins,SiMysql,SiPhp,SiLaravel, SiJest,  SiPostman,SiTypescript,SiLinux, SiHtml5, SiCss3, SiJavascript,SiRedis } from 'react-icons/si';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const techStack = {
  'Frontend': [
    { name: 'React', icon: <FaReact className="" /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Redux', icon: <SiRedux /> },
  ],
  'Backend': [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Laravel', icon: <SiLaravel /> },
  ],
  'Database': [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
  ],
  'Tools & DevOps': [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Jenkins', icon: <SiJenkins /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'Linux', icon: <SiLinux /> },
  ]
};

const ToolsSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#tools-parent",
        duration:3,
        ease: 'power3.in',
        start: 'top 70%',
        toggleActions: "play complete complete reset",
      }
    });
    tl.fromTo(".frontend-cover", { scaleX: 1, transformOrigin: "left center" }, { scaleX: 0, duration: 0.6, ease: "power3.in" })
      .fromTo(".backend-cover",  { scaleY: 1, transformOrigin: "top center" }, { scaleY: 0, duration: 0.8, ease: "power3.in" }, "<")
      .fromTo(".database-cover", { scaleY: 1, transformOrigin: "bottom center" }, { scaleY: 0, duration: 1.0, ease: "power3.in" }, "<")
      .fromTo(".tools-cover",    { scaleX: 1, transformOrigin: "right center" }, { scaleX: 0, duration: 1.2, ease: "power3.in" }, "<");
    tl.fromTo("#frontend", { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 0.3, ease: "power3.in" }, "<-0.2")
      .fromTo("#backend",  { yPercent: -100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.9, ease: "power3.in" }, "<")
      .fromTo("#database", { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.6, ease: "power3.in" }, "<")
      .fromTo("#tools",    { xPercent: 100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 0.1, ease: "power3.in" }, "<");
  });
  
  return (
    <section className='bg-black text-white transition-all duration-[5s] ease-in-out'>
      <div className="w-11/12 md:w-9/12 mx-auto py-16 min-h-dvh flex flex-col items-center justify-center  ">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 tracking-tight text">
          <Heading text={"What I Bring to the Table"}/>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative'  id='tools-parent'>
          <div id='frontend' className="p-8 md:border-r-1 md:border-b-1 border-white h-full ">
            <div className="absolute top-0 left-0 w-full h-full bg-white z-10 frontend-cover"></div>
            <div >
              <h3 className="text-2xl text-center pb-4 ">
                Frontend
              </h3>
              <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
                {techStack.Frontend.map((tech, index) => (
                  <div key={index}
                    className="transform hover:-translate-y-1 transition duration-300 flex flex-col items-center"
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <p className="text-sm font-medium ">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id='backend' className="p-8 md:border-b-1 md:border-white h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-white z-10 backend-cover"></div>
            <div >
              <h3 className="text-2xl text-center pb-4 md:">
                Backend
              </h3>
              <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
                {techStack.Backend.map((tech, index) => (
                  <div
                    key={index}
                    className="transform hover:-translate-y-1 transition duration-300 flex flex-col items-center"
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <p className="text-sm font-medium ">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id='database' className="p-8 md:border-r-1 md:border-white h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-white z-10 database-cover"></div>
            <div >
              <h3 className="text-2xl text-center pb-4 ">
                Database
              </h3>
              <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
                {techStack.Database.map((tech, index) => (
                  <div
                    key={index}
                    className="transform hover:-translate-y-1 transition duration-300 flex flex-col items-center"
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <p className="text-sm font-medium ">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id='tools' className="p-8 md:border-white h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-white z-10 tools-cover"></div>

            <div >
              <h3 className="text-2xl text-center pb-4 ">
                Tools & Devops
              </h3>
              <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
                {techStack['Tools & DevOps'].map((tech, index) => (
                  <div
                    key={index}
                    className="transform hover:-translate-y-1 transition duration-300 flex flex-col items-center"
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <p className="text-sm font-medium ">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
