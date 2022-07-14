import React from 'react'
import { useTheme } from '../context/ThemeWrapper'
import { MdNightlightRound } from "react-icons/md"
import { FiSun } from "react-icons/fi"
import { Logo } from '../utils/MyIcons'
import useWindowSize from '../hooks/useWindowSize'

const Navbar = () => {
    const { color, updateColor, toggleTheme, darkTheme } = useTheme()
    const { width } = useWindowSize()

    const mobileNav = (
        <div className='w-full flex items-center justify-between p-4'>
            <div>
                <Logo size={32} className="rounded-lg" variant={color.themeColor} darkTheme={darkTheme} />
            </div>
            <div className='flex items-center justify-center'>
                <button className='m-3' onClick={toggleTheme}>
                    {darkTheme ? <FiSun size={30} className='text-mygray-50' /> : <MdNightlightRound className='text-black' size={30} />}
                </button>
                <button className={`w-8 h-8 m-2 bg-mygreen-400 rounded-full border-2 ${darkTheme ? "border-mygray-50" : "border-black"}`} onClick={() => updateColor('green')}>
                </button>
                <button className={`w-8 h-8 m-2 bg-myblue-400 rounded-full border-2 ${darkTheme ? "border-mygray-50" : "border-black"}`} onClick={() => updateColor('blue')}></button>
                <button className={`w-8 h-8 m-2 bg-myred-400 rounded-full border-2 ${darkTheme ? "border-mygray-50" : "border-black"}`} onClick={() => updateColor('red')}></button>
            </div>

        </div>
    )

    const desktopNav = (
        <div className='w-full flex items-center justify-between p-4'>
            <div>
                <button className='m-3' onClick={toggleTheme}>
                    {darkTheme ? <FiSun size={30} className='text-mygray-50' /> : <MdNightlightRound className='text-black' size={30} />}
                </button>
            </div>
            <div className='flex items-center justify-center -mr-20'>
                <Logo size={32} className="rounded-lg mr-2" variant={color.themeColor} darkTheme={darkTheme} />
                <span className={`${color.textColor} font-extrabold text-[22px]`}>Pomo</span>
            </div>

            <div className='flex items-center justify-center'>
                <button className={`w-8 h-8 m-2 bg-mygreen-400 rounded-full border-2 ${darkTheme ? "border-mygray-50" : "border-black"}`} onClick={() => updateColor('green')}>
                </button>
                <button className={`w-8 h-8 m-2 bg-myblue-400 rounded-full border-2 ${darkTheme ? "border-mygray-50" : "border-black"}`} onClick={() => updateColor('blue')}></button>
                <button className={`w-8 h-8 m-2 bg-myred-400 rounded-full border-2 ${darkTheme ? "border-mygray-50" : "border-black"}`} onClick={() => updateColor('red')}></button>
            </div>

        </div>
    )
    return (width > 500) ? desktopNav : mobileNav;

}

export default Navbar