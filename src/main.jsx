import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeWrapper } from './utils/ThemeWrapper'
import { TimerWrapper } from "./utils/TimerContext"
import { SettingsWrapper } from "./utils/SettingsContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeWrapper>
      <SettingsWrapper>
        <TimerWrapper>
          <App />
        </TimerWrapper>
      </SettingsWrapper>
    </ThemeWrapper>
  </React.StrictMode>
)
