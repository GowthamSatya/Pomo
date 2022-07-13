import React, { useState } from 'react'
import { useTheme } from "../utils/ThemeWrapper"
import { BreakIcon, FocusIcon } from '../utils/MyIcons'
<<<<<<< Updated upstream

const PomoState = () => {
    const { color } = useTheme();
    const [timerState, setTimerState] = useState(true);
=======
import { useTimer } from '../utils/TimerContext';
import { FOCUS, SHORT_BREAK } from '../constants';
import { useSettings } from '../utils/SettingsContext';

const PomoState = () => {
    const { color } = useTheme();
    const { settings } = useSettings();

    let PomoStatusData = null;
    if (settings.name === FOCUS) {
        PomoStatusData = (
            <>
                <FocusIcon size={18} className={`ml-2 mt-[2px]`} color={`${color.fillColor}`} />
                <p className={`mx-2 font-medium ${color.textColor}`}>Focus</p>
            </>
        )
    } else if (settings.name === SHORT_BREAK) {
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

>>>>>>> Stashed changes
    return (
        <div className={`flex border-2 rounded-full items-center ${color.iconBgColor} justify-center ${color.borderColor} p-0.5`}>
            {!timerState ? (
                <>
                    <FocusIcon size={18} className={`ml-2 mt-[2px]`} color={`${color.fillColor}`} />
                    <p className={`mx-2 font-medium ${color.textColor}`}>Focus</p>
                </>

            ) : (
                <>
                    <BreakIcon size={16} className={`ml-2 -mt-[2px]`} color={`${color.fillColor}`} />
                    <p className={`mx-2 font-medium ${color.textColor}`}>Break</p>
                </>
            )}

        </div>
    )
}

export default PomoState