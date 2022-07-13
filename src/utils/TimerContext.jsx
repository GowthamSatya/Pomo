import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import useCountdown from "../hooks/useCountdown";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useSettings } from "./SettingsContext";
import { FOCUS, LONG_BREAK, SHORT_BREAK } from "../constants";
import { useTheme } from "./ThemeWrapper";
const TimerContext = createContext();

dayjs.extend(duration);

export function formatTime(time) {
    return dayjs.duration(time, "seconds").format("mm:ss");
}

export const useTimer = () => {
    return useContext(TimerContext)
}

export const TimerWrapper = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const { settings, updateState, updateRound } = useSettings();

    const { ticking, start, stop, reset, timeLeft, progress } = useCountdown({
        minutes: settings.states[settings.name].length,
        onStart: () => {

        },
        onStop: () => {

        },
        onComplete: () => {
            nextTimerState();
        },
    });

    const jumpState = useCallback((id) => {
        console.log(id);
        updateState(id)
    }, [useSettings, reset])

    const nextState = useCallback(() => {
        switch (settings.name) {
            case LONG_BREAK:
            case SHORT_BREAK:
                jumpState(FOCUS);
                if (settings.autoResume) start()
                break;
            default:
                jumpState(SHORT_BREAK);
                updateRound()
                if (settings.autoResume) start()
                break

        }
    }, [useSettings, jumpState, settings.autoResume, settings.name, start])

    const toggleTimer = useCallback(() => {
        if (!ticking) start()
        else stop()
    }, [start, stop, ticking])


    const toggleSettingsModal = () => {
        setShowModal(!showModal)
    }

    return (
        <TimerContext.Provider value={{ ticking, start, stop, timeLeft, toggleTimer, nextState, toggleSettingsModal, showModal }}>
            {children}
        </TimerContext.Provider>
    )
}