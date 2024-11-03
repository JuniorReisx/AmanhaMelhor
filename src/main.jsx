import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageRoutes from './router/routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageRoutes/>
  </StrictMode>,
)
