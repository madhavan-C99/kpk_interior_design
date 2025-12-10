import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import App from './App.jsx'
=======
import App from './App.jsx'
import './index.css'
>>>>>>> c5f57f330fde2c38710e13c3d6a128d4b848a0fb

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
