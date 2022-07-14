import React, { createContext, useContext, useState } from "react"
import { FOCUS, LONG_BREAK, SHORT_BREAK } from "../constants"
const SettingsContext = createContext();

export const useSettings = () => {
    return useContext(SettingsContext)
}

export const SettingsWrapper = ({ children }) => {
    const initialState = {
        state: FOCUS,
        round: 1,
        autoResume: false,
        longBreakInterval: 10,
        states: {
            [FOCUS]: {
                id: FOCUS,
                label: "Focus Length",
                length: 25
            },
            [SHORT_BREAK]: {
                id: SHORT_BREAK,
                label: "Short Break Duration",
                length: 15
            },
            [LONG_BREAK]: {
                id: LONG_BREAK,
                label: "Long Break Duration",
                length: 25
            }
        }
    }
    const [settings, modifySettings] = useState(initialState)

    const updateRound = () => {
        settings.round++;
        modifySettings({
            ...settings,
            round: settings.round++
        })
    }

    const resetRound = () => {
        modifySettings({
            ...settings,
            round: 1
        })
    }

    const updateLongBreakInterval = (value) => {
        modifySettings({
            ...settings,
            longBreakInterval: value
        })
    }

    const updateState = (id) => {
        settings.state = id;
        modifySettings({
            state: id,
            ...settings
        })
    }

    const updateTimeLength = ({ id, length }) => {
        modifySettings(prevState => ({
            ...prevState,
            states: {
                ...prevState.states,
                [id]: {
                    ...prevState.states[id],
                    length,
                }
            }
        }))
    }

    const updateAutoResume = () => {
        modifySettings(prevState => ({
            ...prevState,
            autoResume: !prevState.autoResume
        }))
    }

    return (
        <SettingsContext.Provider value={{ settings, updateRound, updateState, updateTimeLength, updateAutoResume, updateLongBreakInterval, resetRound }}>
            {children}
        </SettingsContext.Provider>
    )
}