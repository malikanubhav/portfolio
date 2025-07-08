import Input from 'daisyui/components/input'
import React from 'react'

const InputBox = ({ type, label, placeholder }) => {
    return (
        <fieldset className="fieldset ">
            <input type={type} className="input text-black mb-4" placeholder={placeholder} />
        </fieldset>
    )
}

export default InputBox