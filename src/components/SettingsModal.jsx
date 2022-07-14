import React from 'react'
import { CloseIcon } from '../utils/MyIcons'
import SettingTile from './atoms/SettingTile'
import { useTheme } from '../context/ThemeWrapper'
import { useTimer } from '../context/TimerContext'
import { useSettings } from '../context/SettingsContext'

const SettingsModal = () => {
    const { color } = useTheme();
    const { toggleSettingsModal } = useTimer()
    const { settings, updateTimeLength, updateAutoResume, updateLongBreakInterval } = useSettings()

    return (
        <div
            className={`flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 items-center justify-center z-10 bg-transparent`}>
            <div className={`settingsModal flex flex-col p-6 rounded-xl ${color.backgroundColor} w-[300px] xl:w-[448px]`}>
                <div className='flex items-center justify-between mb-3'>
                    <h3 className={`font-semibold ${color.textColor} text-2xl`}>Settings</h3>
                    <button onClick={toggleSettingsModal}>
                        <CloseIcon size={18} color={color.fillColor} />
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center w-full'>
                    {Object.values(settings.states).map(({ id, length, label }) => (
                        <SettingTile onChange={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                                e.target.value = e.target.value.slice(0, e.target.maxLength)
                            updateTimeLength({ id, length: e.target.value })
                        }} value={length} state={id} key={id} name={label} />
                    ))}

                    <SettingTile onChange={(e) => {
                        if (e.target.value.length > e.target.maxLength)
                            e.target.value = e.target.value.slice(0, e.target.maxLength)
                        updateLongBreakInterval(+e.target.value)

                    }} value={settings.longBreakInterval} state="Interval" name="Pomodoros until long break" />

                    <SettingTile name="Auto Resume Timer" checked={settings.autoResume} onChange={updateAutoResume} type="switch" variant={color.themeColor} />
                </div>
            </div>
        </div>
    )
}

export default SettingsModal