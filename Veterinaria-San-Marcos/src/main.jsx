import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Inicio } from './pages/inicio.jsx'
import { Productos } from './pages/productos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
