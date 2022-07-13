import React, { useRef } from 'react'
import Switch from "react-switch";
import { useTheme } from '../../utils/ThemeWrapper';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config.js'
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"

const SettingTile = ({ type, checked, value, name, onChange }) => {
    const { theme } = resolveConfig(tailwindConfig)
    const { darkTheme, color } = useTheme()
    const inputRef = useRef();

    const IncrementValue = () => {
        inputRef.current.stepUp();
    }

    const DecrementValue = () => {
        inputRef.current.stepDown()
    }

    return (
        <div className='flex items-center justify-between my-3 w-full'>
            <h5 className={`font-medium ${color.textColor}`}>{name}</h5>
            {type === 'switch' ? (
                <Switch
                    onChange={onChange}
                    checked={checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor={theme.colors.myred[300]}
                    onHandleColor={theme.colors.myred[50]}
                    offHandleColor={theme.colors.myred[50]}
                    handleDiameter={15} width={34} height={20}
                />
            ) : (
                <div className='relative'>
                    <input
                        ref={inputRef}
                        value={value}
                        onChange={onChange}
                        type="number"
                        min={0}
                        max={99}
                        maxLength="2"
                        className={`overflow-hidden border ${darkTheme ? "border-whiteAlpha-100" : "border-blackAlpha-100"} ${color.textColor} outline-none p-2 pr-6 w-16 hover:none rounded-md h-10 ${color.iconBgColor}`}
                    />
                    <div className='flex flex-col absolute top-1 right-1'>
                        <button onClick={IncrementValue}>
                            <VscTriangleUp
                                color={!darkTheme ? theme.colors.mygray[900] : theme.colors.mygray[50]}
                            />
                        </button>
                        <button onClick={DecrementValue}>
                            <VscTriangleDown
                                color={!darkTheme ? theme.colors.mygray[900] : theme.colors.mygray[50]}
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SettingTile