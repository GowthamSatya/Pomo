import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useTheme } from '../utils/ThemeWrapper';
import { useTimer } from '../utils/TimerContext';
import { formatTime } from '../utils/TimerContext';

const Timer = () => {
    const { color } = useTheme();
    const { timeLeft } = useTimer();
    return (
        <div className='flex flex-col'>
            <div className={`font-medium text-[200px] -mb-16 -mt-10 ${color.textColor}`}>{`${formatTime(timeLeft).split(':')[0]} `}</div>
            <div className={`font-medium text-[200px] -mt-16 -mb-10 ${color.textColor}`}> {`${formatTime(timeLeft).split(':')[1]} `}</div>
        </div>
    )
}

export default Timer