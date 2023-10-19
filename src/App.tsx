import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Checkin from './pages/Checkin'
import Dashboard from './pages/Dashboard'




function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Gym</h1>
          <NavLink to="/checkin">Checkin</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Checkin />} />
          <Route path="/checkin" element={<Checkin />} />
          <Route path="/dashbaord" element={<Dashboard />} />
        </Routes>

      </main>
    </BrowserRouter>

  )
}

export default App
