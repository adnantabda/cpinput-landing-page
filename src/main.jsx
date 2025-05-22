import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CompetitiveProgrammingInputGenerator from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompetitiveProgrammingInputGenerator />
  </StrictMode>,
)
