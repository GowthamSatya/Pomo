import React from 'react'
import { ThemeWrapper } from './ThemeWrapper'
import { TimerWrapper } from "./TimerContext"
import { SettingsWrapper } from "./SettingsContext"

const StateWrapper = ({ children }) => {
    return (
        <ThemeWrapper>
            <SettingsWrapper>
                <TimerWrapper>
                    {children}
                </TimerWrapper>
            </SettingsWrapper>
        </ThemeWrapper>
    )
}

export default StateWrapper