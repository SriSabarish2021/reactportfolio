import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ItemcontextProvider from './Context/Contextprovider'

createRoot(document.getElementById('root')).render(
  <ItemcontextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ItemcontextProvider>

)
