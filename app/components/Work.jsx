import React from 'react'
import Project from './Project'
import Heading from './Heading'
import TextBox from "./TextBox"
import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"


const Work = () => {

return (
    <section className='md:w-9/12 mx-auto min-h-dvh flex flex-col justify-center my-28' id="work">
      <div className="grid lg:grid-rows-2 ">
        {/* <div className="rows-start-2"> */}
        <Heading text={"Work"} size={4} />
        {/* </div> */}
        {/* <div className="col-span-4 col-start-4"> */}
        <TextBox text={"I craft seamless and dynamic web experiences, blending creativity with code."} />
        {/* </div> */}
      </div>
        <div className='Projects'>
            <hr className='opacity-40'/>
            <Project demoUrl={t1.src} title="Portfolio" />
            <Project demoUrl={t2.src} title="Primeauctions" />
            {/* <Project demoUrl={t1.src} title="MyMedShop" /> */}
        </div>
    </section>
  )
}

export default Work;