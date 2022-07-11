import { useState } from 'react'
import { PomoState, Timer, ButtonGroup } from "./components"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-[#FFF2F2] flex items-center justify-center">
      <div className='flex flex-col'>
        <PomoState />
        <Timer />
        <ButtonGroup />
      </div>
    </div>
  )
}

export default App
