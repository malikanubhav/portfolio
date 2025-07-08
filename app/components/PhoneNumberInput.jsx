import React from 'react'

const PhoneNumberInput = () => {
    return (
        <div className='text-black'><label className="input validator">
            <input
                type="tel"
                className="tabular-nums "
                placeholder="Phone"
                pattern="[0-9]*"
                minLength="10"
                maxLength="10"
                title="Must be 10 digits"
            />
        </label>
            <p className="validator-hint">Must be 10 digits</p></div>
    )
}

export default PhoneNumberInput