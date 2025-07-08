"use client"
import { useGSAP } from "@gsap/react";
import ContactModal from "../components/ContactModal";
import HeadButton from "../components/HeadButton";
import { GoArrowDownRight } from "react-icons/go"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
export default function Contact() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top bottom",
                    end: "+=100%",
                    pinSpacing: false,
                    scrub: true,
                }
            }
        ).fromTo(".contact-inner",{ yPercent: -100},{yPercent: 0,ease: "none"})
                .fromTo(".contact-btn",{xPercent:-150},{xPercent:0});
    });

    return (
        <section className="bg-slate-100 -z-99 relative" id="contact">
            <div className=" contact-inner w-full h-dvh  flex items-center justify-center bg-black text-white">
                <div className="lg:w-1/2 m-auto">
                    <h2 className="text-5xl md:text-6xl text-center font-semibold mb-4 flex justify-start items-end">Got an Idea,<br />Let's talk  <GoArrowDownRight size={50} /></h2>
                    <div className="flex text-4xl mx-auto m-32 flex-col">
                        <div className="w-full border-t-1 border-white-600 m-auto relative">
                            <div className="absolute  right-8 -top-16 contact-btn">
                                <HeadButton text={"Get in touch"} size={32} fontStyle={"semibold"} fontSize={"sm"}  />
                            </div>
                        </div>
                        <div className="mt-32 flex flex-col md:flex-row">
                            <div className="badge m-2 p-6 text-lg bg-transparent border-gray-400 text-gray-400  hover:cursor-pointer">Anubhavfixer@gmail.com</div>
                            <div className="badge m-2 p-6 text-lg bg-transparent border-gray-400 text-gray-400  hover:cursor-pointer">+91 81266 53995</div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactModal />
        </section>
    );
}
