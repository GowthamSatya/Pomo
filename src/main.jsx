import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeWrapper } from './utils/ThemeWrapper'
<<<<<<< Updated upstream
=======
import { TimerWrapper } from "./utils/TimerContext"
import { SettingsWrapper } from "./utils/SettingsContext"
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeWrapper>
<<<<<<< Updated upstream
      <App />
=======
      <SettingsWrapper>
        <TimerWrapper>
          <App />
        </TimerWrapper>
      </SettingsWrapper>
>>>>>>> Stashed changes
    </ThemeWrapper>
  </React.StrictMode>
)
