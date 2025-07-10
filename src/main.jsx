import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FullPage from "./FullPage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FullPage />
  </StrictMode>,
)
