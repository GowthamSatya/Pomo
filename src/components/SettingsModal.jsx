import React, { useState, useRef } from 'react'
import { CloseIcon } from '../utils/MyIcons'
import SettingTile from './atoms/settingTile'
import { useTheme } from '../utils/ThemeWrapper'
import { useTimer } from '../utils/TimerContext'
import { useSettings } from '../utils/SettingsContext'

const SettingsModal = () => {
    const { color } = useTheme();
    const { toggleSettingsModal } = useTimer()
    const { settings, updateTimeLength, updateAutoResume } = useSettings()

    const handleSubmitClick = () => {
        toggleSettingsModal()
    }

    return (
        <div
            className={`flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 items-center justify-center z-10 bg-transparent`}>
            <div className={`settingsModal flex flex-col p-6 rounded-xl ${color.backgroundColor} w-[300px] xl:w-[448px]`}>
                <div className='flex items-center justify-between mb-3'>
                    <h3 className={`font-semibold ${color.textColor}`}>Settings</h3>
                    <button onClick={toggleSettingsModal}>
                        <CloseIcon size={14} color={color.fillColor} />
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center w-full'>
                    {Object.values(settings.states).map(({ id, length, label }) => (
                        <SettingTile onChange={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                                e.target.value = e.target.value.slice(0, e.target.maxLength)
                            updateTimeLength({ id, length: e.target.value })
                        }} value={length} key={id} name={label} />
                    ))}

                    {/* <SettingTile onChange={(e) => {
                        if (e.target.value.length > e.target.maxLength)
                            e.target.value = e.target.value.slice(0, e.target.maxLength)
                        handlePomoCount(+e.target.value)

                    }} value={pomoCount} name="Pomodoros until long break" />
                    <SettingTile onChange={(e) => {
                        if (e.target.value.length > e.target.maxLength)
                            e.target.value = e.target.value.slice(0, e.target.maxLength)
                        updateSettings([
                            ...settings,
                            {
                                id: "shortBreak",
                                length: e.target.value
                            }
                        ])
                    }} value={settings[1].length} name="Short break length" />
                    <SettingTile onChange={(e) => {
                        if (e.target.value.length > e.target.maxLength)
                            e.target.value = e.target.value.slice(0, e.target.maxLength)
                        updateSettings([
                            ...settings,
                            {
                                id: "longBreak",
                                length: e.target.value
                            }
                        ])
                    }} value={settings[2].length} name="Long break length" /> */}
                    <SettingTile name="Auto Resume Timer" checked={settings.autoResume} onChange={updateAutoResume} type="switch" />
                </div>
                <button onClick={handleSubmitClick}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default SettingsModal