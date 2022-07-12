import { useState } from 'react'
import { PomoState, Timer, ButtonGroup } from "./components"
import './App.css'
import { useTheme } from "./utils/ThemeWrapper"
import { MdNightlightRound } from "react-icons/md"
import { FiSun } from "react-icons/fi"


function App() {
  const { darkTheme, toggleTheme, updateColor, color } = useTheme();
  console.log(darkTheme, color);
  return (
    <div className={`h-screen overflow-hidden ${color.backgroundColor}`}>
      <div className='w-full flex items-center justify-end p-4'>
        <button className='m-3' onClick={toggleTheme}>
          {darkTheme ? <FiSun size={30} className='text-mygray-50' /> : <MdNightlightRound className='text-black' size={30} />}
        </button>
        <button className={`w-8 h-8 m-2 bg-mygreen-400 rounded-full border-2 ${darkTheme ? "border-mygray-50" : "border-black"}`} onClick={() => updateColor('green')}>
        </button>
        <button className={`w-8 h-8 m-2 bg-myblue-400 rounded-full border-2 ${darkTheme ? "border-mygray-50" : "border-black"}`} onClick={() => updateColor('blue')}></button>
        <button className={`w-8 h-8 m-2 bg-myred-400 rounded-full border-2 ${darkTheme ? "border-mygray-50" : "border-black"}`} onClick={() => updateColor('red')}></button>
      </div>
      <div className={`flex h-full items-center justify-center`}>
        <div className='flex items-center justify-center flex-col'>
          <PomoState />
          <Timer />
          <ButtonGroup />
        </div>
      </div>
    </div>

  )
}

export default App
