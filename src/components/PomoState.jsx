import React, { useState } from 'react'
import { useTheme } from "../utils/ThemeWrapper"
import { BreakIcon, FocusIcon } from '../utils/MyIcons'
import { useTimer } from '../utils/TimerContext';

const PomoState = () => {
    const { color } = useTheme();
    const { timerState } = useTimer();

    let PomoStatusData = null;
    if (timerState === 'timer') {
        PomoStatusData = (
            <>
                <FocusIcon size={18} className={`ml-2 mt-[2px]`} color={`${color.fillColor}`} />
                <p className={`mx-2 font-medium ${color.textColor}`}>Focus</p>
            </>
        )
    } else if (timerState === 'shortBreak') {
        PomoStatusData = (

            <>
                <BreakIcon size={16} className={`ml-2 -mt-[2px]`} color={`${color.fillColor}`} />
                <p className={`mx-2 font-medium ${color.textColor}`}>Short Break</p>
            </>

        )
    } else {
        PomoStatusData = (

            <>
                <BreakIcon size={16} className={`ml-2 -mt-[2px]`} color={`${color.fillColor}`} />
                <p className={`mx-2 font-medium ${color.textColor}`}>Long Break</p>
            </>

        )
    }

    return (
        <div className={`min-w-[95px] flex border-2 rounded-full items-center ${color.iconBgColor} justify-center ${color.borderColor} p-0.5`}>
            {PomoStatusData}

        </div>
    )
}

export default PomoState