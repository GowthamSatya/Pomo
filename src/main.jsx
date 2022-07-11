import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeWrapper } from './utils/ThemeWrapper'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </React.StrictMode>
)
