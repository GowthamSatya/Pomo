import React, { createContext, useContext, useState, useCallback } from "react"
import useCountdown from "../hooks/useCountdown";
import { useSettings } from "./SettingsContext";
import { FOCUS, LONG_BREAK, NEXT_STATE_ALERT, POMO_END_ALERT, SHORT_BREAK } from "../constants";
import { useTheme } from "./ThemeWrapper";

const TimerContext = createContext();

export const useTimer = () => {
    return useContext(TimerContext)
}

export const TimerWrapper = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const { settings, updateState, updateRound, resetRound } = useSettings();
    const { updateColor } = useTheme()

    const { ticking, start, stop, reset, timeLeft, progress } = useCountdown({
        minutes: settings.states[settings.state].length,
        onStart: () => {

        },
        onStop: () => {

        },
        onComplete: () => {
            onCompleteState();
        },
    });

    const onCompleteState = () => {
        if (settings.state === LONG_BREAK)
            alert(POMO_END_ALERT);
        nextState()

    }

    const jumpState = useCallback((id) => {
        reset()
        updateState(id)
    }, [useSettings, settings.state, reset])

    const nextState = useCallback(() => {
        switch (settings.state) {
            case LONG_BREAK:
            case SHORT_BREAK:
                jumpState(FOCUS);
                updateColor("red");
                if (settings.autoResume) start()
                break;
            default:
                if (settings.round === settings.longBreakInterval) {

                    jumpState(LONG_BREAK)
                    updateColor("blue")
                    resetRound()
                }
                else {
                    jumpState(SHORT_BREAK);
                    updateColor("green")
                    updateRound()
                }

                if (settings.autoResume) start()
                break

        }
    }, [useSettings, jumpState, settings.autoResume, settings.state, start])

    const toggleTimer = useCallback(() => {
        if (!ticking) start()
        else stop()
    }, [start, stop, ticking])


    const toggleSettingsModal = () => {
        setShowModal(!showModal)
    }

    const confirmAction = useCallback(
        (cb) => {
            let allowed = true;
            if (settings.state === LONG_BREAK) {
                alert(POMO_END_ALERT);
                allowed = confirm(NEXT_STATE_ALERT);
            }
            if (ticking) {
                stop();
                allowed = confirm(NEXT_STATE_ALERT);
                start();
            }

            if (allowed) {
                cb();
            }
        },
        [start, stop, ticking]
    );

    const confirmNext = useCallback(() => {
        confirmAction(nextState);
    }, [confirmAction, nextState]);

    return (
        <TimerContext.Provider value={{ ticking, start, stop, timeLeft, toggleTimer, confirmNext, toggleSettingsModal, showModal }}>
            {children}
        </TimerContext.Provider>
    )
}