import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Inicio } from './pages/inicio.jsx'
import { Productos } from './pages/productos.jsx'
import { Inicio_Sesion } from './pages/inicio-sesion.jsx'
import { Registro } from './pages/registro.jsx'
import { Contacto } from './pages/contacto.jsx'
import { Admin } from './pages/admin/admin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/inicio-sesion' element={<Inicio_Sesion />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
