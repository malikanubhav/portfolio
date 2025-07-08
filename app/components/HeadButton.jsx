import React from 'react'

const HeadButton = ({ text, size, fontSize, fontStyle, click }) => {
  return (
    <button onClick={() => {document.getElementById('contact-modal').showModal(); console.log("button clicked");}} className={`w-28 h-28 hover:cursor-pointer bg-white text-black text-${fontSize} font-${fontStyle} rounded-full`}>{text}</button>
  )
}

export default HeadButton