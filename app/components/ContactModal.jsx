import React, { useEffect } from 'react';
import InputBox from "./InputBox";
import PhoneNumberInput from './PhoneNumberInput';
import HeadButton from './HeadButton';
import { FaRegPaperPlane } from "react-icons/fa";

const ContactModal = () => {

    useEffect(()=>{

    });

    return (
        <div>
            <dialog id="contact-modal" className="modal modal-bottom sm:modal-middle text-white">
                <div className="modal-box bg-black border border-white p-8">
                    <h3 className="font-bold text-2xl text-center mb-4 italic">Say Hello!</h3>
                    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    {/* <div className='flex flex-col items-center w-full '> */}
                        <form className='w-full'>
                            <InputBox label={"Name"} type={"text"} placeholder={"Full Name"} />
                            <PhoneNumberInput />
                            <textarea className="textarea text-black " placeholder="Message" id=""></textarea>
                            <button className='hover:cursor-pointer m-2 p-4'><FaRegPaperPlane size={38} /></button> 
                        </form>
                    {/* </div> */}
                </div>
            </dialog>
        </div>
    )
}

export default ContactModal