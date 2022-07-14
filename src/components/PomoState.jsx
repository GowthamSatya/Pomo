import React from 'react'
import { useTheme } from "../context/ThemeWrapper"
import { BreakIcon, FocusIcon } from '../utils/MyIcons'
import { FOCUS, SHORT_BREAK } from '../constants';
import { useSettings } from '../context/SettingsContext';

const PomoState = () => {
    const { color } = useTheme();
    const { settings } = useSettings();

    let PomoStatusData = null;
    if (settings.state === FOCUS) {
        PomoStatusData = (
            <>
                <FocusIcon size={18} className={`ml-2 mt-[2px]`} color={`${color.fillColor}`} />
                <p className={`mx-2 font-medium ${color.textColor}`}>Focus</p>
            </>
        )
    } else if (settings.state === SHORT_BREAK) {
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