import { PomoState, Timer, ButtonGroup, Navbar } from "./components"
import './App.css'
import { useTheme } from "./context/ThemeWrapper"
import { useTimer } from './context/TimerContext'
import SettingsModal from './components/SettingsModal'


function App() {
  const { color } = useTheme();
  const { showModal } = useTimer();

  return (
    <>
      <div className={`h-screen overflow-hidden ${color.backgroundColor}`}>
        <Navbar />
        <div className={`flex h-full items-center justify-center -mt-10`}>
          <div className='flex items-center justify-center flex-col'>
            <PomoState />
            <Timer />
            <ButtonGroup />
          </div>
        </div>

      </div>
      {showModal && (
        <SettingsModal />
      )}

    </>
  )
}

export default App
