import React from 'react'
import BrainIcon from "../../assets/Vector.svg"

const PomoState = () => {
    return (
        <div className="flex border-2 rounded-full items-center justify-center border-[#471515] p-1">
            <img src={BrainIcon} className="w-5 ml-2" alt="StateIcon" />
            <p className='mx-2 font-medium'>Focus</p>
        </div>
    )
}

export default PomoState