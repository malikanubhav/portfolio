"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Work from "./components/Work";
import ToolsSection from "./components/ToolsSection";
import Exp from "./components/Exp";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
        <Hero />
        <Work />
        <ToolsSection />
        <Exp />
        <Contact />
    </>
  );
}
