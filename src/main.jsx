import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SpryApp from './SpryApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpryApp />
  </StrictMode>,
)
