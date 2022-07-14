import React from 'react'
import { useTheme } from '../context/ThemeWrapper';
import { useTimer } from '../context/TimerContext';
import { formatTime } from '../helpers';

const Timer = () => {
    const { color } = useTheme();
    const { timeLeft, ticking } = useTimer();
    return (
        <div className='flex flex-col'>
            <div className={`${ticking ? "font-bold" : "font-[50]"} text-[200px] -mb-16 -mt-10 ${color.textColor}`}>{`${formatTime(timeLeft).split(':')[0]} `}</div>
            <div className={`${ticking ? "font-bold" : "font-thin"} text-[200px] -mt-16 -mb-10 ${color.textColor}`}> {`${formatTime(timeLeft).split(':')[1]} `}</div>
        </div>
    )
}

export default Timer