import React, { createContext, useContext, useState } from "react"

const TimerContext = createContext();

export const useTimer = () => {
    return useContext(TimerContext)
}

export const TimerWrapper = ({ children }) => {
    const [timerState, setTimerState] = useState('shortBreak');

    const toggleTimerState = (state) => {
        setTimerState(state)
    }
    return (
        <TimerContext.Provider value={{ timerState, toggleTimerState }}>
            {children}
        </TimerContext.Provider>
    )
}