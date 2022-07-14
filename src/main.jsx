import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StateWrapper from './context/StateWrapper'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateWrapper>
      <App />
    </StateWrapper>
  </React.StrictMode>
)
