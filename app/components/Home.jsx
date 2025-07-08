import { Hero } from "../components/Hero"
import Topbar from "../components/Topbar"
import { Work } from "./Work"
import {Contact } from "./Contact"
import Exp from "./Exp"
import ToolsSection from "./ToolsSection"
import MapSection from "../components/MapSection"

const Home = () => {
  return (
    <>
        <Hero />
        <Work />
        <ToolsSection />
        <Exp />
        {/* <MapSection />       */}
        <Contact />
    </>
  )
}

export default Home