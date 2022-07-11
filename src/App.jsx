import { useState } from 'react'
import { PomoState, Timer, ButtonGroup } from "./components"
import './App.css'
import { useTheme } from "./utils/ThemeWrapper"


function App() {
  const { darkTheme, toggleTheme, updateColor, color } = useTheme();
  console.log(darkTheme, color);
  return (
    <div className={`h-screen ${color.backgroundColor} flex items-center justify-center`}>
      <div className='flex flex-col'>
        <button onClick={toggleTheme}>
          ToggleTheme
        </button>

        <button onClick={() => updateColor('green')}>
          Green
        </button>
        <button onClick={() => updateColor('blue')}>
          Blue
        </button>
        <button onClick={() => updateColor('red')}>
          Red
        </button>


        <PomoState />
        <Timer />
        <ButtonGroup />
      </div>
    </div>
  )
}

export default App
